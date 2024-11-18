import { StyleSheet } from 'react-native';

import {
  verticalScale,
  moderateScale,
  isLandscape,
} from '@utility/scalingHelpers';
import { fontFamily, fontSize } from '@constants/fonts';

function getThemedStyles(colors: Colors) {
  return StyleSheet.create({
    gradientContainerStyle: {
      flex: 1,
    },

    splashContainer: {
      flex: 1,
      backgroundColor: colors.splashScreenOverlay,
      justifyContent: 'center',
      alignItems: 'center',
    },

    appLogoAndHeadingContainer: {
      gap: isLandscape() ? 10 : 15,
      alignItems: 'center',
    },

    appLogo: {
      height: isLandscape() ? 100 : 120,
      width: isLandscape() ? 100 : 120,
    },

    heading: {
      fontSize: moderateScale(fontSize.twentyFour),
      fontFamily: fontFamily.MontserratSemiBold,
      color: colors.appNameHeading,
      marginTop: verticalScale(15),
    },
  });
}

export default getThemedStyles;
