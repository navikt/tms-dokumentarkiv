import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { rollupImportMapPlugin } from "rollup-plugin-import-map";
import { terser } from "rollup-plugin-terser";
import importmap from "./importmap.json" assert { type: "json" };

export default defineConfig(() => ({
  plugins: [
    react(),
    {
      ...rollupImportMapPlugin([importmap]),
      enforce: "pre",
      apply: "build",
    },
    terser(),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest-setup.tsx",
  },
  css: {
    modules: {
      generateScopedName: "[name]__[local]___[hash:base64:5]",
    },
  },
}));
