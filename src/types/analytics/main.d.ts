//import type { PlatformConstants } from 'react-native';
type Platform = 'ios' | 'android' | 'macos' | 'windows' | 'web';
type StringOrNull = string | undefined;

export type AppConfigType = {
  name?: string;
  version?: string;
  package?: string;
  platform?: Platform;
};

export type TestIdType = {
  testID?: StringOrNull;
  accessible?: boolean;
  accessibilityLabel?: string;
};

export interface AppType {
  name?: string;
  version?: string;
  code?: string;
  package?: string;
  platform?: Platform;
  //platformVersion: string | number;
  //constants: PlatformConstants;
}
