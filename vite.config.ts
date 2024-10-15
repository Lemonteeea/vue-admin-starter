import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import { createPlugins } from './build'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: createPlugins(),
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
