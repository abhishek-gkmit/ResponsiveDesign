import { useContext, useEffect, useMemo, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  useAnimatedValue,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import ButtonWithIcon from '@components/buttonWithIcon';
import useStyles from '@hooks/useStyles';
import { ThemeContext } from '@config/contexts/ThemeContext';
import { isLandscape } from '@utility/scalingHelpers';
import { AppLogo } from '@constants/images';

import LoginModal from './LoginModal';

import getGlobalThemedStyles from '@theme/globalStyles';
import getThemedStyles from './styles';

function TermsAndConditions() {
  const localStyles = useStyles(getThemedStyles);

  const position = useAnimatedValue(0);

  useEffect(() => {
    Animated.timing(position, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, []);

  const messageAnimationStyles = useMemo(() => {
    return {
      transform: [
        {
          translateY: position.interpolate({
            inputRange: [0, 1],
            outputRange: [50, 0],
          }),
        },
      ],
    };
  }, [position]);

  return (
    <Animated.View
      style={[localStyles.messageContainer, messageAnimationStyles]}>
      <TouchableOpacity activeOpacity={0.8}>
        <Text style={localStyles.messageContainerText}>
          {'Terms & Conditions'}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

export function AnimatedAppLogo() {
  const position = useAnimatedValue(0);

  const localStyles = useStyles(getThemedStyles);

  const imageAnimationStyles = useMemo(() => {
    return {
      transform: [
        {
          translateY: position.interpolate({
            inputRange: [0, 1],
            outputRange: [-80, 0],
          }),
        },
        {
          scale: position,
        },
      ],
    };
  }, [position]);

  useEffect(() => {
    Animated.spring(position, {
      toValue: 1,
      bounciness: 15,
      speed: 10,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.Image
      source={AppLogo}
      style={[localStyles.appLogo, imageAnimationStyles]}
      borderRadius={1000}
    />
  );
}

function AppTitle() {
  const localStyles = useStyles(getThemedStyles);

  const fadeInOpacity = useAnimatedValue(0);

  const textAnimationStyles = useMemo(() => {
    return {
      transform: [
        {
          translateY: fadeInOpacity.interpolate({
            inputRange: [0, 1],
            outputRange: [isLandscape() ? 20 : 80, 0],
          }),
        },
      ],
    };
  }, [fadeInOpacity]);

  useEffect(() => {
    Animated.timing(fadeInOpacity, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.Text style={[localStyles.heading, textAnimationStyles]}>
      Responsive Design
    </Animated.Text>
  );
}

function ButtonsContainer({ showModal }: LoginButtonsContainer) {
  const localStyles = useStyles(getThemedStyles);

  const signUpBtnPosition = useAnimatedValue(0);
  const loginBtnPosition = useAnimatedValue(0);

  useEffect(() => {
    const animationConfig = { toValue: 1, useNativeDriver: true, duration: 400 };
    Animated.stagger(100, [
      Animated.timing(loginBtnPosition, {
        ...animationConfig,
      }),

      Animated.timing(signUpBtnPosition, {
        ...animationConfig,
      }),
    ]).start();
  }, []);

  return (
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
          onPress={showModal}
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
  );
}

function Login({ makeUserLogin }: LoginScreenProps) {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const { gradients } = useContext(ThemeContext);

  const globalStyles = useStyles(getGlobalThemedStyles);
  const localStyles = useStyles(getThemedStyles);

  return (
    <LinearGradient
      style={localStyles.gradientContainerStyle}
      colors={gradients.loginScreen}>
      <View
        style={StyleSheet.compose(
          globalStyles.screen,
          localStyles.loginScreen,
        )}>
        <View style={localStyles.appLogoAndHeadingContainer}>
          <AnimatedAppLogo />
          <AppTitle />
        </View>

        <ButtonsContainer showModal={() => setShowLoginModal(true)} />

        <TermsAndConditions />

        {showLoginModal ? (
          <LoginModal
            makeUserLogin={makeUserLogin}
            hideModal={() => setShowLoginModal(false)}
          />
        ) : null}
      </View>
    </LinearGradient>
  );
}

export default Login;
