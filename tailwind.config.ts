import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                subtle: "var(--subtle)",
            },
            borderRadius: {
                '3xl': '0.75rem',    // reduced from 1.5rem (24px)
                '2xl': '0.5rem',     // reduced from 1rem (16px)
                'xl': '0.375rem',    // reduced from 0.75rem (12px)
                'lg': '0.25rem',     // reduced from 0.5rem (8px)
                'md': '0.1875rem',   // reduced from 0.375rem (6px)
                'sm': '0.125rem',    // reduced from 0.25rem (4px)
            },
        },
    },
    plugins: [],
};
export default config;
