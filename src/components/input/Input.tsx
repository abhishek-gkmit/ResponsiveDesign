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

import { ThemeContext } from '@config/contexts/ThemeContext';

import getThemedStyles from './styles';
import useStyles from '@hooks/useStyles';

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

  // memoized variables
  const iconToRender = useMemo(() => {
    return icon ? (
      <MaterialCommunityIcons
        name={icon.name}
        size={icon.size || 14}
        color={
          isFocused
            ? icon.color || colors.primary
            : textChanged
              ? icon.color || colors.primary
              : !errorMsg || errorMsg === ''
                ? icon.color || colors.primary
                : 'red'
        }
      />
    ) : null;
  }, [icon, errorMsg, isFocused]);

  const textInput = useMemo(() => {
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
  }, [value, setValue, setIsFocused, icon, secureTextEntry, props]);

  const makePasswordVisibleButton = useMemo(() => {
    return cprops.secureTextEntry ? (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => setPasswordVisible(passwordVisible => !passwordVisible)}>
        {!passwordVisible ? (
          <MaterialCommunityIcons
            name={'eye-off'}
            size={14}
            color={colors.gray}
          />
        ) : (
          <MaterialCommunityIcons name={'eye'} size={14} color={colors.gray} />
        )}
      </TouchableOpacity>
    ) : null;
  }, [cprops, passwordVisible, setPasswordVisible]);

  const errorMsgText = useMemo(() => {
    if (!textChanged && errorMsg) {
      return <Text style={styles.errorMsg}>{errorMsg}</Text>;
    } else {
      return null;
    }
  }, [errorMsg, textChanged]);

  const inputLabel = useMemo(() => {
    return label ? <Text style={styles.inputLabel}>{label}</Text> : null;
  }, [label]);

  const inputContainerStyle = useMemo(() => {
    return isFocused
      ? [styles.inputContainer, styles.inputContainerFocus]
      : textChanged
        ? styles.inputContainer
        : !errorMsg || errorMsg === ''
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
