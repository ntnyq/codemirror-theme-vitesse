# codemirror-theme-vitesse

[![CI](https://github.com/ntnyq/codemirror-theme-vitesse/workflows/CI/badge.svg)](https://github.com/ntnyq/codemirror-theme-vitesse/actions)
[![NPM VERSION](https://img.shields.io/npm/v/codemirror-theme-vitesse.svg)](https://www.npmjs.com/package/codemirror-theme-vitesse)
[![NPM DOWNLOADS](https://img.shields.io/npm/dy/codemirror-theme-vitesse.svg)](https://www.npmjs.com/package/codemirror-theme-vitesse)
[![LICENSE](https://img.shields.io/github/license/ntnyq/codemirror-theme-vitesse.svg)](https://github.com/ntnyq/codemirror-theme-vitesse/blob/main/LICENSE)

Codemirror theme in vitesse style.

## Install

```shell
npm install codemirror-theme-vitesse
```

```shell
yarn add codemirror-theme-vitesse
```

```shell
pnpm add codemirror-theme-vitesse
```

## Usage

```ts
import { javascript } from '@codemirror/lang-javascript'
import { EditorState } from '@codemirror/state'
import { EditorView } from '@codemirror/view'
import { vitesseLight } from 'codemirror-theme-vitesse'
// import { vitesseDark } from 'codemirror-theme-vitesse'
// import { vitesseBlack } from 'codemirror-theme-vitesse'

const state = EditorState.create({
  doc: `const foo = 'hello world'`,
  extensions: [
    // or vitesseDark, vitesseBlack
    vitesseLight,
    javascript({ jsx: true }),
  ],
})
const view = new EditorView({
  parent: document.querySelector('#editor'),
  state,
})
```

### Subpath import

```ts
import { vitesseBlack } from 'codemirror-theme-vitesse/black'
import { vitesseDark } from 'codemirror-theme-vitesse/dark'
import { vitesseLight } from 'codemirror-theme-vitesse/light'
```

### Overrides default theme

Check more override settings by inspecting the type definition.

```ts
import { createVitesseLightTheme } from 'codemirror-theme-vitesse'

const vitesseLight = createVitesseLightTheme({
  settings: {
    background: '#fff9c4',
  },
})
```

## Credits

- [antfu/vscode-theme-vitesse](https://github.com/antfu/vscode-theme-vitesse)
- [shikijs/textmate-grammars-themes](https://github.com/shikijs/textmate-grammars-themes)

## License

[MIT](./LICENSE) License © 2024-PRESENT [ntnyq](https://github.com/ntnyq)
