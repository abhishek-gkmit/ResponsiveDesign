import { useState, useMemo } from 'react';

import Login from '@screens/login';
import SplashScreen from '@screens/splash';

import StackNavigator from '@navigation/StackNavigator';

function MainNavigator() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const navigator = useMemo(() => {
    return isUserLoggedIn ? (
      <StackNavigator />
    ) : (
      <Login makeUserLogin={() => setIsUserLoggedIn(true)} />
    );
  }, [isUserLoggedIn, setIsUserLoggedIn]);

  return showSplashScreen ? (
    <SplashScreen hideSplashScreen={() => setShowSplashScreen(false)} />
  ) : (
    navigator
  );
}

export default MainNavigator;
