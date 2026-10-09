/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf2f4',
          100: '#fce4e8',
          200: '#f9ccd5',
          300: '#f4a3b3',
          400: '#ee6a82',
          500: '#dd2d4a',
          600: '#c41e3a',
          700: '#a01530',
          800: '#880d1e',
          900: '#6b0a1a',
          950: '#3d050f',
        },
        secondary: {
          50: '#f0fbfd',
          100: '#dcf4f8',
          200: '#bbeaf0',
          300: '#88dae4',
          400: '#4dc1d0',
          500: '#2ba8b8',
          600: '#218a9b',
          700: '#1f6f7e',
          800: '#205a67',
          900: '#1f4c57',
          950: '#0c2e36',
        },
        accent: {
          50: '#fef3f7',
          100: '#fde4ee',
          200: '#fbc9dd',
          300: '#f79cbb',
          400: '#f26a8d',
          500: '#ee4873',
          600: '#e02858',
          700: '#bd1c47',
          800: '#9c1a3f',
          900: '#831a39',
          950: '#490a1c',
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
