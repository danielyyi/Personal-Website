/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['var(--font-display)', 'Georgia', 'serif'],
        hand: ['var(--font-hand)', 'cursive'],
        accent: ['var(--font-accent)', 'Georgia', 'serif'],
      },
      colors: {
        boho: {
          cream: '#FBF3E4',
          sand: '#F1E4CE',
          terracotta: '#C1663D',
          rust: '#A8461F',
          clay: '#D98B5F',
          mustard: '#D9A441',
          gold: '#C9942C',
          sage: '#8A9B6E',
          olive: '#6B7A4F',
          forest: '#465A32',
          pine: '#333F24',
          rose: '#C97064',
          brown: '#5C4433',
          espresso: '#3B2A20',
        },
      },
    },
  },
  plugins: [],
} 