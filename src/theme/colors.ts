const commonColors = {
  primary: '#0085ff',
  secondary: '#8badff',

  warning: '#fff300',
  error: '#ff0000',

  lightRed: '#ff3c36',
  gray: 'gray',
  lightGray: '#f2f2f2',
  black1: 'rgba(0, 0, 0, 0.1)',
  black2: 'rgba(0, 0, 0, 0.2)',
  black3: 'rgba(0, 0, 0, 0.3)',
  black4: 'rgba(0, 0, 0, 0.4)',
  black5: 'rgba(0, 0, 0, 0.5)',
  black6: 'rgba(0, 0, 0, 0.6)',
  black7: 'rgba(0, 0, 0, 0.7)',
  black8: 'rgba(0, 0, 0, 0.8)',
};

export const colors = {
  dark: {
    background: '#18222c',
    backgroundDark: '#090909',
    foreground: '#ffffff',

    accentBlue: '#a1c7ff',
    lightGreen: '#88d7ba',
    darkGreen: '#109c8f',
    ...commonColors,
  },

  light: {
    background: '#ffffff',
    backgroundDark: '#f2f2f2',
    foreground: '#090909',

    accentBlue: '#0055d8',
    lightGreen: '#95e9ca',
    darkGreen: '#24ae9f',
    ...commonColors,
  },
};
