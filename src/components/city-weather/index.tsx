import dayjs from 'dayjs';

import { useCityLocation } from '@/hooks/city-location';
import { useQuery7dWeather } from '@/queries/7d-weather';
import { WeatherItem } from './components/item';
import { TodayWeatherItem } from './components/today';

import { Skeleton } from '@components/ui/skeleton';
import { WeatherWrapper, WeatherWrapperContent, WeatherWrapperHeader } from './components/twd';
import { useMemo } from 'react';

const CityWeatherInner = () => {
  const { cityId } = useCityLocation();
  const { data, isLoading, isError } = useQuery7dWeather(cityId);

  const { todayData, otherDays } = useMemo(() => {
    if (!data?.daily) {
      return {
        todayData: null,
        otherDays: [],
      };
    }

    const today = dayjs().format('YYYY-MM-DD');
    const todayData = data.daily.find((item) => item.fxDate === today);
    const otherDays = data.daily.filter((item) => item.fxDate !== today);

    return {
      todayData,
      otherDays,
    };
  }, [data]);

  if (isLoading) {
    return (
      <WeatherWrapperContent>
        <Skeleton className="mb-4 h-32 w-full rounded-md" />
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <Skeleton
              key={index}
              className="mb-2 h-16 w-full rounded-md"
            />
          ))}
      </WeatherWrapperContent>
    );
  }

  if (isError || !data) {
    return <div className="bg-destructive/10 text-destructive rounded-md p-4">天气数据加载失败，请稍后再试</div>;
  }

  return (
    <WeatherWrapperContent>
      {/* 当天天气 */}
      {todayData && (
        <TodayWeatherItem
          date={todayData.fxDate}
          dayTemp={parseInt(todayData.tempMax)}
          nightTemp={parseInt(todayData.tempMin)}
          iconDay={todayData.iconDay}
          description={todayData.textDay}
          moonPhase={todayData.moonPhaseIcon}
        />
      )}

      {/* 其他天气 */}
      <div className="mt-4 overflow-hidden rounded-md border">
        {otherDays.map((item) => (
          <WeatherItem
            key={item.fxDate}
            date={item.fxDate}
            dayTemp={parseInt(item.tempMax)}
            nightTemp={parseInt(item.tempMin)}
            iconDay={item.iconDay}
            description={item.textDay}
            moonPhase={item.moonPhaseIcon}
          />
        ))}
      </div>
    </WeatherWrapperContent>
  );
};

export const CityWeather = () => {
  return (
    <WeatherWrapper>
      <WeatherWrapperHeader>7日天气预报</WeatherWrapperHeader>
      <CityWeatherInner />
    </WeatherWrapper>
  );
};
