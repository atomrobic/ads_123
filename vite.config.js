import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // ✅ Use @ as shortcut for /src
    },
  },
  server: {
    allowedHosts: ['.ngrok-free.app'], // ✅ allows any ngrok subdomain
    host: true, // ✅ makes dev server accessible from network
  },
})
