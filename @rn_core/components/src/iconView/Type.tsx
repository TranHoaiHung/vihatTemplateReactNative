import type { NumberProp, SvgProps } from 'react-native-svg';
import type { SvgViewProps } from '..';

export interface IconSvgProps extends Omit<SvgViewProps, 'xml'> {
  xml?: string;
  width?: NumberProp;
  height?: NumberProp;
  size?: NumberProp;
  iconProps?: SvgProps;
}
