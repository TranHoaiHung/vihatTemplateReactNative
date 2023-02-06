import type { ReactNode } from 'react';
import type { ResourceKey } from '../PropsTypes';

export interface Theme {
  id: string;
  color: ResourceKey;
  dimension: ResourceKey;
}

export interface ThemeOptions {
  debug?: boolean;
  resources: Record<string, Theme>;
  themeDefault: Theme;
}

export interface ThemeValueContext {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  changeTheme: (id: string) => void;
}

export interface ThemeProps {
  initial: ThemeOptions;
  children?: ReactNode;
}
