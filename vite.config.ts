import { resolve } from 'path'
import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',
  build: {
    outDir: '../dist',
    minify: true,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, './src/index.html'),
        pag1: resolve(__dirname, './src/form-quem-e.html'),
        pag2: resolve(__dirname, './src/form-crianca.html'),
        pag3: resolve(__dirname, './src/form-especial.html'),
        pag4: resolve(__dirname, './src/form-feminino.html'),
        pag5: resolve(__dirname, './src/form-idoso.html'),
        pag6: resolve(__dirname, './src/form-local.html'),
        pag7: resolve(__dirname, './src/form-masculino.html'),
        pag8: resolve(__dirname, './src/form-quem-e.html'),
        pag9: resolve(__dirname, './src/msgErro.html'),
        pag10: resolve(__dirname, './src/msgSucesso.html')
      },
    }
  },
});
