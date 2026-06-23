import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './', 
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  },
  resolve: {
    alias: {
      '@common': fileURLToPath(new URL('./src/common', import.meta.url)),
      '@styles': fileURLToPath(new URL('./src/styles', import.meta.url))
    }
  },
  server: {
    port: 3000,
    open: true
  }
});