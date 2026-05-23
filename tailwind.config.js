
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#1E3A8A',       // WCAG AAA on white
          navyDark: '#152C6B',
          green: '#16A34A',      // For backgrounds/icons only (fails text on white)
          greenDark: '#15803D',  // WCAG AA for body text on white
          gold: '#C9A227',       // Decorative ONLY — fails text contrast on white
          goldDark: '#8B6914',   // WCAG AA gold for text on white
          light: '#F8FAFC',
          ink: '#0F172A'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.12)',
        'glow': '0 20px 60px -20px rgba(30,58,138,0.4)',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      }
    },
  },
  plugins: [],
}
