import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  optimizeDeps: {
    include: ['@ckeditor/ckeditor5-build-classic']
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://jobless-journal.yampi.eu',
        changeOrigin: true
      }
    }
  },
  preview: {
    host: '0.0.0.0',
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://jobless-journal.yampi.eu',
        changeOrigin: true
      }
    }
  }
})