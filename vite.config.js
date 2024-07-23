// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Rubiks-Cube-AlgTrainer/',  // Ensure this matches your GitHub Pages URL
  build: {
    outDir: 'dist',
  },
  server: {
    mimeTypes: {
      'text/jsx': ['jsx']
    }
  }
});
