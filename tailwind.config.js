/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#fff1f2',
          100: '#ffe1e3',
          200: '#ffc7cb',
          300: '#ff9da5',
          400: '#ff6b78',
          500: '#ff1e38',
          600: '#e6001f',
          700: '#bf0019',
          800: '#9a0014',
          900: '#7d0010',
        },
      },
      keyframes: {
        scrollVertical: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        marqueeDown: {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0)' },
        },
        floatUp: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255,30,56,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(255,30,56,0.6)' },
        },
      },
      animation: {
        'marquee-up': 'scrollVertical 25s linear infinite',
        'marquee-down': 'marqueeDown 30s linear infinite',
        'float': 'floatUp 6s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
