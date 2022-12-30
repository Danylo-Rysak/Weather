import { DayPartInfoValue, DayPartInfoWrapper, WeatherIcon } from './DayPartInfoStyles';
import {
  isPositiveInfoValue,
  setDayPartName,
  setWeatherIcon,
} from '../../../utils/helpers/handyFunctions';

interface IDayPartInfo {
  icon: string;
  dataTime: string;
  temp: number;
  feelsLike: number;
  pressure: number;
  humidity: number;
  wind: number;
}

export const DayPartInfo = ({
  icon,
  dataTime,
  temp,
  feelsLike,
  pressure,
  humidity,
  wind,
}: IDayPartInfo) => {
  const dayPartName = setDayPartName(dataTime);
  const weatherIcon = setWeatherIcon(icon);
  const weatherTemp = isPositiveInfoValue(temp);
  const weatherFeelsLike = isPositiveInfoValue(feelsLike);
  return (
    <DayPartInfoWrapper>
      <DayPartInfoValue>{dayPartName}</DayPartInfoValue>
      <DayPartInfoValue>{dataTime}</DayPartInfoValue>
      <WeatherIcon src={weatherIcon} alt="weatherIcon" />
      <DayPartInfoValue>{weatherTemp}&deg;</DayPartInfoValue>
      <DayPartInfoValue>{weatherFeelsLike}&deg;</DayPartInfoValue>
      <DayPartInfoValue>{pressure}</DayPartInfoValue>
      <DayPartInfoValue>{humidity}</DayPartInfoValue>
      <DayPartInfoValue>{wind}</DayPartInfoValue>
    </DayPartInfoWrapper>
  );
};
