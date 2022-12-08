import { useAppSelector } from '../../../utils/hooks/hooks';
import { RootState } from '../../../services/store/store';
import { WeatherPlaceValue } from './WeatherPlaceStyles';

export const WeatherPlace = () => {
  const { placeName } = useAppSelector((state: RootState) => state.weatherData);
  return <WeatherPlaceValue>{placeName}</WeatherPlaceValue>;
};
