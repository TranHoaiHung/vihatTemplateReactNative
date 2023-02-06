import type { Key, ReactNode } from 'react';
import type { ColorValue } from 'react-native';
import type { i18n } from 'i18next';
import type {
  ThemeOptions,
  Theme,
  ThemeValueContext,
  ThemeProps,
} from './themes';

export { ThemeOptions, Theme, ThemeValueContext, ThemeProps };
export interface ResourceKey {
  [key: Key | symbol]: BaseObject;
}

export type BaseObject =
  | Key
  | Record<Key | symbol, ResourceKey>
  | ColorValue
  | object
  | [];

export interface ProviderProps {
  children: ReactNode;
  i18next: i18n;
  theme: ThemeOptions;
  backgroundColor?: string;
}

export interface BaseData<I = unknown, D = unknown> {
  id?: BaseObject | I;
  data?: BaseObject | boolean | D;
}

export interface TransferData<I = unknown, D = unknown> extends BaseData<I, D> {
  index?: string | number;
  routeName?: string | object;
  preRouteName?: string | object;
  isReload?: boolean;
}

export type TransferCallBack<I = unknown, D = unknown> = BaseData<I, D> & {
  callBack?: (object?: TransferData) => void | Promise<void>;
};
