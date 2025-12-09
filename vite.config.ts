import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    // 👇 VERY IMPORTANT for GitHub Pages
    // If your repo is https://github.com/username/my-portfolio
    // base should be '/my-portfolio/'
    base: '/',

    server: {
      port: 3000,
      host: '0.0.0.0',
    },

    plugins: [react()],

    // You actually don't *need* process.env with Vite,
    // but if you want to keep it:
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },

    resolve: {
      alias: {
        // instead of path + __dirname just use the root or src folder
        '@': '/src',
      },
    },
  };
});
