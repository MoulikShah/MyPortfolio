"use client";

import { useCallback, useRef, useState } from "react";

// Wraps a lazy model loader with UI state + aggregate download progress.
export default function useModel(loader) {
    const [status, setStatus] = useState("idle"); // idle | loading | ready | error
    const [progress, setProgress] = useState(0);
    const modelRef = useRef(null);
    const filesRef = useRef({});

    const load = useCallback(async () => {
        if (modelRef.current) return modelRef.current;
        setStatus("loading");
        try {
            const model = await loader((event) => {
                if (event.status === "progress" && event.total) {
                    filesRef.current[event.file] = {
                        loaded: event.loaded,
                        total: event.total,
                    };
                    const files = Object.values(filesRef.current);
                    const loaded = files.reduce((sum, f) => sum + f.loaded, 0);
                    const total = files.reduce((sum, f) => sum + f.total, 0);
                    setProgress(Math.round((loaded / total) * 100));
                }
            });
            modelRef.current = model;
            setProgress(100);
            setStatus("ready");
            return model;
        } catch (err) {
            console.error("Model load failed:", err);
            setStatus("error");
            throw err;
        }
    }, [loader]);

    return { status, progress, load, model: modelRef };
}
