import { Dimensions, Platform, PixelRatio } from 'react-native';



export const WIDTH = Dimensions.get('screen').width;
export const HEIGHT = Dimensions.get('screen').height;


/**
 * 
 * @param {*} size : this is size width using
 * @param {*} widthCode : this is size screen width for format 
 * @param {*} exactly : value for get exactly value
 * @returns 
 */
 export const resizeWidth = (size: number, widthCode = 375, exactly = false) => {
    // based on iPhone X's scale
    const { width } = Dimensions.get('window');
    const SCALE_FACTOR = width / widthCode;

    const newSize = size * SCALE_FACTOR;
    if (exactly) {
        return newSize;
    }
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
    }
};

/**
 * 
 * @param {*} size : this is size height using
 * @param {*} heightCode : this is size screen height for format 
 * @returns 
 */
export const resizeHeight = (size: number, heightCode = 812) => {
    // based on iPhone X's scale
    const SCALE_FACTOR = HEIGHT / heightCode;

    const newSize = size * SCALE_FACTOR;
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
    }
};