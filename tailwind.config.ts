import { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#D4AF37',
          700: '#B18624'
        },
        neutral: {
          900: '#0F1720',
          700: '#374151',
          600: '#6B7280',
          200: '#F3F4F6'
        },
        warm: '#FBF8F1'
      },
      borderRadius: {
        xl: '12px'
      },
      boxShadow: {
        soft: '0 6px 20px rgba(15,23,32,0.08)'
      }
    }
  },
  plugins: []
};

export default config;
