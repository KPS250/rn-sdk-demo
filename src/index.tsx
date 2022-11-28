import { NativeModules, Platform } from 'react-native';

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

export * from './navigation/SdkStack';
export * from './api';
