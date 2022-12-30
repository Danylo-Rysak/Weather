import { useAppSelector } from '../../utils/hooks/hooks';
import { RootState } from '../../services/store/store';
import { DayForecast } from './DayForecast/DayForecast';
import { WeekForecastWrapper } from './WeekForecastSlyles';
import {
  formattedDataDay,
  isPositiveInfoValue,
  setDay,
  setWeatherIcon,
} from '../../utils/helpers/handyFunctions';

export const WeekForecast = () => {
  const { days, currentDay } = useAppSelector((state: RootState) => state.weatherData);
  const dayForecast = days.map((day, i) => (
    <DayForecast
      key={i}
      i={i}
      dayName={setDay(day[0].dt_txt)}
      data={formattedDataDay(day[0].dt_txt)}
      temp={isPositiveInfoValue(Math.round(day[0].main.temp))}
      feelsLike={isPositiveInfoValue(Math.round(day[0].main.feels_like))}
      icon={setWeatherIcon(day[0].weather[0].icon)}
      currentDay={currentDay}
    />
  ));
  return <WeekForecastWrapper>{dayForecast}</WeekForecastWrapper>;
};
