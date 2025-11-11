// vite.config.js
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: './dist', // your project root (where index.html is)
  build: {
    outDir: 'dist',      // where to output production files
    emptyOutDir: true,   // clear dist before each build
  },
  resolve: {
    alias: {
      // lets you use '@' to refer to /src
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    port: 5173,
    open: true, // auto-opens in browser when running `npm run dev`
  }
})
