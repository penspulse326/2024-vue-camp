import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      entryRoot: 'src',
      outDir: 'dist',
      insertTypesEntry: true,
      tsconfigPath: './tsconfig.app.json'
    })
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'shared-ui',
      fileName: 'shared-ui',
      formats: ['es']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        assetFileNames: 'assets/shared-ui.[ext]'
      }
    },
    // 導出單一 css 檔
    cssCodeSplit: false
  }
});
