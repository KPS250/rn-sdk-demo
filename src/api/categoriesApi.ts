import axiosInstance from './AxiosInstance';

export const categoriesApi = (): Promise<any> => {
  let url = 'categories';
  return axiosInstance.get(url);
};
