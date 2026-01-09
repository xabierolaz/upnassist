import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, 
    port: 5173,
    headers: {
      // Necesario para SharedArrayBuffer y Atomics (Web Worker Stdin)
      "Cross-Origin-Embedder-Policy": "require-corp",
      "Cross-Origin-Opener-Policy": "same-origin",
    },
  },
  publicDir: 'public',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'zustand'],
          'editor-components': ['@monaco-editor/react'],
        }
      }
    },
    chunkSizeWarningLimit: 800,
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom', 
      'react-router-dom',
      '@heroicons/react/24/outline',
      '@heroicons/react/24/solid'
    ]
  }
})
