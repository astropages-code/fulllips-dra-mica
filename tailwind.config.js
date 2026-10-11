/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#0B0F12',
          light: '#12161B',
          card: '#14181F',
          surface: '#1A202A',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-highlight': 'rgba(168, 85, 247, 0.3)',
        },
        gold: {
          light: '#F3C592',
          DEFAULT: '#E5A96E',
          hover: '#D99B5B',
          dark: '#B87A38',
        },
        violet: {
          deep: '#231138',
          banner: '#3D1E6D',
          glow: '#7C3AED',
          light: '#A855F7',
          soft: '#C084FC',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        handwriting: ['Alex Brush', 'Caveat', 'cursive'],
        script: ['Alex Brush', 'cursive'],
        outfit: ['Outfit', 'sans-serif'],
      },
      borderRadius: {
        'xl': '0.875rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(229, 169, 110, 0.35)',
        'purple-glow': '0 0 35px rgba(139, 92, 246, 0.25)',
        'card-dark': '0 10px 30px -5px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.06)',
        'card-light': '0 10px 30px -5px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'marquee': 'marquee 28s linear infinite',
        'marquee-reverse': 'marquee-reverse 28s linear infinite',
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      }
    },
  },
  plugins: [],
}
