import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/4/",
  build: {
    outDir: "../dist/4",
    emptyOutDir: true,
  },
  server: {
    host: "::",
    port: 8084,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
