import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";
import { PATH_PREFIX } from "./src/constants/url";

export default defineConfig({
  // base: "/finik-landing/",
  base: PATH_PREFIX,
  // base: "/new/",
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@styles": path.resolve(__dirname, "src/styles"),
    },
  },
});
