import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',
  build: {
    outDir: '../dist',
    minify: true,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './src/index.html',
        pag1: './src/form-quem-e.html',
        pag4: './src/form-crianca.html',
        pag5: './src/form-especial.html',
        pag6: './src/form-feminino.html',
        pag7: './src/form-idoso.html',
        pag8: './src/form-local.html',
        pag9: './src/form-masculino.html',
        pag10: './src/form-quem-e.html',
        pag11: './src/index.html',
        pag14: './src/msgErro.html',
        pag13: './src/msgSucesso.html'
      },
    }
  },
});
