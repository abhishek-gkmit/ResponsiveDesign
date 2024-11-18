import { useCallback, useRef, useEffect, useContext } from 'react';
import {
  useAnimatedValue,
  Animated,
  PanResponder,
  Pressable,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import Input from '@components/input';
import ButtonWithIcon from '@components/buttonWithIcon';
import { ThemeContext } from '@config/contexts/ThemeContext';
import useStyles from '@hooks/useStyles';
import { heightPercentageToDP, verticalScale } from '@utility/scalingHelpers';
import { ROUTES } from '@constants/routes';

import getThemedStyles from './styles';

function LoginModal({ hideModal, makeUserLogin }: LoginModalProps) {
  const navigation = useNavigation<StackNavigationType>();

  const localStyles = useStyles(getThemedStyles);

  const { gradients } = useContext(ThemeContext);

  const position = useAnimatedValue(heightPercentageToDP('80%'));

  const closeModal = useCallback(() => {
    Animated.timing(position, {
      toValue: heightPercentageToDP('80%'),
      duration: 300,
      useNativeDriver: true,
    }).start(() => hideModal());
  }, []);

  const snapModal = useCallback(() => {
    Animated.timing(position, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        if (gestureState.dy < 0) {
          return;
        }
        Animated.event([null, { dy: position }])(event, gestureState);
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > verticalScale(80)) {
          closeModal();
        } else {
          snapModal();
        }
      },
    }),
  ).current;

  useEffect(() => {
    Animated.timing(position, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Pressable style={localStyles.loginModalOverlay} onPress={closeModal}>
      <Animated.View
        style={[localStyles.loginModal, { transform: [{ translateY: position }] }]}
        {...panResponder.panHandlers}>
        <LinearGradient
          colors={gradients.loginScreen}
          style={[
            localStyles.gradientContainerStyle,
            localStyles.modalGradientContainerStyle,
          ]}>
          <Pressable style={localStyles.loginModalPressArea}>
            <View style={localStyles.pill} />
            <Text style={localStyles.loginModalHeading}>Welcome back!</Text>
            <Input placeholder="Email Address" />
            <Input placeholder="Password" />
            <ButtonWithIcon
              text="Login"
              style={StyleSheet.compose(
                localStyles.loginBtn,
                localStyles.modalLoginBtn,
              )}
              textStyle={localStyles.loginBtnText}
              onPress={makeUserLogin}
            />
          </Pressable>
        </LinearGradient>
      </Animated.View>
    </Pressable>
  );
}

export default LoginModal;
