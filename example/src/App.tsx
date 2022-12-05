import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { AppStack } from './navigation/AppStack';
import store from './redux/Store';
import 'react-native-gesture-handler';
import { initializeSDK } from 'react-native-rn-aggregator-sdk';
import { DeviceEventEmitter } from 'react-native';
import { sdkEventListener } from './utils';

export default function App() {
  useEffect(() => {
    // Initialize SDK
    initializeSDK();

    // Adding Event Listener
    DeviceEventEmitter.addListener('sdkEvents', sdkEventListener);
  }, []);

  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
}
