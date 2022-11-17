import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/login';
import Home from '../pages/home';

const Stack = createStackNavigator();

export const SdkStack = (props: any) => {
  console.log('SDKSTACK-PROPS', props.route.params);
  return (
    <Stack.Navigator
      initialRouteName="sdklogin"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="sdklogin"
        component={Login}
        initialParams={props.route.params}
      />
      <Stack.Screen name="sdkhome" component={Home} />
    </Stack.Navigator>
  );
};
