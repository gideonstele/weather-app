import { request, type BaseQWeatherResponse } from '@/utils/request';
import { useQuery } from '@tanstack/react-query';

export interface TopCityItem {
  name: string;
  id: string;
  lat: string;
  lon: string;
  adm2: string;
  adm1: string;
  country: string;
  tz: string;
}

export interface QWeatherTopCityListResponse extends BaseQWeatherResponse {
  topCityList: TopCityItem[];
}

export const useQueryTopCities = () => {
  return useQuery({
    queryKey: ['qweather/geo/v2/city/top'],
    queryFn: () => request.get<QWeatherTopCityListResponse>('/qweather/geo/v2/city/top').then((res) => res.data),
  });
};
