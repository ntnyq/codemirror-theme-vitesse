import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts', 'src/themes/*.ts'],
  dts: true,
  clean: true,
  target: 'node18',
  format: ['cjs', 'esm'],
})
