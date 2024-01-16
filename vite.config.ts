import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { rollupImportMapPlugin } from "rollup-plugin-import-map";
import { terser } from "rollup-plugin-terser";
import importmap from "./importmap.json" assert { type: "json" };
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { resolve } from "path";

export default defineConfig(() => ({
  plugins: [
    react(),
    cssInjectedByJsPlugin(),
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
  build: {
    manifest: true,
    rollupOptions: {
      input: resolve(__dirname, "src/App.tsx"),
      output: {
        entryFileNames: "mikrofrontend.[hash].js",
        preserveEntrySignatures: "preserveEntrySignatures",
      },
    },
  },
  css: {
    modules: {
      generateScopedName: "[name]__[local]___[hash:base64:5]",
    },
  },
}));
