import createContextContainer from '@/utils/create-context-container';
import { useState } from 'react';

export const [CityLocationProvider, useCityLocation] = createContextContainer(function useCityLocationContainer() {
  /**
   * Shanghai as default city
   */
  const [cityId, setCityId] = useState('101020100');

  return {
    cityId,
    setCityId,
  };
});
