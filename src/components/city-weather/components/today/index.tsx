import type { WeatherData } from '../item';
import dayjs from 'dayjs';
import { TodayWeatherSection, TodayWeatherSubSection, TodayWeatherWrapper } from './twd';

interface TodayWeatherItemProps extends WeatherData {
  className?: string;
}

export const TodayWeatherItem = ({
  date,
  dayTemp,
  nightTemp,
  iconDay,
  description,
  moonPhase,
  className,
}: TodayWeatherItemProps) => {
  return (
    <TodayWeatherWrapper className={className}>
      <TodayWeatherSection>
        <div className="flex items-center gap-3">
          <div className="text-primary text-4xl">
            <i className={`qi-${iconDay}`}></i>
          </div>
          <div className="text-2xl font-semibold">{description}</div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold">{dayTemp}℃</span>
            <span className="mx-1"> / </span>
            <span className="text-2xl font-bold">{nightTemp}℃</span>
          </div>
        </div>
      </TodayWeatherSection>

      <TodayWeatherSubSection>
        <span className="text-lg font-bold">今天</span>
        <span className="text-muted-foreground vertical-text text-sm">{dayjs(date).format('MM/DD')}</span>
        {moonPhase && (
          <div className="ml-auto">
            <i className={`qi-${moonPhase} text-xl`}></i>
          </div>
        )}
      </TodayWeatherSubSection>
    </TodayWeatherWrapper>
  );
};
