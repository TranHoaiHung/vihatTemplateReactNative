import { useTranslation } from '../../../core/src';
import React, { isValidElement, useMemo } from 'react';
import { StyleSheet, Text as RNText } from 'react-native';
import Config from 'react-native-config';
import Animated from 'react-native-reanimated';
import type { TextProps } from './Type';

const BASE_FF = Config.FONTS_MAIN;

const AnimatedText = Animated.createAnimatedComponent(RNText);

export const Text: React.FC<TextProps> = (props) => {
  const {
    id,
    data,
    color,
    style,
    replaceKey,
    replaceValue,
    onPress,
    size,
    isHide,
    children,
    fontWeight,
    animated,
  } = props;

  const styleProps = StyleSheet.flatten(style);
  const translation = useTranslation();
  const handleOnPress = () => {
    onPress?.({ id, data });
  };

  const getFontFamily = useMemo(() => {
    const fw = fontWeight || styleProps?.fontWeight;
    let fontFamily = `${BASE_FF}-Regular`;
    switch (fw) {
      case 'normal':
        fontFamily = `${BASE_FF}-Regular`;
        break;
      case 'bold':
        fontFamily = `${BASE_FF}-Bold`;
        break;
      case '100':
        fontFamily = `${BASE_FF}-Thin`;
        break;
      case '200':
        fontFamily = `${BASE_FF}-Thin`;
        break;
      case '300':
        fontFamily = `${BASE_FF}-Light`;
        break;
      case '400':
        fontFamily = `${BASE_FF}-Regular`;
        break;
      case '500':
        fontFamily = `${BASE_FF}-Medium`;
        break;
      case '600':
        fontFamily = `${BASE_FF}-Medium`;
        break;
      case '700':
        fontFamily = `${BASE_FF}-Bold`;
        break;
      case '800':
        fontFamily = `${BASE_FF}-Bold`;
        break;
      case '900':
        fontFamily = `${BASE_FF}-Black`;
        break;
      default:
        fontFamily = `${BASE_FF}-Regular`;
        break;
    }

    if (styleProps?.fontStyle === 'italic') {
      fontFamily = `${fontFamily}Italic`;
    }

    return fontFamily;
  }, [fontWeight, styleProps?.fontStyle, styleProps?.fontWeight]);

  const styleView = useMemo(() => {
    return [
      styleProps,
      {
        color: color || styleProps?.color,
        fontSize: size || styleProps?.fontSize,
        fontWeight: undefined,
        fontFamily: getFontFamily,
      },
    ];
  }, [color, getFontFamily, size, styleProps]);

  const childrenView = useMemo(() => {
    if (isValidElement(children)) {
      return children;
    } else if (typeof children === 'string') {
      let text = translation(children);
      if (replaceKey && replaceValue) {
        text = text.replace(replaceKey, replaceValue);
      }
      return text;
    } else {
      return children;
    }
  }, [children, replaceKey, replaceValue, translation]);

  if (isHide) {
    return null;
  }

  if (animated) {
    return (
      <AnimatedText
        {...props}
        style={styleView}
        onPress={onPress && handleOnPress}
      >
        <>{childrenView}</>
      </AnimatedText>
    );
  }

  return (
    <RNText {...props} style={styleView} onPress={onPress && handleOnPress}>
      <>{childrenView}</>
    </RNText>
  );
};
