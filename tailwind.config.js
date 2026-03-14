/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                gold: {
                    100: '#FDF8EA',
                    200: '#FBF0D5',
                    300: '#F6E1AB',
                    400: '#F2D381',
                    500: '#C8A951', // primary luxury gold
                    600: '#B49543',
                    700: '#9E8036',
                    800: '#866B2A',
                    900: '#6E561F',
                },
                black: {
                    DEFAULT: '#1A1A1A',
                    900: '#111111',
                    800: '#1A1A1A', // primary text
                    700: '#2A2A2A',
                    600: '#3A3A3A',
                },
                gray: {
                    50: '#FDFDFD',
                    100: '#F7F7F7', // secondary section background
                    200: '#EAEAEA', // borders
                    300: '#D1D1D1',
                    400: '#A1A1A1',
                    500: '#717171',
                    600: '#4A4A4A',
                    700: '#2A2A2A',
                    800: '#1A1A1A',
                    900: '#0A0A0A',
                }
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'], // Body
                heading: ['Montserrat', 'sans-serif'], // Headings
            },
            animation: {
                'fade-in': 'fadeIn 1s ease-out',
                'fade-up': 'fadeUp 0.8s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            },
            boxShadow: {
                'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
                'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
            }
        },
    },
    plugins: [],
}
