// Client-side ML runtime. Models are quantized ONNX, downloaded once from the
// Hugging Face CDN and cached by the browser; inference runs locally via
// transformers.js (WASM), so nothing the visitor types leaves their device.

let transformersPromise = null;
let embedderPromise = null;

const EMBED_MODEL = "Xenova/all-MiniLM-L6-v2";

async function loadTransformers() {
    if (!transformersPromise) {
        transformersPromise = import("@huggingface/transformers").then((mod) => {
            mod.env.allowLocalModels = false;
            return mod;
        });
    }
    return transformersPromise;
}

// progress_callback fires per file with { status, file, progress, loaded, total }
export async function getEmbedder(onProgress) {
    if (!embedderPromise) {
        embedderPromise = loadTransformers()
            .then(({ pipeline }) =>
                pipeline("feature-extraction", EMBED_MODEL, {
                    dtype: "q8",
                    progress_callback: onProgress,
                })
            )
            .catch((err) => {
                embedderPromise = null;
                throw err;
            });
    }
    return embedderPromise;
}

export async function embed(embedder, texts) {
    const output = await embedder(texts, { pooling: "mean", normalize: true });
    const [n, dim] = [output.dims[0], output.dims[1]];
    const vectors = [];
    for (let i = 0; i < n; i++) {
        vectors.push(output.data.slice(i * dim, (i + 1) * dim));
    }
    return vectors;
}

// Vectors are L2-normalized, so cosine similarity is a plain dot product
export function cosine(a, b) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) sum += a[i] * b[i];
    return sum;
}
