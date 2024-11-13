import { Text } from 'react-native';

import { ThemeContextProvider } from '@config/contexts/ThemeContext';

function App() {
  <ThemeContextProvider>
    <Text>App</Text>
  </ThemeContextProvider>;
}

export default App;
