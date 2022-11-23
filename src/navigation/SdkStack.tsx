import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../ui/screens/login';
import Home from '../ui/screens/home';
import { SdkProvider } from '../provider/SdkProvider';

const Stack = createStackNavigator();

export const SdkStack = (props: any) => {
  const { params } = props.route;
  //console.log('SDKSTACK-PROPS', params);
  return (
    <SdkProvider userContext={params.context} theme={params.theme}>
      <Stack.Navigator
        initialRouteName="sdklogin"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="sdklogin"
          component={Login}
          initialParams={params}
        />
        <Stack.Screen name="sdkhome" component={Home} />
      </Stack.Navigator>
    </SdkProvider>
  );
};
