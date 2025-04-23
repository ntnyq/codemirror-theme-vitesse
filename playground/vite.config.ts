import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    // https://github.com/codemirror/dev/issues/608
    exclude: ['@codemirror/state'],
  },
  plugins: [
    Vue(),
    UnoCSS({
      inspector: false,
    }),
  ],
})
