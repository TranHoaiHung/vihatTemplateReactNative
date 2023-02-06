import React, { memo, useMemo } from 'react';
import type { ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native';
import { SvgView } from '..';
import type { IconSvgProps } from './Type';

export const IconViewSvg = memo((props: IconSvgProps) => {
  if (props.isHide || !props.xml) {
    return null;
  }
  const { xml, color, width = 16, size, height = 16, style, iconProps } = props;

  const getData = (): string => {
    let data = xml;
    if (data) {
      if (color) {
        data = data.replace(/{color}/g, color as string);
      } else {
        data = data.replace(/{color}/g, 'none');
      }
      if (width) {
        data = data.replace(/{width}/g, `${width}`);
      } else {
        if (size) {
          data = data.replace(/{width}/g, `${size}`);
        } else {
          data = data.replace(/{width}/g, `${16}`);
        }
      }
      if (height) {
        data = data.replace(/{height}/g, `${height}`);
      } else {
        if (size) {
          data = data.replace(/{height}/g, `${size}`);
        } else {
          data = data.replace(/{height}/g, `${16}`);
        }
      }
    }
    return data ? data : '';
  };

  const containerStyle = useMemo(() => {
    const containStyle = StyleSheet.flatten<ViewStyle>(props?.style);
    let containerWidth = containStyle?.width || width || size;
    let containerHeight = containStyle?.height || height || size;
    return {
      ...containStyle,
      width: containerWidth,
      height: containerHeight,
      alignItems: 'center',
    };
  }, [style, size, width, height]) as ViewStyle;
  return (
    <SvgView
      {...props}
      iconProps={iconProps}
      xml={getData()}
      style={containerStyle}
    />
  );
});
IconViewSvg.displayName = 'IconSvg';
