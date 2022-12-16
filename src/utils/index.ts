import { Platform } from 'react-native';
import { setConfig } from '../redux/slices/appSlice';

import {
  getAppName,
  getAppVersion,
  getAppVersionCode,
  getAppPackageName,
} from '../bindings';
import store from '../redux/Store';
import { initializeSdkEvent } from '../analytics';
import { CommonActions } from '@react-navigation/native';
import type { AppType, TestIdType } from '../types/analytics/main';

export const initializeSDK = async () => {
  let appConfig: AppType = {
    platform: Platform.OS,
    platformVersion: Platform.Version,
    constants: Platform.constants,
  };

  Promise.all([
    getAppName(),
    getAppVersion(),
    getAppVersionCode(),
    getAppPackageName(),
  ])
    .then(([name, version, code, packageName]) => {
      appConfig.name = name;
      appConfig.version = version;
      appConfig.code = code;
      appConfig.package = packageName;

      console.log('initializeSDK', appConfig);
      store.dispatch(setConfig(appConfig));
      console.log('SDK Initialized Successfully');
      initializeSdkEvent(appConfig);
    })
    .catch((error) => console.log('SDK Initialization Failed', error));
};

export const resetNavigationStack = (
  navigation: any,
  screen: any,
  params?: any
) => {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: screen, params: params }],
    })
  );
};

export const getTestIdProps = (id: string) => {
  if (!id) {
    return undefined;
  }

  const appIdentifier = store.getState().app.config.packageName;
  const prefix = `${appIdentifier}:id/`;
  const hasPrefix = id.startsWith(prefix);
  let identifier: TestIdType = {
    testID: Platform.select({
      android: !hasPrefix ? `${prefix}${id}` : id,
      ios: hasPrefix ? id.slice(prefix.length) : id,
    }),
  };

  if (Platform.OS === 'android') {
    identifier.accessible = false;
    identifier.accessibilityLabel = id;
  }
  return identifier;
};
