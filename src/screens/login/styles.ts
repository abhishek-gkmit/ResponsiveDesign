import { Dimensions, StyleSheet } from 'react-native';

import {
  horizontalScale,
  verticalScale,
  moderateScale,
  isLandscape,
} from '@utility/scalingHelpers';
import { fontFamily, fontSize, fontWeight } from '@constants';

function getThemedStyles(colors: Colors) {
  const dim = Dimensions.get('window');

  return StyleSheet.create({
    gradientContainerStyle: {
      height: dim.height,
      width: dim.width,
      position: 'absolute',
    },

    loginScreen: {
      backgroundColor: colors.loginScreenOverlayColor,
      justifyContent: 'center',
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
    },

    buttonContainer: {
      marginTop: verticalScale(40),
      gap: isLandscape() ? 10 : 15,
      alignItems: 'center',
    },

    loginBtn: {
      backgroundColor: colors.loginBtnBackground,
      marginHorizontal: horizontalScale(30),
      elevation: 2,
      width: horizontalScale(340),
    },

    loginBtnText: {
      flex: 1,
      color: colors.loginBtnText,
      textAlign: 'center',
      fontSize: moderateScale(18),
      fontWeight: fontWeight.regular,
    },

    signUpBtn: {
      marginHorizontal: horizontalScale(30),
      backgroundColor: colors.signUpBtnBackground,
      borderWidth: 1,
      borderColor: colors.signUpBtnBorderColor,
      width: horizontalScale(340),
    },

    signUpBtnText: {
      flex: 1,
      color: colors.signUpBtnText,
      textAlign: 'center',
      fontSize: moderateScale(18),
      fontWeight: fontWeight.regular,
    },

    messageContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      alignItems: 'center',
      marginBottom: isLandscape() ? verticalScale(6) : verticalScale(20),
    },

    messageContainerText: {
      fontSize: moderateScale(fontSize.twelve),
      color: colors.lightGray,
    },

    loginModal: {
      position: 'absolute',
      zIndex: 2,
      backgroundColor: colors.loginModalBackgroundColor,
      bottom: 0,
      borderTopLeftRadius: moderateScale(10),
      borderTopRightRadius: moderateScale(10),
      paddingBottom: verticalScale(50),
      width: horizontalScale(375),
      alignSelf: 'center',
    },

    modalLoginBtn: {
      backgroundColor: colors.primary,
      marginHorizontal: 0,
      marginTop: verticalScale(15),
      width: 'auto',
    },

    loginModalPressArea: {
      paddingHorizontal: horizontalScale(20),
    },

    loginModalHeading: {
      fontSize: moderateScale(fontSize.twentyFour),
      fontFamily: fontFamily.NunitoSansBold,
      marginBottom: verticalScale(20),
      color: colors.loginModalHeadingColor,
    },

    loginModalOverlay: {
      backgroundColor: colors.black2,
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },

    pill: {
      backgroundColor: colors.loginModalPill,
      borderRadius: moderateScale(10),
      height: verticalScale(5),
      width: horizontalScale(80),
      alignSelf: 'center',
      marginBottom: verticalScale(30),
      marginTop: verticalScale(10),
    },
  });
}

export default getThemedStyles;
