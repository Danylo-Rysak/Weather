import { InfographicsWrapper } from './InfographicsStyles';
import { UVIndex } from './UVIndex/UVIndex';
import { SunriseSunset } from './SunriseSunset/SunriseSunset';
import { Humidity } from './Humidity/Humidity';

export const Infographics = () => {
  return (
    <InfographicsWrapper>
      <UVIndex />
      <SunriseSunset />
      <Humidity />
    </InfographicsWrapper>
  );
};
