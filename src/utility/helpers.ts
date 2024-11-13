import { Dimensions, PixelRatio } from 'react-native';
import Toast, { ToastType } from 'react-native-toast-message';

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export function showToast(type: ToastType, heading: string, message: string) {
  Toast.show({ type, text1: heading, text2: message });
}

export function showErrorToast(heading: string, message: string) {
  showToast('error', heading, message);
}

export function showSuccessToast(heading: string, message: string) {
  showToast('success', heading, message);
}

export function showInfoToast(heading: string, message: string) {
  showToast('info', heading, message);
}

export function widthPercentageToDP(widthPercent: string | number) {
  const { width: screenWidth } = Dimensions.get('screen');

  // Parse string percentage input and convert it to number.
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);

  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
}

export function heightPercentageToDP(heightPercent: string | number) {
  const { height: screenHeight } = Dimensions.get('screen');

  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
}

export function horizontalScale(size: number) {
  const dim = Dimensions.get('screen');
  const width = Math.min(dim.width, dim.height);

  return Math.floor((width / guidelineBaseWidth) * size);
}

export function verticalScale(size: number) {
  const dim = Dimensions.get('screen');
  const height = Math.max(dim.width, dim.height);

  return Math.floor((height / guidelineBaseHeight) * size);
}

export function moderateScale(size: number, factor: number = 0.5) {
  return size + (horizontalScale(size) - size) * factor;
}

export function isLandscape() {
  const dim = Dimensions.get('screen');

  return dim.width > dim.height;
}
