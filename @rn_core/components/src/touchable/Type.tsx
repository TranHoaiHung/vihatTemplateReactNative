import type { PressableProps, ViewStyle } from 'react-native';
import type { BaseProps } from '../Type';

export interface TouchableProps
  extends Omit<PressableProps, 'children' | 'onPress' | 'style'>,
    BaseProps {
  waitTime?: number;
  disabledStyle?: ViewStyle;
  pressableStyle?: ViewStyle;
}
