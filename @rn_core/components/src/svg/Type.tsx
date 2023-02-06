import type { SvgProps } from 'react-native-svg';
import type { TouchableProps } from '../Type';

export interface SvgViewProps extends TouchableProps {
  xml: string;
  iconProps?: SvgProps;
}
