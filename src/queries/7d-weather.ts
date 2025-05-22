import { request, type BaseQWeatherResponse } from '@/utils/request';
import { useQuery } from '@tanstack/react-query';

/**
 *  daily.fxDate 预报日期
    daily.sunrise 日出时间，在高纬度地区可能为空
    daily.sunset 日落时间，在高纬度地区可能为空
    daily.moonrise 当天月升时间，可能为空
    daily.moonset 当天月落时间，可能为空
    daily.moonPhase 月相名称
    daily.moonPhaseIcon 月相图标代码，另请参考天气图标项目
    daily.tempMax 预报当天最高温度
    daily.tempMin 预报当天最低温度
    daily.iconDay 预报白天天气状况的图标代码，另请参考天气图标项目
    daily.textDay 预报白天天气状况文字描述，包括阴晴雨雪等天气状态的描述
    daily.iconNight 预报夜间天气状况的图标代码，另请参考天气图标项目
    daily.textNight 预报晚间天气状况文字描述，包括阴晴雨雪等天气状态的描述
    daily.wind360Day 预报白天风向360角度
    daily.windDirDay 预报白天风向
    daily.windScaleDay 预报白天风力等级
    daily.windSpeedDay 预报白天风速，公里/小时
    daily.wind360Night 预报夜间风向360角度
    daily.windDirNight 预报夜间当天风向
    daily.windScaleNight 预报夜间风力等级
    daily.windSpeedNight 预报夜间风速，公里/小时
    daily.precip 预报当天总降水量，默认单位：毫米
    daily.uvIndex 紫外线强度指数
    daily.humidity 相对湿度，百分比数值
    daily.pressure 大气压强，默认单位：百帕
    daily.vis 能见度，默认单位：公里
    daily.cloud 云量，百分比数值。可能为空
 */
export interface QWeatherDailyData {
  fxDate: string;
  tempMax: string;
  tempMin: string;
  textDay: string;
  textNight: string;
  iconDay: string;
  iconNight: string;
  wind360Day: string;
  wind360Night: string;
  windDirDay: string;
  windDirNight: string;
  windScaleDay: string;
  windSpeedDay: string;
  windScaleNight: string;
  windSpeedNight: string;
  humidity: string;
  precip: string;
  pressure: string;
  vis: string;
  cloud: string;
  uvIndex: string;
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moonPhase: string;
  moonPhaseIcon: string;
}

export interface QWeather7dWeatherResponse extends BaseQWeatherResponse {
  updateTime: string;
  fxLink: string;
  daily: QWeatherDailyData[];
}

export const useQuery7dWeather = (location?: string) => {
  return useQuery({
    queryKey: ['qweather/v7/weather/7d', location] as const,
    queryFn: ({ queryKey }) =>
      request
        .get<QWeather7dWeatherResponse>('/qweather/v7/weather/7d', {
          params: {
            location: queryKey[1],
          },
        })
        .then((res) => res.data),
    enabled: !!location,
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
  });
};
