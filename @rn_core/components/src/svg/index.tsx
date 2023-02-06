import type { TransferData } from '../../../core/src';
import React, { memo } from 'react';
import type { ViewStyle } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { Touchable } from '../touchable';
import type { SvgViewProps } from './Type';
export * from './Type';

export const SvgView = memo((props: SvgViewProps) => {
  if (props.isHide) {
    return null;
  }
  const { id, data, xml, onPress, iconProps } = props;
  const onPressHandler = () => {
    onPress?.({ id, data } as TransferData);
  };

  const androidRippleConfig = () => {
    return {
      color: 'white',
      foreground: false,
      // ...android_ripple,
    };
  };

  return (
    <Touchable
      {...props}
      android_ripple={androidRippleConfig()}
      style={{
        padding: 0,
        alignItems: 'center',
        justifyContent: 'center',
        ...(props.style as ViewStyle),
      }}
      onPress={props.onPress && onPressHandler}
    >
      {xml ? (
        <SvgXml xml={xml} override={iconProps} onPress={undefined} />
      ) : null}
    </Touchable>
  );
});
SvgView.displayName = 'SvgView';
