import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../ui/screens/login';
import Home from '../ui/screens/home';
import { SdkProvider } from '../provider/SdkProvider';
import { Provider } from 'react-redux';
import store from '../redux/Store';
import { Screens } from './Screens';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const Stack = createStackNavigator();

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://api.graphql.guide/graphql',
  cache: new InMemoryCache(),
});

export const SdkStack = (props: any) => {
  const { params } = props.route;
  //console.log('SDKSTACK-PROPS', params);

  return (
    <ApolloProvider client={client}>
      <SdkProvider userContext={params.context} theme={params.theme}>
        <Provider store={store}>
          <Stack.Navigator
            initialRouteName={Screens.LOGIN}
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen
              name={Screens.LOGIN}
              component={Login}
              initialParams={params}
            />
            <Stack.Screen name={Screens.HOME} component={Home} />
          </Stack.Navigator>
        </Provider>
      </SdkProvider>
    </ApolloProvider>
  );
};
