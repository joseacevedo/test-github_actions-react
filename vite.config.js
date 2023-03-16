import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://joseacevedo.github.io//test-github_actions-react/',
  plugins: [react()],
})
