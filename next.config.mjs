/** @type {import('next').NextConfig} */
const securityHeaders = [
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "X-Frame-Options", value: "DENY" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig = {
    reactStrictMode: true,
    // transformers.js only ever runs in the visitor's browser; without this,
    // Next's file tracing bundles it (plus onnxruntime's native binaries,
    // ~445MB) into every serverless function and blows Vercel's 250MB limit.
    outputFileTracingExcludes: {
        "*": [
            "node_modules/@huggingface/transformers/**",
            "node_modules/onnxruntime-node/**",
            "node_modules/onnxruntime-web/**",
            "node_modules/onnxruntime-common/**",
            "node_modules/sharp/**",
            "node_modules/@mlc-ai/**",
        ],
    },
    async headers() {
        return [{ source: "/(.*)", headers: securityHeaders }];
    },
    webpack: (config) => {
        // onnxruntime-web ships .node binding references that must not be bundled client-side
        config.resolve.alias = {
            ...config.resolve.alias,
            "onnxruntime-node": false,
        };
        return config;
    },
};

export default nextConfig;
