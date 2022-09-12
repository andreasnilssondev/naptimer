import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      utils: path.resolve('./src/utils'),
      constants: path.resolve('./src/constants'),
      components: path.resolve('./src/components'),
      hooks: path.resolve('./src/hooks'),
    },
  },
});
