import store from '../redux/Store';
import { LogColorScheme } from '../constants/LogColors';
import { logEvent } from '../utils/logger';
import { Events, EventType } from './Events';
import type { AppConfigType } from '../types/analytics/main';

export const screenEvent = (screenName: string = '', data: any = {}) => {
  const payload = { type: EventType.SCREEN, data, app: getAppConfig() };
  logEvent(screenName, payload, LogColorScheme.screens);
};

export const buttonEvent = (buttonName: string, data: any = {}) => {
  const payload = { type: EventType.BUTTON, data, app: getAppConfig() };
  logEvent(buttonName, payload, LogColorScheme.analytics);
};

export const initializeSdkEvent = (data: any = {}) => {
  logEvent(Events.sdkInitialize, data, LogColorScheme.sdk);
};

export const apiEvent = (screenName: string = '', data: any = {}) => {
  const payload = { type: EventType.API, data, app: getAppConfig() };
  logEvent(screenName, payload, LogColorScheme.api);
};

const getAppConfig = () => {
  const appConfig = store.getState().app.config;
  //const userConfig = store.getState().user;
  let config: AppConfigType = {
    name: appConfig.name,
    version: appConfig.version,
    package: appConfig.package,
  };
  return config;
};

export { EventType, Events };
