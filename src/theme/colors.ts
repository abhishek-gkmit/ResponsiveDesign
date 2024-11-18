const commonColors = {
  primary: '#8badff',
  secondary: '#8badff',
  warning: '#fff300',
  error: '#ff0000',

  gunmetal: '#18222c',
  mauve: '#c9a0ff',
  tropicalIndigo: '#8b8eff',
  lightRed: '#ff3c36',
  gray: 'gray',
  lightGray: '#f2f2f2',
  black: '#000000',
  lightBlack: '#090909',
  black0: 'rgba(0, 0, 0, 0.0)',
  black1: 'rgba(0, 0, 0, 0.1)',
  black2: 'rgba(0, 0, 0, 0.2)',
  black3: 'rgba(0, 0, 0, 0.3)',
  black4: 'rgba(0, 0, 0, 0.4)',
  black5: 'rgba(0, 0, 0, 0.5)',
  black6: 'rgba(0, 0, 0, 0.6)',
  black7: 'rgba(0, 0, 0, 0.7)',
  black8: 'rgba(0, 0, 0, 0.8)',
  black9: 'rgba(0, 0, 0, 0.9)',
  white: '#ffffff',
  white0: 'rgba(255, 255, 255, 0.0)',
  white1: 'rgba(255, 255, 255, 0.1)',
  white2: 'rgba(255, 255, 255, 0.2)',
  white3: 'rgba(255, 255, 255, 0.3)',
  white4: 'rgba(255, 255, 255, 0.4)',
  white5: 'rgba(255, 255, 255, 0.5)',
  white6: 'rgba(255, 255, 255, 0.6)',
  white7: 'rgba(255, 255, 255, 0.7)',
  white8: 'rgba(255, 255, 255, 0.8)',
  white9: 'rgba(255, 255, 255, 0.9)',
};

export const colors = {
  dark: {
    background: commonColors.gunmetal,
    backgroundDark: commonColors.lightBlack,
    foreground: commonColors.white,

    accentBlue: '#a1c7ff',
    lightGreen: '#88d7ba',
    darkGreen: '#109c8f',
    ...commonColors,

    appNameHeading: commonColors.gunmetal,
    inputBackground: commonColors.lightGray,
    loginScreenOverlayColor: commonColors.black1,
    loginBtnBackground: commonColors.gunmetal,
    loginBtnBorderColor: commonColors.gunmetal,
    loginBtnText: commonColors.white,
    signUpBtnBackground: commonColors.black1,
    signUpBtnBorderColor: commonColors.black,
    signUpBtnText: commonColors.gunmetal,
    loginModalBackgroundColor: commonColors.gunmetal,
    loginModalHeadingColor: commonColors.white,
    loginModalPill: commonColors.white3,
    splashScreenOverlay: commonColors.black1,
  },

  light: {
    background: commonColors.white,
    backgroundDark: commonColors.lightGray,
    foreground: commonColors.lightBlack,

    accentBlue: '#0055d8',
    lightGreen: '#95e9ca',
    darkGreen: '#24ae9f',
    ...commonColors,

    appNameHeading: commonColors.white,
    inputBackground: commonColors.lightGray,
    loginScreenOverlayColor: commonColors.white4,
    loginBtnBackground: commonColors.white,
    loginBtnBorderColor: commonColors.white,
    loginBtnText: commonColors.lightBlack,
    signUpBtnBackground: commonColors.white1,
    signUpBtnBorderColor: commonColors.white,
    signUpBtnText: commonColors.white,
    loginModalBackgroundColor: commonColors.white,
    loginModalHeadingColor: commonColors.lightBlack,
    loginModalPill: commonColors.black3,
    splashScreenOverlay: commonColors.white1,
  },
} as const;
