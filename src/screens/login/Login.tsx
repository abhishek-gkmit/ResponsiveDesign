import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  useAnimatedValue,
  TouchableOpacity,
  Pressable,
  PanResponder,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import ButtonWithIcon from '@components/buttonWithIcon';
import Input from '@components/input';
import useStyles from '@hooks/useStyles';
import { ThemeContext } from '@config/contexts/ThemeContext';
import { isLandscape } from '@utility/scalingHelpers';
import { AppLogo } from '@constants';

import getGlobalThemedStyles from '@theme/globalStyles';
import getThemedStyles from './styles';

function LoginModal({ hideModal }: LoginModalProps) {
  const localStyles = useStyles(getThemedStyles);

  const position = useAnimatedValue(0);

  const pan = useRef(new Animated.ValueXY()).current;

  const closeModalWithAnimation = useCallback(() => {
    Animated.timing(position, {
      toValue: 500,
      duration: 300,
      useNativeDriver: true,
    }).start(() => hideModal());
  }, []);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dy: position }]),
      onPanResponderRelease: (event, gestureState) => {
        pan.extractOffset();

        if (gestureState.dy > 15) {
          closeModalWithAnimation();
        }
      },
    }),
  ).current;

  useEffect(() => {
    position.setValue(500);
    Animated.timing(position, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Pressable
      style={localStyles.loginModalOverlay}
      onPress={closeModalWithAnimation}>
      <Animated.View
        style={[localStyles.loginModal, { transform: [{ translateY: position }] }]}
        {...panResponder.panHandlers}>
        <Pressable style={localStyles.loginModalPressArea}>
          <View style={localStyles.pill}></View>
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
          />
        </Pressable>
      </Animated.View>
    </Pressable>
  );
}

function Login() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const { gradients } = useContext(ThemeContext);

  const globalStyles = useStyles(getGlobalThemedStyles);
  const localStyles = useStyles(getThemedStyles);

  // animation related values
  const fadeInOpacity = useAnimatedValue(0);
  const position = useAnimatedValue(0);
  const loginBtnPosition = useAnimatedValue(0);
  const signUpBtnPosition = useAnimatedValue(0);

  useEffect(() => {
    Animated.parallel([
      Animated.spring(position, {
        toValue: 1,
        bounciness: 15,
        speed: 10,
        useNativeDriver: true,
      }),
      Animated.stagger(300, [
        Animated.timing(fadeInOpacity, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.stagger(100, [
          Animated.timing(loginBtnPosition, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
          }),

          Animated.timing(signUpBtnPosition, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
          }),
        ]),
      ]),
    ]).start();
  }, []);

  return (
    <>
      <LinearGradient
        style={localStyles.gradientContainerStyle}
        colors={gradients.loginScreen}
      />
      <View
        style={StyleSheet.compose(
          globalStyles.screen,
          localStyles.loginScreen,
        )}>
        <View style={localStyles.appLogoAndHeadingContainer}>
          <Animated.Image
            source={AppLogo}
            style={[
              localStyles.appLogo,
              {
                transform: [
                  {
                    translateY: position.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-80, 0],
                    }),
                  },
                  {
                    scaleX: position.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 1],
                    }),
                  },
                  {
                    scaleY: position.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 1],
                    }),
                  },
                ],
              },
            ]}
            borderRadius={1000}
          />
          <Animated.Text
            style={[
              localStyles.heading,
              {
                transform: [
                  {
                    translateY: loginBtnPosition.interpolate({
                      inputRange: [0, 1],
                      outputRange: [isLandscape() ? 20 : 120, 0],
                    }),
                  },
                ],
              },
            ]}>
            Responsive Design
          </Animated.Text>
        </View>

        <View style={localStyles.buttonContainer}>
          <Animated.View
            style={{
              transform: [
                {
                  translateY: loginBtnPosition.interpolate({
                    inputRange: [0, 1],
                    outputRange: [isLandscape() ? 10 : 100, 0],
                  }),
                },
              ],
            }}>
            <ButtonWithIcon
              text="Login"
              style={localStyles.loginBtn}
              textStyle={localStyles.loginBtnText}
              onPress={() => setShowLoginModal(showModal => !showModal)}
            />
          </Animated.View>

          <Animated.View
            style={{
              transform: [
                {
                  translateY: signUpBtnPosition.interpolate({
                    inputRange: [0, 1],
                    outputRange: [isLandscape() ? 10 : 100, 0],
                  }),
                },
              ],
            }}>
            <ButtonWithIcon
              text="Sign Up"
              style={localStyles.signUpBtn}
              textStyle={localStyles.signUpBtnText}
            />
          </Animated.View>
        </View>

        <Animated.View
          style={[
            localStyles.messageContainer,
            {
              transform: [
                {
                  translateY: loginBtnPosition.interpolate({
                    inputRange: [0, 1],
                    outputRange: [50, 0],
                  }),
                },
              ],
            },
          ]}>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={localStyles.messageContainerText}>
              {'Terms & Conditions'}
            </Text>
          </TouchableOpacity>
        </Animated.View>

        {showLoginModal ? (
          <LoginModal hideModal={() => setShowLoginModal(false)} />
        ) : null}
      </View>
    </>
  );
}

export default Login;
