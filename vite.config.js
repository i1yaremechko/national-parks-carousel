import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: './',
  resolve: {
    alias: {
      '@common': resolve(__dirname, './src/common')
    }
  },
  server: {
    port: 3000,
    open: true
  }
});