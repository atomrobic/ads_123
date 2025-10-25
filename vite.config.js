import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['0024c1e6e9aa.ngrok-free.app'], // 👈 Add your ngrok domain here
    host: true, // optional but recommended
  },
})
