import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the app works on GitHub Pages under /<repo-name>/
export default defineConfig({
  plugins: [react()],
  base: './',
})
