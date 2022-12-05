import { apiEvent } from '../analytics';
import axiosInstance from './AxiosInstance';
import { Urls } from '../constants/Urls';

export const entriesApi = (): Promise<any> => {
  apiEvent(Urls.entries);
  return axiosInstance.get(Urls.entries);
};
