import { useQueryTopCities } from '@queries/top-cities';
import { useMemo } from 'react';
import { AioSelect } from './aio-select';
import { useCityLocation } from '@/hooks/city-location';

export const TopCitiesSelector = () => {
  const { data, isLoading, isError } = useQueryTopCities();

  const { cityId, setCityId } = useCityLocation();

  const options = useMemo(
    () =>
      data?.topCityList.map((item) => ({
        label: item.name,
        value: item.id,
      })),
    [data],
  );

  if (isError || (data?.code && data.code !== '200')) {
    return (
      <section className="flex items-center justify-center">
        <p className="text-muted-foreground text-sm">{'Failed to load top cities'}</p>
      </section>
    );
  }

  return (
    <AioSelect
      options={options}
      isLoading={isLoading}
      value={cityId}
      onChange={setCityId}
    />
  );
};
