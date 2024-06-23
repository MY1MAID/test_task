import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import autoprefixer = require("autoprefixer");

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
      ],
    },
  },
});
