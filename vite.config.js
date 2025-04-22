import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // IMPORTANT: Replace 'your-repo-name' with your actual repository name
  // This base path is required for GitHub Pages deployment
  // It tells Vite to prefix asset paths with your repo name
  base: '/P01-Movie-App/', // Add your repository name here
  css: {
    devSourcemap: true,
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
}) 