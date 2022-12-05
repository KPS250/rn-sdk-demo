import { DeviceEventEmitter } from 'react-native';
//import store from '../redux/Store';
import { LogColorScheme } from '../constants/LogColors';

export const logEvent = (
  event: string,
  data: any = {},
  colorScheme: any = LogColorScheme.analytics
) => {
  //const appConfig = store.getState().app.config;
  let target = { timestamp: Date.now(), event };
  const payload = Object.assign(target, data);

  console.log(
    ...colorScheme.category,
    payload.type ? payload.type.toUpperCase() : 'SDK',
    ...LogColorScheme.blank,
    '',
    ...colorScheme.category,
    event,
    ...colorScheme.label,
    payload
  );
  DeviceEventEmitter.emit('sdkEvents', data);
};
