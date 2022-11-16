import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
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
        <Stack.Group>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="profile" component={Profile} />
        </Stack.Group>
        {SdkStack()}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
