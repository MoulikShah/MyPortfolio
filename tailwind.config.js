/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,jsx}",
        "./components/**/*.{js,jsx}",
        "./lib/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
                mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
            },
            colors: {
                ink: {
                    950: "#09090b",
                    900: "#101013",
                    850: "#16161a",
                    800: "#1d1d23",
                    700: "#2a2a33",
                },
                accent: {
                    DEFAULT: "#2dd4bf",
                    dim: "#14b8a6",
                    faint: "rgba(45, 212, 191, 0.08)",
                },
                signal: {
                    red: "#fb7185",
                    amber: "#fbbf24",
                },
            },
            maxWidth: {
                content: "44rem",
                wide: "72rem",
            },
        },
    },
    plugins: [],
};
