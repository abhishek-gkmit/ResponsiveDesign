import {NavigationContainer} from '@react-navigation/native';

import {ThemeContextProvider} from '@config/contexts/ThemeContext';
import MainNavigator from '@config/MainNavigator';

function App() {
  return (
    <ThemeContextProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </ThemeContextProvider>
  );
}

export default App;
