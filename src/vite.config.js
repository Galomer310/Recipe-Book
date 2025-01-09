import { defineConfig } from "vite";

export default defineConfig({
  base: "/Recipe-Book/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      input: "index.html",
    },
  },
});
