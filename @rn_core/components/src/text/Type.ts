import type { TextProps as RNTextProps } from 'react-native';
import type { BaseProps } from 'src/Type';

export interface TextProps
  extends Omit<RNTextProps, 'children' | 'onPress'>,
    Omit<BaseProps, 'style'> {
  replaceKey?: string;
  replaceValue?: string;
  size?: number;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  animated?: boolean;
}
