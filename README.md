# react-native-rn-aggregator-sdk

React Native SDK integration with React Native application

## Installation

```sh
npm install react-native-rn-aggregator-sdk
```

## Install Dependencies

1. React Navigation Installation
   React Navigation installation refer https://reactnavigation.org/docs/getting-started#installation

Stack Navigator installation refer https://reactnavigation.org/docs/stack-navigator/

## Integration

Add SdkStack in your Navigator

```js
import { SdkStack } from 'react-native-rn-aggregator-sdk';

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

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

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
    white: '#FFFFFF',
    black: '#000000',
  },
  fonts: {
    regular: {},
    medium: {},
    semiBold: {},
    bold: {},
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

## License

MIT

---
