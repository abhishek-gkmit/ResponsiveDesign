import { StyleSheet } from 'react-native';

import { fontSize } from '@constants/fonts';
import { moderateScale } from '@utility/scalingHelpers';

function getThemedStyles(colors: Colors) {
  return StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      width: '100%',
      backgroundColor: colors.inputBackground,
      borderRadius: moderateScale(10),
      padding: 10,
      gap: 10,
      borderWidth: 1,
      borderColor: colors.black1,
      alignItems: 'center',
      marginBottom: 10,
    },

    inputContainerFocus: {
      borderColor: colors.primary,
    },

    inputContainerError: {
      borderColor: colors.error,
    },

    inputLabel: {
      color: colors.black,
      marginBottom: 5,
    },

    textInput: {
      color: colors.black,
      fontSize: fontSize.fourteen,
      padding: 0,
      flexGrow: 1,
      flexShrink: 1,
      textAlignVertical: 'center',
    },

    errorMsg: {
      color: colors.error,
      paddingHorizontal: 10,
      marginVertical: 5,
      textAlign: 'left',
      fontSize: fontSize.twelve,
    },
  });
}

export default getThemedStyles;
