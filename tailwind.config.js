/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                background: {
                    light: '#F5F5F5',
                    dark: '#0a0f13',
                    cardLight: '#FFFFFF',
                    cardDark: '#0a0f13',
                },
                primary: {
                    teal: '#0CC8A8',
                    tealHover: '#0AB396',
                },
                severity: {
                    critical: '#EF4444',
                    high: '#F97316',
                    medium: '#EAB308',
                    low: '#22C55E'
                },
                status: {
                    completed: '#22C55E',
                    scheduled: '#9CA3AF',
                    failed: '#EF4444'
                },
                border: {
                    light: '#E5E7EB',
                    dark: '#374151'
                },
                text: {
                    dark: '#0a0f13',
                    light: '#111827',
                    mutedDark: '#9CA3AF',
                    mutedLight: '#6B7280'
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
