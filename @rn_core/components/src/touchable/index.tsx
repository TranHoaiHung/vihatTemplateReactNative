import React, { useMemo, useRef } from 'react';
import {
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import type { TouchableProps } from './Type';
import type { TransferData } from '../../../core/src';

export const Touchable = (props: TouchableProps) => {
  if (props.isHide) {
    return null;
  }
  const {
    id,
    data,
    children,
    android_ripple,
    waitTime,
    onPress,
    style,
    pressableStyle,
  } = props;
  const disablePress = useRef<boolean>(false);

  const stylesProps = StyleSheet.flatten<ViewStyle>(
    style as StyleProp<ViewStyle>
  );
  const handleOnPress = () => {
    if (!waitTime) {
      onPress?.({ id, data } as TransferData);
    } else if (!disablePress.current) {
      onPress?.({ id, data } as TransferData);
      disablePress.current = true;
      const timeout = setTimeout(() => {
        disablePress.current = false;
        clearTimeout(timeout);
      }, waitTime || 400);
    }
  };

  const androidRippleConfig = useMemo(() => {
    return {
      color: 'white',
      foreground: false,
      borderless: false,
      ...android_ripple,
    };
  }, [android_ripple]);

  const containerStyle = (): StyleProp<ViewStyle> => {
    let stprops = {
      ...styles.containerStyle,
      ...stylesProps,
      width: stylesProps?.width,
      height: stylesProps?.height,
    };
    return stprops;
  };
  const stylePressable = (): StyleProp<ViewStyle> => {
    let stylePress = {
      ...styles.pressableStyle,
      ...stylesProps,
      width: stylesProps?.width,
      height: stylesProps?.height,
      borderRadius: stylesProps?.borderRadius,
      ...(pressableStyle as ViewStyle),
    };
    return stylePress;
  };
  return (
    <View style={containerStyle()} onLayout={props.onLayout}>
      <Pressable
        {...props}
        accessibilityRole="button"
        style={stylePressable()}
        android_ripple={androidRippleConfig}
        onPress={props.onPress && handleOnPress}
      >
        <>{children}</>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    overflow: 'hidden',
  },
  pressableStyle: {
    // backgroundColor: '#2345',
    borderWidth: 0,
    justifyContent: 'center',
    outlineWidth: 0,
    alignSelf: 'stretch',
    overflow: 'hidden',
    alignItems: 'center',
  },
});
