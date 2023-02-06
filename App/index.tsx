import type { ThemeOptions } from '@rn-core/core';
import DarkMode from './DarkMode';
import LightMode from './LightMode';

const themeMode = {
  light: LightMode,
  dark: DarkMode,
  normal: LightMode,
};

export const themeInit = {
  debug: true,
  resources: themeMode,
  themeDefault: themeMode.normal,
} as unknown as ThemeOptions;