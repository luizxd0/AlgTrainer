// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Define configuration
export default defineConfig({
  plugins: [react()],
  base: '/Rubiks-Cube-AlgTrainer/',  // Adjust this base path to match your GitHub Pages URL
  build: {
    outDir: 'dist',  // Output directory for the build
  },
});
