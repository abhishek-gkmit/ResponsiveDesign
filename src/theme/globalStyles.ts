import { StyleSheet } from 'react-native';

function getGlobalThemedStyles(colors: Colors) {
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: colors.background,
    },

    flexContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    flex: {
      flex: 1,
    },
  });
}

export default getGlobalThemedStyles;
