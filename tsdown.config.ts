import { defineConfig } from 'tsdown'

export default defineConfig({
  clean: true,
  dts: true,
  entry: ['src/index.ts', 'src/themes/*.ts'],
  platform: 'browser',
  target: ['node20', 'es2023'],
})
