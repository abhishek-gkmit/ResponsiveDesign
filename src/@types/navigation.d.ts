import { NavigationProp } from '@react-navigation/native';

import { ROUTES } from '@constants/routes';

declare global {
  type StackScreenNames = keyof typeof ROUTES.MainStack;
  type StackParamList = Record<StackScreenNames, undefined>;
  type StackNavigationType = NavigationProp<StackParamList>;
}
