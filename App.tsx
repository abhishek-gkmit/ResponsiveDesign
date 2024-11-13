import { ThemeContextProvider } from '@config/contexts/ThemeContext';
import { Text } from 'react-native';

function App() {
  <ThemeContextProvider>
    <Text>App</Text>
  </ThemeContextProvider>;
}

export default App;
