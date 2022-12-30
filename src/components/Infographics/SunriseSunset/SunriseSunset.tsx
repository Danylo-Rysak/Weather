import {
  DataTime,
  Info,
  InfoWrapper,
  Name,
  SunriseSunsetChart,
  SunriseSunsetWrapper,
  Value,
} from './SunriseSunsetStyles';
import {
  formattedDataTime,
  toPercentSunriseSunset,
} from '../../../utils/helpers/handyFunctions';
import { useAppSelector } from '../../../utils/hooks/hooks';
import { RootState } from '../../../services/store/store';

export const SunriseSunset = () => {
  const { days, sunrise, sunset, currentDay } = useAppSelector(
    (state: RootState) => state.weatherData
  );
  const width = toPercentSunriseSunset(formattedDataTime(days[currentDay][0].dt_txt));
  return (
    <SunriseSunsetWrapper>
      <Value> Sunrise and Sunset</Value>
      <SunriseSunsetChart>
        <svg
          width="373"
          height="152"
          viewBox="0 0 373 152"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <linearGradient id="linear-gradient">
            <stop offset="0%" stopColor="rgba(246, 222, 1, 0.36)" />
            <stop offset={width} stopColor="rgba(246, 222, 1, 0) " />
          </linearGradient>
          <path
            d="M351.182 146.861C351.182 108.176 334.08 71.0761 303.637 43.7218C273.195 16.3675 231.905 1 188.853 1C145.8 0.999997 104.511 16.3675 74.0687 43.7218C43.626 71.0761 26.5234 108.176 26.5234 146.861"
            stroke="#080338"
            strokeDasharray="7.84 7.84"
            fill="url(#linear-gradient)"
            width="100%"
            height="100%"
          />

          <path d="M0 151H373" stroke="#080338" />
        </svg>
      </SunriseSunsetChart>
      <InfoWrapper>
        <Info>
          <DataTime>{sunrise}</DataTime>
          <Name>Sunrise</Name>
        </Info>
        <Info>
          <DataTime>{sunset}</DataTime>
          <Name>Sunset</Name>
        </Info>
      </InfoWrapper>
    </SunriseSunsetWrapper>
  );
};
