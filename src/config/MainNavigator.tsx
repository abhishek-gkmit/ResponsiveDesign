import { useState } from 'react';

import Login from '@screens/login';
import StackNavigator from '@navigation/StackNavigator';

function MainNavigator() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  return isUserLoggedIn ? (
    <StackNavigator />
  ) : (
    <Login makeUserLogin={() => setIsUserLoggedIn(true)} />
  );
}

export default MainNavigator;
