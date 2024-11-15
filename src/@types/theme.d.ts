import { colors } from '@theme/colors';

declare global {
  type Colors = (typeof colors)[keyof typeof colors];

  type Gradient = string[];

  interface Gradients {
    loginScreen: Gradient;
  }
}
