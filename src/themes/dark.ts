import { tags as t } from '@lezer/highlight'
import { createTheme } from '@uiw/codemirror-themes'
import type { CreateThemeOptions } from '@uiw/codemirror-themes'

export const defaultSettingsVitesseDark: CreateThemeOptions['settings'] = {}

export const createVitesseDarkTheme = (options: Partial<CreateThemeOptions> = {}) => {
  const { theme = 'dark', settings = {}, styles = [] } = options

  return createTheme({
    theme,
    settings: { ...defaultSettingsVitesseDark, ...settings },
    styles: [
      // Default theme
      { tag: t.strikethrough, textDecoration: 'line-through' },
      ...styles,
    ],
  })
}

export const vitesseDark = createVitesseDarkTheme()
