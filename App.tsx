import {Text} from 'react-native';

import {ThemeContextProvider} from '@config/contexts/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <Text>App</Text>
    </ThemeContextProvider>
  );
}

export default App;
