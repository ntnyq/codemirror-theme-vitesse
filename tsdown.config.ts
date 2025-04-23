import { defineConfig } from 'tsdown'

export default defineConfig({
  clean: true,
  dts: true,
  entry: ['src/index.ts', 'src/themes/*.ts'],
  format: ['cjs', 'esm'],
  target: 'node18',
})
