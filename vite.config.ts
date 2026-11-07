import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Served from https://nafisa-333.github.io/My-portfolio/ (GitHub Pages project site).
export default defineConfig({
  base: '/My-portfolio/',
  plugins: [react(), tailwindcss()],
});
