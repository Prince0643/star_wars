/** @type {import('tailwindcss').Config} */
import animate from 'tailwindcss-animate'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cosmic: {
          deep: '#0B0B1F',
          nebula: '#4A2F5A',
          star: '#FFE9A7',
          cosmicDust: '#2A1E3A',
          void: '#030514',
          dataStream: '#00FF9C',
          automation: '#FF6B6B',
          mobile: '#4ECDC4',
          web: '#45B7D1',
        },
      },
      animation: {
        twinkle: 'twinkle 4s ease-in-out infinite',
        orbit: 'orbit 20s linear infinite',
        float: 'float 6s ease-in-out infinite',
        dataFlow: 'dataFlow 3s linear infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(20px) rotate(0deg)' },
          '100%': {
            transform: 'rotate(360deg) translateX(20px) rotate(-360deg)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        dataFlow: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
    },
  },
  plugins: [animate],
}

