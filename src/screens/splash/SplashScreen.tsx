import { useContext, useEffect, useMemo } from 'react';
import { Animated, View, useAnimatedValue } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import useStyles from '@hooks/useStyles';
import { ThemeContext } from '@config/contexts/ThemeContext';
import { AppLogo } from '@constants/images';

import getThemedStyles from './styles';

function SplashScreen({ hideSplashScreen }: SplashScreenProps) {
  const localStyles = useStyles(getThemedStyles);
  const { gradients } = useContext(ThemeContext);

  const position = useAnimatedValue(0);
  const fade = useAnimatedValue(0);

  const appLogoStyles = useMemo(() => {
    return {
      transform: [
        {
          scale: position.interpolate({
            inputRange: [0, 1],
            outputRange: [10, 1],
          }),
        },
      ],
      opacity: position,
    };
  }, [position]);

  useEffect(function startAnimations() {
    const animationConfig = {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    };

    Animated.sequence([
      Animated.sequence([
        Animated.spring(position, {
          ...animationConfig,
          toValue: 1,
          speed: 2,
          bounciness: 5,
        }),

        Animated.timing(fade, {
          ...animationConfig,
          toValue: 1,
          duration: 1000,
        }),
      ]),

      Animated.parallel([
        Animated.timing(position, animationConfig),

        Animated.timing(fade, { ...animationConfig, duration: 200 }),
      ]),
    ]).start(hideSplashScreen);
  }, []);

  return (
    <LinearGradient
      style={localStyles.gradientContainerStyle}
      colors={gradients.loginScreen}>
      <View style={localStyles.splashContainer}>
        <Animated.Image
          source={AppLogo}
          style={[localStyles.appLogo, appLogoStyles]}
          borderRadius={1000}
        />

        <Animated.Text
          style={[
            localStyles.heading,
            {
              opacity: fade,
            },
          ]}>
          Responsive Design
        </Animated.Text>
      </View>
    </LinearGradient>
  );
}

export default SplashScreen;
