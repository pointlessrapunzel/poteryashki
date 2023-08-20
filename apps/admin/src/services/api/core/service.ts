import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import router from '@/router';
import { refreshTokens } from '@/services/api/auth';

const site = 'http://localhost:3001';
const axiosInstance = axios.create({
  baseURL: `${site}/api/`,
  withCredentials: true,
});

let refreshRequest: Promise<unknown> | null = null;
let isRetry = false;
axiosInstance.interceptors.response.use(
  (res: AxiosResponse) => res,
  async (err: AxiosError) => {
    if (err.response?.status !== 401) {
      throw err;
    }

    if (err.response?.status === 401 && isRetry) {
      isRetry = false;
      refreshRequest = null;
      await router.push('login');
      return;
    }

    if (!refreshRequest) {
      refreshRequest = refreshTokens();
    }

    isRetry = true;
    await refreshRequest;
    return axiosInstance(err.config as AxiosRequestConfig);
  },
);

export async function get<T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> {
  const response = await axiosInstance.get(url, config);
  return response.data;
}

export async function post<T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<T> {
  const response = await axiosInstance.post(url, data, config);
  return response.data;
}

export async function put<T>(
  url: string,
  data: any,
  config?: AxiosRequestConfig,
): Promise<T> {
  const response = await axiosInstance.put(url, data, config);
  return response.data;
}

export async function patch<T>(
  url: string,
  data: any,
  config?: AxiosRequestConfig,
): Promise<T> {
  const response = await axiosInstance.patch(url, data, config);
  return response.data;
}
export async function remove<T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> {
  const response = await axiosInstance.delete(url, config);
  return response.data;
}
