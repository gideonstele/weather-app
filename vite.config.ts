import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

console.log(process.env.VITE_API_URL);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@lib': path.resolve(__dirname, './src/components/lib'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@ui': path.resolve(__dirname, './src/components/ui'),
      '@queries': path.resolve(__dirname, './src/queries'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    proxy: {
      '^/qweather/.*': {
        target: 'https://pr63yveupx.re.qweatherapi.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/qweather/, ''),
      },
    },
  },
});
