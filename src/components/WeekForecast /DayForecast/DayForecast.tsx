import {
  Data,
  DayForecastWrapper,
  DayName,
  FeelsLike,
  Temp,
  TempInfo,
  WeatherIcon,
  WeatherInfo,
} from './DayForecastStyles';
import { useAppDispatch } from '../../../utils/hooks/hooks';
import {
  setCurrentData,
  setCurrentDay,
  setMainIcon,
  setMainTemp,
  setUIIndex,
} from '../../../services/store/slices/weatherSlice';

interface IDayForecast {
  i: number;
  dayName: string;
  data: string;
  temp: number | string;
  feelsLike: number | string;
  icon: string;
  currentDay: number;
}

export const DayForecast = ({
  i,
  dayName,
  data,
  temp,
  feelsLike,
  icon,
  currentDay,
}: IDayForecast) => {
  const dispatch = useAppDispatch();

  const handleClickChangeDay = () => {
    dispatch(setCurrentDay(i));
    dispatch(setCurrentData());
    dispatch(setMainTemp());
    dispatch(setMainIcon());
    dispatch(setUIIndex());
  };

  const DayForecastState = currentDay === i ? 'active' : 'not active';

  return (
    <DayForecastWrapper dir={DayForecastState} onClick={handleClickChangeDay}>
      <DayName>{dayName}</DayName>
      <Data>{data}</Data>
      <WeatherInfo>
        <WeatherIcon src={icon} alt={icon} />
        <TempInfo>
          <Temp>{temp}&deg;</Temp>
          <FeelsLike>{feelsLike}&deg;</FeelsLike>
        </TempInfo>
      </WeatherInfo>
    </DayForecastWrapper>
  );
};
