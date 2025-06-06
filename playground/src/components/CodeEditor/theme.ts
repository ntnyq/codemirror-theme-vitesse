/**
 * @file Theme
 */

import {
  vitesseBlack,
  vitesseDark,
  vitesseLight,
} from 'codemirror-theme-vitesse'

export const themes = {
  vitesseBlack,
  vitesseDark,
  vitesseLight,
}

export type ThemeName = keyof typeof themes
