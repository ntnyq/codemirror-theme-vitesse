import { defineConfig } from 'tsdown'

export default defineConfig({
  clean: true,
  dts: true,
  entry: ['src/index.ts', 'src/themes/*.ts'],
  platform: 'browser',
  target: ['node18', 'es2022'],
})
