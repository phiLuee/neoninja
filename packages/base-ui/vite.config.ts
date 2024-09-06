import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";

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
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "NeoNinja",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `neoninja.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react-router-dom", "tailwindcss"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react-router-dom": "ReactRouterDOM",
          tailwindcss: "tailwindcss",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: false,
    copyPublicDir: false,
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
