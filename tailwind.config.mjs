/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'var(--color-primary)',     // Dark Cyan #06948E
          turquoise: 'var(--color-primary)',   // keeps existing class names working
          gray: 'var(--color-secondary)',      // Dark gray accent #707071
          orange: 'var(--color-accent)',       // Orange #E7872B
          offwhite: 'var(--color-bg)',
          ink: 'var(--color-text)',            // Primary dark text #2F3133
          sage: 'var(--color-muted-green)',    // Optional accent #A8B8A3
          navy: 'var(--color-navy)'            // Optional accent #1F3552
        }
      },
      boxShadow: {
        soft: '0 8px 24px rgba(47, 49, 51, 0.08)'
      }
    }
  },
  plugins: []
};
