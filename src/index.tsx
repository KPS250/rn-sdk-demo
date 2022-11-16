import { NativeModules, Platform } from 'react-native';
const axios = require('axios').default;

const LINKING_ERROR =
  `The package 'react-native-rn-aggregator-sdk' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;

const RnAggregatorSdkModule = isTurboModuleEnabled
  ? require('./NativeRnAggregatorSdk').default
  : NativeModules.RnAggregatorSdk;

const RnAggregatorSdk = RnAggregatorSdkModule
  ? RnAggregatorSdkModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return RnAggregatorSdk.multiply(a, b);
  /*return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(100);
    }, 300);
  });
  */
}

export function callApi() {
  let url = 'https://api.publicapis.org/entries';
  return axios.get(url);
}

export function num(): number {
  //console.log("Input", data);
  return 1;
}

export * from './screens/Home';
export * from './screens/Login';
export * from './SdkStack';
