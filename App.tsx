import {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import SplashScreen from '@screens/splash';

import {ThemeContextProvider} from '@config/contexts/ThemeContext';
import MainNavigator from '@config/MainNavigator';

function App() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  return (
    <ThemeContextProvider>
      <NavigationContainer>
        {showSplashScreen ? (
          <SplashScreen hideSplashScreen={() => setShowSplashScreen(false)} />
        ) : (
          <MainNavigator />
        )}
      </NavigationContainer>
    </ThemeContextProvider>
  );
}

export default App;
