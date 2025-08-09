// import path from "path"
// import tailwindcss from "@tailwindcss/vite"
// import react from "@vitejs/plugin-react"
// import { defineConfig } from "vite"

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   base: "/react-portfolio/",
//   publicDir: "public",
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// })
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// detect if building for GitHub Pages
const isGitHubPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: isGitHubPages ? "/react-portfolio/" : "/",
  publicDir: "public",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
