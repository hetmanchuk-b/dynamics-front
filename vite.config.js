import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about/index.html'),
        news: resolve(__dirname, 'news/index.html'),
        portfolio: resolve(__dirname, 'portfolio/index.html'),
        catalog: resolve(__dirname, 'catalog/index.html'),
      }
    }
  }
})
