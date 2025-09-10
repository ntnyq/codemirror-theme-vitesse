import {
  defineConfig,
  presetIcons,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  transformers: [transformerDirectives(), transformerVariantGroup()],

  presets: [
    presetWind4(),
    presetIcons({
      autoInstall: true,
      extraProperties: {},
      scale: 1.2,
    }),
  ],

  shortcuts: {
    'bg-base': `bg-$c-bg-base`,
    'border-base': `border-$c-border`,
    'border-bg-base': `border-$c-bg-base`,
    'btn-icon': `h-10 w-10 inline-flex items-center text-xl justify-center rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700`,
    'text-base': `text-$c-text-base`,
  },
})
