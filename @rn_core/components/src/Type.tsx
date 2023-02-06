import type { ReactNode } from "react";
import type { TransferData, BaseObject } from "../../core/src";
import type { ColorValue, Falsy, ImageStyle, TextStyle, ViewStyle } from "react-native";

export * from './touchable/Type';
export * from './svg/Type';
export * from './text/Type';
export * from './iconView/Type';

export type BaseProps = {
  isHide?: boolean;
  id?: BaseObject;
  data?: BaseObject;
  onPress?: (data?: TransferData) => void | Promise<void> | RegExp | Falsy;
  children?: JSX.Element | JSX.Element[] | ReactNode;
  color?: ColorValue;
  focusColor?: ColorValue;
  disableColor?: ColorValue;
  style?:
    | ViewStyle
    | TextStyle
    | ImageStyle
    | (ViewStyle | TextStyle | ImageStyle)[];
  disableStyle?:
    | ViewStyle
    | TextStyle
    | ImageStyle
    | (ViewStyle | TextStyle | ImageStyle)[];
  focusStyle?:
    | ViewStyle
    | TextStyle
    | ImageStyle
    | (ViewStyle | TextStyle | ImageStyle)[];
};
