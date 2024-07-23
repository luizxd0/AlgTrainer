// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Rubiks-Cube-AlgTrainer/',  // This should match your GitHub Pages URL
  build: {
    outDir: 'dist',  // This is where Vite outputs the built files
  },
});
