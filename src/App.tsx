import { AppContainer, ErrorInscription, Preloader } from './app-styles/appStyles';
import { Header } from './components/Header/Header';
import { DayInfo } from './components/DayInfo/DayInfo';
import { useAppDispatch, useAppSelector } from './utils/hooks/hooks';
import { RootState } from './services/store/store';
import { WeekForecast } from './components/WeekForecast /WeekForecast';
import { Infographics } from './components/Infographics/Infographics';
import { useEffect } from 'react';
import preloader from '@assets/svg/preloader.svg';
import {
  setCurrentData,
  setMainIcon,
  setMainTemp,
  setSunrise,
  setSunset,
  setUIIndex,
} from './services/store/slices/weatherSlice';

export const App = () => {
  const { days, loading, hasErrors } = useAppSelector(
    (state: RootState) => state.weatherData
  );

  useEffect(() => {
    if (days[1].length > 0) {
      dispatch(setCurrentData());
      dispatch(setMainTemp());
      dispatch(setMainIcon());
      dispatch(setSunset());
      dispatch(setSunrise());
      dispatch(setUIIndex());
    }
  }, [days]);

  const dispatch = useAppDispatch();

  if (loading) {
    return <Preloader src={preloader} alt={preloader} />;
  }

  if (hasErrors) {
    return <ErrorInscription>Request error, reloading the page!</ErrorInscription>;
  }

  const weatherInfo = days[1].length > 0 && (
    <>
      <DayInfo />
      <Infographics />
      <WeekForecast />
    </>
  );
  return (
    <AppContainer>
      <Header />
      {weatherInfo}
    </AppContainer>
  );
};
