/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          turquoise: 'var(--color-primary)',
          gray: 'var(--color-secondary)',
          orange: 'var(--color-accent)',
          offwhite: 'var(--color-bg)',
          ink: 'var(--color-text)'
        }
      },
      boxShadow: {
        soft: '0 8px 24px rgba(15, 23, 42, 0.06)'
      }
    }
  },
  plugins: []
};
