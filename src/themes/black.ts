import { tags as t } from '@lezer/highlight'
import { createTheme } from '@uiw/codemirror-themes'
import type { CreateThemeOptions } from '@uiw/codemirror-themes'

export const defaultSettingsVitesseBlack: CreateThemeOptions['settings'] = {}

export const createVitesseBlackTheme = (options: Partial<CreateThemeOptions> = {}) => {
  const { theme = 'dark', settings = {}, styles = [] } = options

  return createTheme({
    theme,
    settings: { ...defaultSettingsVitesseBlack, ...settings },
    styles: [
      // Default theme
      { tag: t.strikethrough, textDecoration: 'line-through' },
      ...styles,
    ],
  })
}

export const vitesseBlack = createVitesseBlackTheme()
