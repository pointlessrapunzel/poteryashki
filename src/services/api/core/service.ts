import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const site = 'http://localhost:3000';
export const axiosInstance = axios.create({
  baseURL: `${site}/api/`,
});

axiosInstance.interceptors.response.use(
  (res: AxiosResponse) => res,
  (err: AxiosError) => Promise.reject(err)
);

export async function get<T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> {
  const response = await axiosInstance.get(url, config);
  return response.data;
}

export async function post<T>(
  url: string,
  data: any,
  config?: AxiosRequestConfig
): Promise<T> {
  const response = await axiosInstance.post(url, data, config);
  return response.data;
}

export async function put<T>(
  url: string,
  data: any,
  config?: AxiosRequestConfig
): Promise<T> {
  const response = await axiosInstance.put(url, data, config);
  return response.data;
}

export async function patch<T>(
  url: string,
  data: any,
  config?: AxiosRequestConfig
): Promise<T> {
  const response = await axiosInstance.patch(url, data, config);
  return response.data;
}
export async function remove<T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> {
  const response = await axiosInstance.delete(url, config);
  return response.data;
}
