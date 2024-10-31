import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'border-base': 'border-$c-border',
    'border-bg-base': 'border-$c-bg-base',
    'bg-base': 'bg-$c-bg-base',
    'text-base': 'text-$c-text-base',
    'btn-icon':
      'h-10 w-10 inline-flex items-center text-xl justify-center rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700',
  },

  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      autoInstall: true,
      extraProperties: {},
    }),
  ],

  transformers: [transformerDirectives(), transformerVariantGroup()],
})
