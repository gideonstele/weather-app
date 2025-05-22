import { cn } from '@/components/lib/utils';
import dayjs from 'dayjs';

// 基本天气数据接口
export interface WeatherData {
  date: string;
  dayTemp: number;
  nightTemp: number;
  iconDay: string;
  description: string;
  moonPhase?: string;
}

// 普通天气项组件
interface WeatherItemProps extends WeatherData {
  className?: string;
}

export const WeatherItem = ({
  date,
  dayTemp,
  nightTemp,
  iconDay,
  description,
  moonPhase,
  className,
}: WeatherItemProps) => {
  return (
    <div className={cn('flex items-center border-b p-3 last:border-b-0', className)}>
      {/* 日期 */}
      <div className="w-16 flex-shrink-0">
        <div className="text-sm font-medium">{dayjs(date).format('ddd')}</div>
        <div className="text-muted-foreground text-xs">{dayjs(date).format('MM/DD')}</div>
      </div>

      {/* 天气图标 */}
      <div className="text-primary mx-2 w-10 flex-shrink-0 text-3xl">
        <i className={`qi-${iconDay}`}></i>
      </div>

      {/* 天气描述 */}
      <div className="min-w-0 flex-grow px-2">
        <div className="truncate text-sm">{description}</div>
      </div>

      {/* 温度 */}
      <div className="flex flex-shrink-0 items-center gap-2">
        <div className="text-sm">
          <span className="font-medium">{dayTemp}°</span>
        </div>
        <div className="text-muted-foreground text-xs">/</div>
        <div className="text-muted-foreground text-sm">
          <span>{nightTemp}°</span>
        </div>
      </div>

      {/* 月相 */}
      {moonPhase && (
        <div className="ml-3 flex-shrink-0">
          <i className={`qi-${moonPhase} text-lg`}></i>
        </div>
      )}
    </div>
  );
};
