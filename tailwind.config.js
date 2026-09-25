/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff1f8',
          100: '#ffe0ef',
          200: '#ffc1df',
          300: '#ff91c4',
          400: '#ff5ca7',
          500: '#f72f88',
          600: '#e81772',
          700: '#c90e5d',
          800: '#a50f50',
          900: '#891343',
          950: '#520522',
        },
        secondary: {
          50: '#eff6ff',
          100: '#d8e9ff',
          200: '#b9d7ff',
          300: '#88bcff',
          400: '#5698ff',
          500: '#2f73ff',
          600: '#1a54f5',
          700: '#1540e1',
          800: '#1734b6',
          900: '#1a328f',
          950: '#142057',
        },
        accent: {
          50: '#fff1f8',
          100: '#ffd9ec',
          200: '#ffb3d5',
          300: '#ff82ba',
          400: '#ff4ba0',
          500: '#f51b82',
          600: '#df0d6d',
          700: '#bc0959',
          800: '#980b4b',
          900: '#7d0d40',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '72rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.6s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
