const fontFamily = {
  NunitoSans: 'NunitoSans-Regular',
  Montserrat: 'Montserrat-Regular',
};

const fontSize = {
  twelve: 12,
  fourteen: 14,
  sixteen: 16,
  eighteen: 18,
  twenty: 20,
  twentyFour: 24,
  thirtySix: 36,
  fourtyEight: 48,
};

const fontWeight = {
  thin: '100',
  extraLight: '200',
  light: '300',
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  extraBold: '800',
  black: '900',
} as const;

export { fontFamily, fontSize, fontWeight };
