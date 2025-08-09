// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: process.env.VITE_BASE_URL || '/codehers-e-commerce/',   // important: leading and trailing slash
  plugins: [react()],
})