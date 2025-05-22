import { classed } from '@tw-classed/react';

export const AppLayout = classed.section('w-full h-full relative overflow-hidden md:max-w-screen-md md:mx-auto', {
  variants: {
    schema: {
      sunny: 'bg-gradient-to-b from-blue-300 to-amber-300',
      cloudy: 'bg-gradient-to-b from-gray-500 to-gray-600',
      rainy: 'bg-gradient-to-b from-blue-500 to-blue-600',
      snowy: 'bg-gradient-to-b from-blue-500 to-blue-600',
    },
  },
  defaultVariants: {
    schema: 'sunny',
  },
});

export const Header = classed.header('flex justify-between items-center p-4');
