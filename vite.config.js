// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// FIX: Change this import statement
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // This will now work correctly
    tailwindcss({
      config: {
        darkMode: ['class', '[data-theme="dark"]'], 
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      // 2. Map Tailwind utility classes to our CSS variables
      colors: {
        skin: {
          base: 'var(--bg-main)',
          card: 'var(--bg-card)',
          input: 'var(--bg-input)',
          text: 'var(--text-main)',
          muted: 'var(--text-muted)',
          primary: 'var(--primary)',
          border: 'var(--border)',
        }
      },
      // Optional: Add custom shadows/glows using variables
      boxShadow: {
        'glow': '0 0 20px var(--primary-glow)',
      }
    },
  },
  plugins: [],
},
    }),
  ],
  base: process.env.VITE_BASE_PATH || '/MindFlow-Task',
})