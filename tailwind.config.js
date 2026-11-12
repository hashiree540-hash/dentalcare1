/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Theme Colors: Sky Blue #77CDFF & Pure White with rich dental ocean tones
        themeBlue: {
          DEFAULT: '#77CDFF',
          light: '#BAE6FD',
          dark: '#0284C7',
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#77CDFF',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',
          800: '#075985',
          900: '#0C4A6E',
          navy: '#07273F',
        },
        // Mapped to dental blue system centered on #77CDFF and crisp ocean tones
        maroon: {
          DEFAULT: '#0284C7',
          dark: '#07273F',
          light: '#77CDFF',
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#77CDFF',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',
          800: '#0C4A6E',
          900: '#07273F',
        },
        burgundy: {
          DEFAULT: '#0369A1',
          light: '#77CDFF',
          dark: '#084B77',
        },
        gold: {
          DEFAULT: '#77CDFF',
          light: '#BAE6FD',
          dark: '#0284C7',
          muted: '#E0F2FE',
        },
        ivory: {
          DEFAULT: '#F4FAFD', // Fresh dental ice white
          soft: '#F8FCFF',
          dark: '#E0F2FE',
        },
        charcoal: {
          DEFAULT: '#0F2942', // Deep slate navy for high contrast readability
          light: '#23496D',
          muted: '#5B7B9C',
        },
        borderSoft: '#E1EEF6',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(2, 132, 199, 0.08)',
        'card': '0 10px 30px -5px rgba(2, 132, 199, 0.1), 0 4px 10px -2px rgba(0, 0, 0, 0.02)',
        'card-hover': '0 20px 40px -10px rgba(2, 132, 199, 0.22), 0 8px 16px -4px rgba(0, 0, 0, 0.04)',
        'maroon': '0 10px 25px -5px rgba(2, 132, 199, 0.35)',
        'gold': '0 10px 25px -5px rgba(119, 205, 255, 0.45)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.88', transform: 'scale(1.03)' },
        }
      }
    },
  },
  plugins: [],
}
