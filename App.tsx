import Login from '@screens/login';

import {ThemeContextProvider} from '@config/contexts/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <Main />
    </ThemeContextProvider>
  );
}

function Main() {
  return <Login />;
}

export default App;
