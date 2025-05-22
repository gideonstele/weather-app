import axios from 'axios';

export const request = axios.create({
  baseURL: `${location.protocol}//${location.host}`,
});

request.interceptors.request.use((config) => {
  config.headers['X-QW-Api-Key'] = import.meta.env.VITE_QW_API_TOKEN;
  return config;
});

export interface BaseQWeatherResponse {
  code: string;
}
