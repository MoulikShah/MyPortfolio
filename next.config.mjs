/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
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
