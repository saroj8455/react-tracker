import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import Terminal from 'vite-plugin-terminal';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ devTarget: 'es2022' }), Terminal()],
  server: {
    watch: {
      usePolling: true,
    },
  },
});
