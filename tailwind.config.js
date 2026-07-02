/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ieee: {
          blue: '#00629B',
          darkblue: '#003B5C',
          lightblue: '#3B9FDB',
          gray: '#F4F6F8',
          slate: '#5A6B7A',
        },
      },
      fontFamily: {
        display: ['"Poppins"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 20px rgba(0, 59, 92, 0.08)',
        cardHover: '0 12px 32px rgba(0, 59, 92, 0.16)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out both',
        fadeIn: 'fadeIn 1s ease-out both',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
