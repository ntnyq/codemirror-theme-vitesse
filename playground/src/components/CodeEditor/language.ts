/**
 * @file Languages
 */

import { html } from '@codemirror/lang-html'
import { javascript } from '@codemirror/lang-javascript'
import type { LanguageSupport } from '@codemirror/language'

export interface Language {
  id: string
  name: string
  extension: () => LanguageSupport
}

export const languages: Language[] = [
  {
    id: 'javascript',
    name: 'JavaScript',
    extension: () => javascript(),
  },
  {
    id: 'jsx',
    name: 'JSX',
    extension: () => javascript({ jsx: true }),
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    extension: () => javascript({ typescript: true }),
  },
  {
    id: 'tsx',
    name: 'TSX',
    extension: () => javascript({ jsx: true, typescript: true }),
  },
  {
    id: 'html',
    name: 'HTML',
    extension: () => html(),
  },
]
