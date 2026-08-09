/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          50: '#FDFBF7',
          100: '#F7F4EE',
          200: '#EFEAE1',
          300: '#E2D9CA',
        },
        cream: {
          50: '#FFFFFF',
          100: '#FDFBF7',
          200: '#F8F4EC',
          300: '#F0E8D9',
          400: '#E4D6BE',
        },
        deepblue: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          500: '#2563EB',
          600: '#1D4ED8',
          800: '#1E3A8A',
          900: '#0F172A',
        },
        saffron: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          400: '#F97316',
          500: '#E06A3B',
          600: '#C85427',
          700: '#9A3412',
        },
        charcoal: '#1F2937',
        mutedslate: '#4B5563',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        script: ['Dancing Script', 'Caveat', 'cursive'],
        signature: ['Great Vibes', 'Dancing Script', 'Brush Script MT', 'cursive'],
        cinzel: ['Cinzel', 'serif'],
        heading: ['Outfit', 'Inter', 'sans-serif'],
        telugu: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'warm-sm': '0 2px 8px rgba(30, 58, 138, 0.04), 0 1px 3px rgba(224, 106, 59, 0.04)',
        'warm-md': '0 4px 20px rgba(30, 58, 138, 0.08), 0 2px 8px rgba(224, 106, 59, 0.06)',
        'warm-lg': '0 12px 32px rgba(30, 58, 138, 0.12), 0 4px 16px rgba(224, 106, 59, 0.08)',
        'glow-saffron': '0 0 25px rgba(224, 106, 59, 0.35)',
        'glow-blue': '0 0 25px rgba(30, 58, 138, 0.35)',
      }
    },
  },
  plugins: [],
}
