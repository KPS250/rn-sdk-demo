import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  getAppName(): Promise<string>;
  getAppVersion(): Promise<string>;
  getAppVersionCode(): Promise<string>;
  getAppPackageName(): Promise<string>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('RnAggregatorSdk');
