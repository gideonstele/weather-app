import { CityWeather } from './components/city-weather';

import { AppLayout, Header } from './components/layout';
import { TopCitiesSelector } from './components/top-cities-selector';
import { CityLocationProvider } from './hooks/city-location';

function App() {
  return (
    <AppLayout>
      <CityLocationProvider>
        <Header>
          <TopCitiesSelector />
        </Header>
        <CityWeather />
      </CityLocationProvider>
    </AppLayout>
  );
}

export default App;
