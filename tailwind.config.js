/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1280px',
            },
        },
        extend: {
            colors: {
                slate: {
                    950: '#020617',
                    900: '#0f172a',
                    700: '#334155',
                },
                stone: {
                    50: '#fafaf9',
                    300: '#d6d3d1',
                },
                emerald: {
                    400: '#34d399',
                    600: '#059669',
                    800: '#065f46', // Deep emerald
                    900: '#064e3b', // Darkest emerald
                },
                gold: {
                    400: '#fbbf24',
                    500: '#f59e0b',
                    600: '#d97706', // Luxury gold
                }
            },
            fontFamily: {
                serif: ['"Cinzel"', 'serif'],
                sans: ['"Montserrat"', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E\")",
            },
            boxShadow: {
                'emerald-glow': '0 0 15px rgba(5, 150, 105, 0.3)',
                'emerald-glow-lg': '0 0 30px rgba(5, 150, 105, 0.4)',
                'gold-glow': '0 0 15px rgba(217, 119, 6, 0.3)',
            },
            borderRadius: {
                'none': '0',
                'sm': '0.5rem',
                'DEFAULT': '0.75rem',
                'md': '1rem',
                'lg': '1.5rem',
                'xl': '2rem',
                '2xl': '3rem',
                '3xl': '4rem',
                'full': '9999px',
            },
        },
    },
    plugins: [],
}
