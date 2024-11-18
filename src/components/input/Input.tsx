import React, {
  ForwardedRef,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import useStyles from '@hooks/useStyles';
import { ThemeContext } from '@config/contexts/ThemeContext';

import getThemedStyles from './styles';

function renderTextInput(
  value: string | undefined,
  setValueWrapper: (value: string) => void,
  setIsFocused: (isFocused: boolean) => void,
  icon: Icon | null,
  secureTextEntry: boolean | undefined,
  colors: Colors,
  passwordVisible: boolean,
  props: any,
  styles: any,
  ref: any,
) {
  return (
    <TextInput
      style={styles.textInput}
      value={value}
      onChangeText={setValueWrapper}
      placeholderTextColor={colors.gray}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      hitSlop={{
        top: 15,
        bottom: 15,
        left: icon?.size ? icon.size + 15 : 24 + 15,
        right: 15,
      }}
      ref={ref}
      secureTextEntry={secureTextEntry && !passwordVisible}
      {...props}
    />
  );
}

function renderMakePasswordVisibleButton(
  passwordVisible: boolean,
  setPasswordVisible: React.Dispatch<React.SetStateAction<boolean>>,
  colors: Colors,
  cprops: any,
) {
  return cprops.secureTextEntry ? (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => setPasswordVisible(passwordVisible => !passwordVisible)}>
      <MaterialCommunityIcons
        name={!passwordVisible ? 'eye-off' : 'eye'}
        size={14}
        color={colors.gray}
      />
    </TouchableOpacity>
  ) : null;
}

// cprops is a shorthand for componentProps
const Input = forwardRef(function Input(
  cprops: InputComponentProps,
  ref: ForwardedRef<TextInput>,
) {
  const { value, setValue, errorMsg, icon, label, secureTextEntry, ...props } =
    cprops;
  const [isFocused, setIsFocused] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [textChanged, setTextChanged] = useState(false);

  const { colors } = useContext(ThemeContext);

  const styles = useStyles(getThemedStyles);

  const setValueWrapper = useCallback(
    (value: string) => {
      if (!textChanged) {
        setTextChanged(true);
      }

      setValue && setValue(value);
    },
    [setValue],
  );

  const iconToRender = useMemo(() => {
    const iconColor =
      isFocused || textChanged || !errorMsg || errorMsg === ''
        ? icon?.color || colors.primary
        : 'red';

    return icon ? (
      <MaterialCommunityIcons
        name={icon.name}
        size={icon.size || 14}
        color={iconColor}
      />
    ) : null;
  }, [icon, errorMsg, isFocused, textChanged]);

  const textInput = useMemo(() => {
    return renderTextInput(
      value,
      setValueWrapper,
      setIsFocused,
      icon,
      secureTextEntry,
      colors,
      passwordVisible,
      props,
      styles,
      ref,
    );
  }, [
    value,
    setValueWrapper,
    setIsFocused,
    icon,
    secureTextEntry,
    props,
    colors,
    passwordVisible,
    styles,
  ]);

  const makePasswordVisibleButton = useMemo(() => {
    return renderMakePasswordVisibleButton(
      passwordVisible,
      setPasswordVisible,
      colors,
      cprops,
    );
  }, [cprops, passwordVisible, setPasswordVisible, colors]);

  const errorMsgText = useMemo(() => {
    return !textChanged && errorMsg ? (
      <Text style={styles.errorMsg}>{errorMsg}</Text>
    ) : null;
  }, [errorMsg, textChanged]);

  const inputLabel = useMemo(() => {
    return label ? <Text style={styles.inputLabel}>{label}</Text> : null;
  }, [label]);

  const inputContainerStyle = useMemo(() => {
    return isFocused
      ? [styles.inputContainer, styles.inputContainerFocus]
      : textChanged || !errorMsg || errorMsg === ''
        ? styles.inputContainer
        : [styles.inputContainer, styles.inputContainerError];
  }, [isFocused, textChanged, errorMsg]);

  // effects
  useEffect(() => {
    setTextChanged(false);
  }, [errorMsg]);

  return (
    <View>
      {inputLabel}

      <View style={inputContainerStyle}>
        {iconToRender}
        {textInput}
        {makePasswordVisibleButton}
      </View>

      {errorMsgText}
    </View>
  );
});

export default Input;
