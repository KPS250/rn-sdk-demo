import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './screens/Home';
import { Login } from './screens/Login';

const Stack = createStackNavigator();

export const SdkStack = () => {
  return (
    <Stack.Group>
      <Stack.Screen name="sdklogin" component={Login} />
      <Stack.Screen name="sdkhome" component={Home} />
    </Stack.Group>
  );
};
