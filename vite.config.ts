import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { imagetools } from "vite-imagetools";
import path from "path";
import { PATH_PREFIX } from "./src/constants/url";

export default defineConfig({
  // base: "/finik-landing/",
  base: PATH_PREFIX,
  // base: "/new/",
  plugins: [react(), svgr(), imagetools()],
  server: {
    fs: {
      strict: false,
    },
  },
  resolve: {
    alias: {
      "@styles": path.resolve(__dirname, "src/styles"),
    },
  },
});
