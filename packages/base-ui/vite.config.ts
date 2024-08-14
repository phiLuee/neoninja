import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: "./tsconfig.json",
      include: ["src/**/*"],
      insertTypesEntry: true,
      cleanVueFileName: false,
      copyDtsFiles: true,
      rollupTypes: true,
      outDir: "dist",
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "NeoNinja",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `neoninja.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "tailwindcss"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
    copyPublicDir: false,
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
