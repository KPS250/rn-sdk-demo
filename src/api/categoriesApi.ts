import { Urls } from '../constants/Urls';
import { apiEvent } from '../analytics';
import axiosInstance from './AxiosInstance';

export const categoriesApi = (): Promise<any> => {
  apiEvent(Urls.categories);
  return axiosInstance.get(Urls.categories);
};
