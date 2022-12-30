import {
  CurrentData,
  DayInfoContainer,
  DayPart,
  InfoName,
  InfoNameValue,
  MainInfo,
  MainWeatherImg,
  Temp,
} from './DayInfoStyles';
import { useAppSelector } from '../../utils/hooks/hooks';
import { RootState } from '../../services/store/store';
import { formattedDataTime } from '../../utils/helpers/handyFunctions';
import { DayPartInfo } from './DayPartInfo/DayPartInfo';

export const DayInfo = () => {
  const { days, currentDay, currentData, mainTemp, mainIcon } = useAppSelector(
    (state: RootState) => state.weatherData
  );

  const dayParts = days[currentDay].map((dayPart, i) => (
    <DayPartInfo
      key={i}
      icon={dayPart.weather[0].icon}
      dataTime={formattedDataTime(dayPart.dt_txt)}
      temp={Math.round(dayPart.main.temp)}
      feelsLike={Math.round(dayPart.main.feels_like)}
      pressure={dayPart.main.pressure}
      humidity={dayPart.main.humidity}
      wind={Math.round(dayPart.wind.speed)}
    />
  ));

  return (
    <DayInfoContainer>
      <MainInfo>
        <CurrentData>{currentData}</CurrentData>
        <MainWeatherImg src={mainIcon} alt="mainWeatherIcon" />
        <Temp>{mainTemp}&deg;C</Temp>
      </MainInfo>
      <InfoName>
        <InfoNameValue>Temp, &deg;C</InfoNameValue>
        <InfoNameValue>Feels Like</InfoNameValue>
        <InfoNameValue>Pressure, kPa</InfoNameValue>
        <InfoNameValue>Humidity, %</InfoNameValue>
        <InfoNameValue>Wind, km/h</InfoNameValue>
      </InfoName>
      <DayPart>{dayParts}</DayPart>
    </DayInfoContainer>
  );
};
