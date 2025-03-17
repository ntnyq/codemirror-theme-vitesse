import { tags as t } from '@lezer/highlight'
import { createTheme } from '@uiw/codemirror-themes'
import type { CreateThemeOptions } from '@uiw/codemirror-themes'

export const defaultSettingsVitesseBlack: CreateThemeOptions['settings'] = {
  background: '#000',
  foreground: '#dbd7cacc',
  selection: '#eeeeee18',
  selectionMatch: '#eeeeee10',
  gutterBackground: '#121212',
  gutterForeground: '#dedcd550',
}

export const createVitesseBlackTheme = (
  options: Partial<CreateThemeOptions> = {},
) => {
  const { theme = 'dark', settings = {}, styles = [] } = options

  return createTheme({
    theme,
    settings: { ...defaultSettingsVitesseBlack, ...settings },
    styles: [
      { tag: [t.standard(t.tagName), t.tagName], color: '#4d9375' },
      { tag: [t.comment], color: '#758575dd' },
      { tag: [t.bracket], color: '#666666' },
      { tag: [t.className, t.propertyName], color: '#5da994' },
      { tag: [t.variableName], color: '#80a665' },
      { tag: [t.attributeName, t.number], color: '#bd976a' },
      { tag: [t.typeName], color: '#5da994' },
      { tag: [t.keyword], color: '#cb7676' },
      { tag: [t.operator, t.typeOperator], color: '#cb7676' },
      { tag: [t.string, t.meta], color: '#c98a7d' },
      { tag: [t.regexp], color: '#c4704f' },
      { tag: [t.name], color: '#22863a' },
      { tag: [t.quote], color: '#5d99a9' },
      { tag: [t.heading, t.strong], color: '#dbd7cacc', fontWeight: 'bold' },
      { tag: [t.emphasis], color: '#dbd7cacc', fontStyle: 'italic' },
      { tag: [t.deleted], color: '#fdaeb7', backgroundColor: '86181d' },
      { tag: [t.atom, t.bool, t.special(t.variableName)], color: '#4d9375' },
      { tag: [t.url, t.escape, t.link], color: '#dedcd590' },
      { tag: t.link, textDecoration: 'underline' },
      { tag: t.strikethrough, textDecoration: 'line-through' },
      { tag: t.invalid, color: '#fdaeb7', fontStyle: 'italic' },
      ...styles,
    ],
  })
}

export const vitesseBlack = createVitesseBlackTheme()
