/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#f3f4f6',
        surface: '#ffffff',
        border: '#d5d8df',
        ink: '#0b0d12',
        muted: '#4f5564',
        accent: '#1d2942'
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      boxShadow: {
        soft: '0 12px 28px rgba(8, 12, 20, 0.08)',
        card: '0 16px 34px rgba(10, 16, 28, 0.1)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
