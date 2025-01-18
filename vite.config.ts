import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import eslint from 'vite-plugin-eslint';

// const plugins = [react(), eslint({
//   failOnError: false, // Prevent errors from stopping the server
//   failOnWarning: false, // Prevent warnings from stopping the server
// }),];

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: plugins, // disabled due to eslent/prettier 'comma-dangle' conflicts
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@Src', replacement: '/src' },
      { find: '@Components', replacement: '/src/components' },
      { find: '@Hooks', replacement: '/src/hooks' },
      { find: '@Pages', replacement: '/src/pages' },
      { find: '@Utils', replacement: '/src/utils' },
    ],
  },
  server: {
    port: 3000,
  },
});
