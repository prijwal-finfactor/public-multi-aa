import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@provider': path.resolve(__dirname, './src/sdk/anumati-aa.bundle.js'),
    },
  },
});