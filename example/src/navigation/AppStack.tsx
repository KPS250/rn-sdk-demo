import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../pages/home';
import { Profile } from '../pages/profile';
import { SdkStack } from 'react-native-rn-aggregator-sdk';

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="sdk" component={SdkStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
