import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/", // ✅ IMPORTANT FOR VERCEL SPA

  server: {
    host: "::",
    port: 8080,
    watch: {
      usePolling: true,
    },
    hmr: {
      overlay: false,
    },
    proxy: {
      "/api": {
        // live
        // target: "http://52.66.103.126:5001",
        // local
        target: "http://127.0.0.1:5001",
        changeOrigin: true,
      },
      "/sitemap.xml": {
        target: "https://api.namandarshan.com",
        changeOrigin: true,
      },
      "/sitemap-": {
        target: "https://api.namandarshan.com",
        changeOrigin: true,
      },
    },
  },

  plugins: [react()].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));