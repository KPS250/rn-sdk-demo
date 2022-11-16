import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/login';
import Home from '../pages/home';

const Stack = createStackNavigator();

export const SdkStack = () => {
  return (
    <Stack.Group>
      <Stack.Screen name="sdklogin" component={Login} />
      <Stack.Screen name="sdkhome" component={Home} />
    </Stack.Group>
  );
};
