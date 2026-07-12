// Optional "turbo" chat mode: a small instruct LLM running fully on the
// visitor's GPU via WebLLM (WebGPU). Generation stays grounded in the same
// retrieval hits the plain chat uses; nothing leaves the device.

export const LLM_MODEL = "Qwen2.5-0.5B-Instruct-q4f16_1-MLC";
export const LLM_SIZE = "~350MB";

let enginePromise = null;

export function webgpuSupported() {
    return typeof navigator !== "undefined" && !!navigator.gpu;
}

export async function getLLM(onProgress) {
    if (!enginePromise) {
        enginePromise = import("@mlc-ai/web-llm")
            .then(({ CreateMLCEngine }) =>
                CreateMLCEngine(LLM_MODEL, {
                    initProgressCallback: (report) => {
                        onProgress?.(Math.round((report.progress ?? 0) * 100), report.text);
                    },
                })
            )
            .catch((err) => {
                enginePromise = null;
                throw err;
            });
    }
    return enginePromise;
}

export async function generateGrounded(engine, question, context, onToken) {
    const stream = await engine.chat.completions.create({
        messages: [
            {
                role: "system",
                content:
                    "You answer visitor questions on Moulik Shah's portfolio site, speaking about him in the third person. Answer ONLY from the provided context, in 2-4 friendly sentences. If the context doesn't cover the question, say so briefly and suggest asking about his work, projects, or education. Never invent facts.",
            },
            {
                role: "user",
                content: `Context:\n${context.join("\n\n")}\n\nVisitor question: ${question}`,
            },
        ],
        temperature: 0.4,
        max_tokens: 220,
        stream: true,
    });
    for await (const chunk of stream) {
        const token = chunk.choices?.[0]?.delta?.content;
        if (token) onToken(token);
    }
}
