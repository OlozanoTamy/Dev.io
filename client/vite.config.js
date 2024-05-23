import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //se hace esta configuracion para que reconozaca el server
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
      changeOrigin: true,
    },
  },
})
