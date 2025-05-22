import { cn } from '@/components/lib/utils';
import type { WeatherData } from './item';
import dayjs from 'dayjs';

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
    <div className={cn('bg-primary/10 rounded-md p-4', className)}>
      <section className="flex flex-col items-center justify-center gap-2">
        <div className="flex items-center gap-3">
          <div className="text-primary text-4xl">
            <i className={`qi-${iconDay}`}></i>
          </div>
          <div className="text-2xl font-semibold">{description}</div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center">
            <span className="mr-2 text-2xl font-bold">{dayTemp}°</span>
            <span className="text-muted-foreground mx-1">/</span>
            <span className="text-muted-foreground text-2xl">{nightTemp}°</span>
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center gap-2">
        <span className="text-lg font-bold">今天</span>
        <span className="text-muted-foreground vertical-text text-sm">{dayjs(date).format('MM/DD')}</span>
        {moonPhase && (
          <div className="ml-auto">
            <i className={`qi-${moonPhase} text-xl`}></i>
          </div>
        )}
      </div>
    </div>
  );
};
