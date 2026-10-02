import { defineConfig } from 'tsdown'

export default defineConfig({
  clean: true,
  entry: ['src/index.ts', 'src/themes/*.ts'],
  platform: 'browser',
  dts: {
    generator: 'tsgo',
  },
})
