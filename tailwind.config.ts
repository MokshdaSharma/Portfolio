import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif']
      },
      colors: {
        ink: '#050816',
        night: '#09111f',
        cobalt: '#1b4fd9',
        electric: '#8a5cff',
        mist: '#d8e2ff'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(138, 92, 255, 0.18), 0 24px 80px rgba(6, 12, 26, 0.55)'
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.65' },
          '50%': { opacity: '1' }
        }
      },
      animation: {
        shimmer: 'shimmer 12s linear infinite',
        float: 'float 6s ease-in-out infinite',
        pulseSlow: 'pulseSlow 4s ease-in-out infinite'
      }
    }
  },
  plugins: []
};

export default config;