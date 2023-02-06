import { DeviceUtils } from './DeviceUtils';
import { isNumber } from '.';
import { Dimensions, Platform } from 'react-native';
import Config from 'react-native-config';
import DeviceInfo from 'react-native-device-info';
const { width, height } = Dimensions.get('window');
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];
//Default guideline sizes are based on standard ~5" screen mobile device
const guidBaseWidthPhone = Number(Config.SIZE_BASE_WIDTH_PHONE) || 360;
const guidBaseHeightPhone = Number(Config.SIZE_BASE_HEIGHT_PHONE) || 720;

const guidBaseWidthTablet = Number(Config.SIZE_BASE_WIDTH_TABLET) || 768;
const guidBaseHeightTablet = Number(Config.SIZE_BASE_HEIGHT_TABLET) || 1024;

const baseWidth = DeviceUtils.isTablet()
  ? guidBaseWidthTablet
  : guidBaseWidthPhone;
const baseHeight = DeviceUtils.isTablet()
  ? guidBaseHeightTablet
  : guidBaseHeightPhone;

export const scale = (sizePhone: number, sizeTablet?: number): number => {
  if (!sizeTablet || !isNumber(sizeTablet)) {
    sizeTablet = sizePhone;
  }
  const size = DeviceUtils.isTablet() ? sizeTablet : sizePhone;
  return (shortDimension / baseWidth) * size;
};

export const moderateScale = (size: number, factor = 0.5): number => {
  return size + (scale(size) - size) * factor;
};

export const moderateNonStandardScale = (
  sizePhone: number,
  sizeTablet?: number,
  factor = 0.5
): number => {
  if (!sizeTablet || !isNumber(sizeTablet)) {
    sizeTablet = sizePhone;
  }
  const size = DeviceUtils.isTablet() ? sizeTablet : sizePhone;
  return size + (scale(size) - size) * factor;
};
export const verticalScale = (size: number): number =>
  (longDimension / baseHeight) * size;

export const moderateVerticalScale = (size: number, factor = 0.5) =>
  size + (verticalScale(size) - size) * factor;

export function fontSizeCcale(
  fontSize: number,
  standardScreenHeight = baseHeight
) {
  const offset =
    width > height
      ? 0
      : Platform.OS === 'ios'
      ? 78
      : DeviceUtils.getStatusBarHeight(); // iPhone X style SafeAreaView size in portrait
  const deviceHeight =
    DeviceInfo.hasNotch() || Platform.OS === 'android'
      ? longDimension - offset
      : longDimension;
  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Number(heightPercent.toFixed(2));
}
export const fs = fontSizeCcale;
export const s = scale;
export const vs = verticalScale;
export const ms = moderateScale;
export const mnss = moderateNonStandardScale;
export const mvs = moderateVerticalScale;
