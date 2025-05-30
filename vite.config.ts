import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(fileURLToPath(new URL('.', import.meta.url)), 'index.html'),
        post: resolve(fileURLToPath(new URL('.', import.meta.url)), 'pages/post.html')
      }
    }
  },
  optimizeDeps: {
    include: ['@ckeditor/ckeditor5-build-classic']
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: ['jobless.yampi.eu'],
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
    allowedHosts: ['jobless.yampi.eu'],
    proxy: {
      '/api': {
        target: 'https://jobless-journal.yampi.eu',
        changeOrigin: true
      }
    }
  }
})