import { tags as t } from '@lezer/highlight'
import { createTheme } from '@uiw/codemirror-themes'
import type { CreateThemeOptions } from '@uiw/codemirror-themes'

export const defaultSettingsVitesseDark: CreateThemeOptions['settings'] = {
  background: '#121212',
  foreground: '#dbd7caee',
  selection: '#eeeeee18',
  selectionMatch: '#eeeeee10',
  gutterBackground: '#181818',
  gutterForeground: '#dedcd550',
}

export const createVitesseDarkTheme = (options: Partial<CreateThemeOptions> = {}) => {
  const { theme = 'dark', settings = {}, styles = [] } = options

  return createTheme({
    theme,
    settings: { ...defaultSettingsVitesseDark, ...settings },
    styles: [
      { tag: [t.standard(t.tagName), t.tagName], color: '#116329' },
      { tag: [t.comment], color: '#758575dd' },
      { tag: [t.bracket], color: '#666666' },
      { tag: [t.className, t.propertyName], color: '#5DA994' },
      { tag: [t.variableName, t.attributeName, t.number], color: '#bd976a' },
      { tag: [t.keyword, t.typeName], color: '#4d9375' },
      { tag: [t.operator, t.typeOperator], color: '#cb7676' },
      { tag: [t.string, t.meta], color: '#c98a7d' },
      { tag: [t.regexp], color: '#c4704f' },
      { tag: [t.name], color: '#22863a' },
      { tag: [t.quote], color: '#c98a7d99' },
      { tag: [t.heading, t.strong], color: '#24292e', fontWeight: 'bold' },
      { tag: [t.emphasis], color: '#24292e', fontStyle: 'italic' },
      // cSpell: disable-next-line
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

export const vitesseDark = createVitesseDarkTheme()
