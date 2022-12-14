# react-native-sdk-demo

React Native SDK integration with React Native application

## Installation

```sh
npm install react-native-sdk-demo
```

## Install Dependencies

1. React Navigation Installation
   React Navigation installation refer https://reactnavigation.org/docs/getting-started#installation

2. Stack Navigator installation refer https://reactnavigation.org/docs/stack-navigator/

3. Redux (State Management) Installation

```js
yarn add @reduxjs/toolkit react-redux

```

4. Install axios for networking

```js
yarn add axios

```

## Integration

Add SdkStack in your Navigator

```js
import { SdkStack } from 'react-native-sdk-demo';

export const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        ... // props
      >
        ... // Your app screens
        <Stack.Screen name="sdk" component={SdkStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
```

## Initialize SDK

Initialize SDK in your root file App.js or index.js

```
export default function App() {
  useEffect(() => {
    // Initialize SDK
    initializeSDK();
  }, []);

  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
}

```

## Navigation

```js
import { useNavigation } from '@react-navigation/native';
import { Theme } from '../../../constants/Theme';

const navigation = useNavigation();

const gotoSDK = () => {
  navigation.navigate('sdk', {
    context: { mobileNumber: '87896196010' }, // User Context (Optional)
    theme: Theme, // Passing Theme Config (Optional)
  });
};

<Button onPress={gotoSDK} title="Open Sdk Screen" />;
```

## Passing Context (Optional)

```js
const context = { mobileNumber: '87896196010' };

navigation.navigate('sdk', {
  context: context, // User Context (Optional)
  theme: Theme, // Passing Theme Config (Optional)
});
```

## Theme Customization (Optional)

You can maintain Theme.js for theme customization and pass it in navigation props as in previous step

```js
export const Theme = {
  colors: {
    primary: '#f39c12',
    secondary: '#f1c40f',
    tertiary: '#d35400',
    success: '#2ecc71',
    failure: '#e74c3c',
    concrete: '#95a5a6',
    light: '#FFFFFF',
    dark: '#000000',
  },
  fonts: {
    regular: 'Roboto-Regular',
    medium: 'Roboto-Medium',
    semiBold: 'Roboto-Bold',
    bold: 'Roboto-Bold',
  },
  text: {
    small: { fontSize: 10 },
    medium: { fontSize: 12 },
    large: { fontSize: 16 },
    extraLarge: { fontSize: 18 },
  },
  button: {
    small: {
      borderRadius: 4,
      height: 20,
    },
    medium: {
      borderRadius: 6,
      height: 40,
    },
    large: {
      borderRadius: 12,
      height: 60,
    },
  },
};
```

## Logs & Events Listener

Listen to events for analytics from SDK. You can use this to push data to your own analytics tool.
Add event listener in your root file App.js or index.js

```
const sdkEventListener = (event: any) => {
  console.log('sdkEventListener', event);
};

useEffect(() => {
    ...
    // Initialize SDK
    initializeSDK();
    ...

    // Adding Event Listener
    DeviceEventEmitter.addListener('sdkEvents', sdkEventListener);
}, []);

```

Debug Logs from SDK

<img src="https://github.com/KPS250/rn-sdk-demo/blob/main/screenshots/logs.png" width=100% >

## Native Functions

SDK exposes below native functions to JS via promises

```
import {
  getAppName,
  getAppVersion,
  getAppVersionCode,
  getAppPackageName,
} from 'react-native-rn-aggregator-sdk';

getAppName().then((name: string) => console.log('AppName', name)); // --> RnAggregatorSdkExample
getAppVersion().then((name: string) => console.log('AppVersion', name)); // --> 1.0.0
getAppVersionCode().then((name: string) => console.log('AppCode', name)); // --> 1
getAppPackageName().then((name: string) => console.log('AppPackage', name)); // --> com.rnaggregatorsdkexample

```

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---
