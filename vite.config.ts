import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "path";
import { defineConfig } from "vite";

const mediaKitDevEntry = () => ({
  name: "media-kit-dev-entry",
  configureServer(server) {
    const mediaKitIndex = path.resolve(
      import.meta.dirname,
      "client/public/media-kit/index.html",
    );

    server.middlewares.use((req, res, next) => {
      if (!req.url) {
        next();
        return;
      }

      const pathname = req.url.split("?")[0];
      if (pathname !== "/media-kit" && pathname !== "/media-kit/") {
        next();
        return;
      }

      if (!fs.existsSync(mediaKitIndex)) {
        next();
        return;
      }

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.end(fs.readFileSync(mediaKitIndex));
    });
  },
});

const plugins = [react(), tailwindcss(), jsxLocPlugin(), mediaKitDevEntry()];

export default defineConfig({
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    strictPort: false, // Will find next available port if 3000 is busy
    host: true,
    allowedHosts: [
      "localhost",
      "127.0.0.1",
    ],
    hmr: {
      clientPort: 443,
    },
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
