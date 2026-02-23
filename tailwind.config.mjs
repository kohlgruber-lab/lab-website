/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef8ff',
          100: '#d5ecff',
          600: '#0f4c81',
          700: '#0b3a63'
        },
        accent: '#d17a22'
      }
    }
  },
  plugins: []
};
