import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
  },
  css: {
    modules: {
      // Permite escribir clases en kebab-case en SCSS y usarlas en camelCase en TSX
      localsConvention: 'camelCaseOnly',
    },
  },
})
