import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist", // Set the output directory
    assetsDir: "assets", // Set the assets directory where CSS and JS files will go
    rollupOptions: {
      input: "index.html", // Ensure Vite is bundling the correct HTML file
    },
  },
});
