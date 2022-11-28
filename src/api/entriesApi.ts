import axiosInstance from './AxiosInstance';

export const entriesApi = (): Promise<any> => {
  let url = 'entries';
  return axiosInstance.get(url);
};
