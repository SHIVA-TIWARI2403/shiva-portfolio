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
        bg: '#090909',
        panel: '#101010',
        'panel-light': '#171717',
        ink: '#f2efeb',
        'ink-muted': '#a09c9a',
        crimson: {
          DEFAULT: '#e32b3c',
          dark: '#a6081c',
          light: '#ff5d65',
          border: '#3d161a',
        },
        line: '#292323',
      },
      fontFamily: {
        display: ['"Anton"', 'Impact', 'sans-serif'],
        handwriting: ['"Caveat"', 'cursive'],
        sans: ['"Manrope"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-crimson': 'glowCrimson 3s ease-in-out infinite alternate',
      },
      keyframes: {
        glowCrimson: {
          '0%': { filter: 'drop-shadow(0 0 15px rgba(227, 43, 60, 0.25))' },
          '100%': { filter: 'drop-shadow(0 0 30px rgba(227, 43, 60, 0.55))' },
        }
      }
    },
  },
  plugins: [],
}
