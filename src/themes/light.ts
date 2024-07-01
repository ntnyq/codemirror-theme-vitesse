import { tags as t } from '@lezer/highlight'
import { createTheme } from '@uiw/codemirror-themes'
import type { CreateThemeOptions } from '@uiw/codemirror-themes'

export const defaultSettingsVitesseLight: CreateThemeOptions['settings'] = {
  background: '#fff',
  foreground: '#393a34',
  selection: '#22222218',
  selectionMatch: '#22222210',
  gutterBackground: '#f7f7f7',
  gutterForeground: '#393a3450',
}

export const createVitesseLightTheme = (options: Partial<CreateThemeOptions> = {}) => {
  const { theme = 'light', settings = {}, styles = [] } = options

  return createTheme({
    theme,
    settings: { ...defaultSettingsVitesseLight, ...settings },
    styles: [
      { tag: [t.standard(t.tagName), t.tagName], color: '#116329' },
      { tag: [t.comment], color: '#a0ada0' },
      { tag: [t.bracket], color: '#999999' },
      { tag: [t.className, t.propertyName], color: '#2e8f82' },
      { tag: [t.variableName, t.attributeName, t.number], color: '#b07d48' },
      { tag: [t.keyword, t.typeName], color: '#1e754f' },
      { tag: [t.operator, t.typeOperator], color: '#ab5959' },
      { tag: [t.string, t.meta], color: '#b56959' },
      { tag: [t.regexp], color: '#ab5e3f' },
      { tag: [t.name], color: '#22863a' },
      { tag: [t.quote], color: '#b5695999' },
      { tag: [t.heading, t.strong], color: '#24292e', fontWeight: 'bold' },
      { tag: [t.emphasis], color: '#24292e', fontStyle: 'italic' },
      // cSpell: disable-next-line
      { tag: [t.deleted], color: '#b31d28', backgroundColor: 'ffeef0' },
      { tag: [t.atom, t.bool, t.special(t.variableName)], color: '#1e754f' },
      { tag: [t.url, t.escape, t.link], color: '#393a3490' },
      { tag: t.link, textDecoration: 'underline' },
      { tag: t.strikethrough, textDecoration: 'line-through' },
      { tag: t.invalid, color: '#b31d28', fontStyle: 'italic' },
      ...styles,
    ],
  })
}

export const vitesseLight = createVitesseLightTheme()
