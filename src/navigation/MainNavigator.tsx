import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '@screens/home';

import { ROUTES } from '@constants/routes';

const Stack = createNativeStackNavigator<StackParamList>();

function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ROUTES.MainStack.Home} component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default MainNavigator;
