import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: './tsconfig.lib.json',
      include: ['src/components/**/*'],
      insertTypesEntry: true,
      cleanVueFileName: false,
      copyDtsFiles: true,
      rollupTypes: true,
      outDir: 'dist/types'
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/components/index.ts'),
      name: 'NeoNinja',
      fileName: (format) => `neoninja.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      },
      input: resolve(__dirname, 'index.html') 
    },
    sourcemap: true,
    emptyOutDir: true,
    copyPublicDir: false
  }
})
