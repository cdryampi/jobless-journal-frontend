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
    proxy: {
      '/api': {
        target: 'https://jobless-journal.yampi.eu',
        changeOrigin: true
      }
    }
  }
})