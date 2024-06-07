import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import postcssCustomMedia from "postcss-custom-media";
import postcssCustomProperties from "postcss-custom-properties";
import postcssGlobalData from "@csstools/postcss-global-data";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        postcssGlobalData({
          files: ["./src/styles/variables.css"],
        }),
        postcssCustomProperties({ preserve: false }),
        postcssCustomMedia(),
        autoprefixer(),
      ],
    },
  },
  resolve: {
    alias: {
      "@": "./src",
    },
  },
});
