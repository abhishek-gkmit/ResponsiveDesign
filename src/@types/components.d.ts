import { ReactNode, RefObject } from 'react';
import type {
  StyleProp,
  TextInputProps,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
  View,
} from 'react-native/types';

declare global {
  interface Icon {
    name: string;
    size?: number;
    color?: string;
  }

  interface InputComponentProps extends TextInputProps {
    setValue?: (value: string) => void;
    errorMsg?: string;
    label?: string;
    icon?: Icon | ReactElement;
  }

  interface ButtonWithIconProps extends TouchableOpacityProps {
    text: string;
    icon?: Icon;
    iconPosition?: 'start' | 'end';
    textStyle?: StyleProp<TextStyle>;
    style?: StyleProp<ViewStyle>;
  }
}
