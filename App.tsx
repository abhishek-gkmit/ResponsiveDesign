import {useMemo, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import SplashScreen from '@screens/splash';
import Login from '@screens/login';

import MainNavigator from '@navigation/MainNavigator';
import {ThemeContextProvider} from '@config/contexts/ThemeContext';

function App() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const navigator = useMemo(() => {
    return isUserLoggedIn ? (
      <MainNavigator />
    ) : (
      <Login makeUserLogin={() => setIsUserLoggedIn(true)} />
    );
  }, [isUserLoggedIn, setIsUserLoggedIn]);

  return (
    <ThemeContextProvider>
      <NavigationContainer>
        {showSplashScreen ? (
          <SplashScreen hideSplashScreen={() => setShowSplashScreen(false)} />
        ) : (
          navigator
        )}
      </NavigationContainer>
    </ThemeContextProvider>
  );
}

export default App;
