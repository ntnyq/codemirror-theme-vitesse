import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  transformers: [transformerDirectives(), transformerVariantGroup()],

  presets: [
    presetUno(),
    presetIcons({
      autoInstall: true,
      extraProperties: {},
      scale: 1.2,
    }),
  ],

  shortcuts: {
    'bg-base': 'bg-$c-bg-base',
    'border-base': 'border-$c-border',
    'border-bg-base': 'border-$c-bg-base',
    'text-base': 'text-$c-text-base',
    'btn-icon':
      'h-10 w-10 inline-flex items-center text-xl justify-center rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700',
  },
})
