import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import checker from 'vite-plugin-checker';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    checker({
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      },
      typescript: true,
    }),
    react(),
  ],
  build: {
    outDir: path.join(__dirname, 'dist/build'),
  },
});
