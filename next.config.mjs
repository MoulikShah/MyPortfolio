/** @type {import('next').NextConfig} */
const securityHeaders = [
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "X-Frame-Options", value: "DENY" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig = {
    reactStrictMode: true,
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
