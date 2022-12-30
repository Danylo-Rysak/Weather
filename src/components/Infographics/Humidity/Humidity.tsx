import { Chart, GraphicWrapper, Info, Name, Percent } from './HumidityStyles';
import { RootState } from '../../../services/store/store';
import { useAppSelector } from '../../../utils/hooks/hooks';
import { humidityChange } from '../../../utils/helpers/handyFunctions';

export const Humidity = () => {
  const { days, currentDay } = useAppSelector((state: RootState) => state.weatherData);
  const currentHumidity = days[currentDay][0].main.humidity;
  const value = humidityChange(currentHumidity);

  return (
    <GraphicWrapper>
      <Info>
        <Name>Humidity</Name>
        <Percent>{currentHumidity}%</Percent>
      </Info>
      <Chart>
        <svg
          width="393"
          height="276"
          viewBox="0 0 393 276"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="393" height="276" rx="30" fill="none" />
          <path d="M10 221H383" stroke="#080338" />
          <path
            d="M25 220C25 220 26.0213 164.353 45.5 165.334C59.4492 166.036 62.3898 193.696 76 197.319C99.8258 203.663 98.0685 122.041 122.5 122.881C146.264 123.697 137.256 191.515 160.5 197.319C199.262 206.999 165.869 79.7717 205.5 81.009C244.626 82.2304 209.28 207.134 247.5 197.319C273.434 190.66 267 155.692 285.5 153.121C304 150.551 301.745 214.678 328.5 200.809C346.446 191.506 344.438 153.121 358 149.05C373.5 144.398 374.5 221.5 374.5 221.5"
            stroke="#080338"
          />
          <path
            d="M45.4708 165.334C26.0199 164.353 25 220 25 220H375C375 220 373.003 144.398 357.525 149.05C343.982 153.121 345.988 191.506 328.067 200.809C301.35 214.678 303.602 150.551 285.128 153.121C266.655 155.692 273.08 190.66 247.183 197.319C209.017 207.134 244.313 82.2304 205.243 81.009C165.668 79.7717 199.014 206.999 160.307 197.319C137.096 191.515 146.091 123.697 122.361 122.881C97.9643 122.041 99.719 203.663 75.9272 197.319C62.3365 193.696 59.4001 166.036 45.4708 165.334Z"
            fill="url(#paint1_linear_94_2755)"
          />
          <rect fill="none"></rect>
          <text
            fill="#080338"
            xmlSpace="preserve"
            fontFamily="Open Sans"
            fontSize="12"
            letterSpacing="0em"
          >
            <tspan x="18" y="234.655">
              0
            </tspan>
          </text>
          <text
            fill="#080338"
            xmlSpace="preserve"
            fontFamily="Open Sans"
            fontSize="12"
            letterSpacing="0em"
          >
            <tspan x="96" y="234.655">
              25
            </tspan>
          </text>
          <text
            fill="#080338"
            xmlSpace="preserve"
            fontFamily="Open Sans"
            fontSize="12"
            letterSpacing="0em"
          >
            <tspan x="185" y="234.655">
              50
            </tspan>
          </text>
          <text
            fill="#080338"
            xmlSpace="preserve"
            // style="white-space: pre"
            fontFamily="Open Sans"
            fontSize="12"
            letterSpacing="0em"
          >
            <tspan x="273" y="234.655">
              75
            </tspan>
          </text>
          <text
            fill="#080338"
            xmlSpace="preserve"
            fontFamily="Open Sans"
            fontSize="12"
            letterSpacing="0em"
          >
            <tspan x="361" y="234.655">
              100
            </tspan>
          </text>
          <rect
            x="0.5"
            y="0.5"
            width="392"
            height="275"
            rx="29.5"
            stroke="url(#paint2_linear_94_2755)"
            strokeOpacity="0.4"
          />
          <defs>
            <linearGradient
              id="paint0_linear_94_2755"
              x1="55.3591"
              y1="-18"
              x2="151.605"
              y2="427.673"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopOpacity="0.03" />
              <stop offset="0.9997" stopColor="white" stopOpacity="0.093125" />
              <stop offset="0.9998" stopColor="white" stopOpacity="0.112968" />
              <stop offset="0.9999" stopColor="white" stopOpacity="0.111191" />
              <stop offset="1" stopColor="white" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_94_2755"
              x1="2.03281"
              y1="186.261"
              x2={value}
              y2="153.376"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#333FAA" />
              <stop offset="1" stopColor="#0028B8" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_94_2755"
              x1="-313.203"
              y1="-233.5"
              x2="441.194"
              y2="310.679"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#494949" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </Chart>
    </GraphicWrapper>
  );
};
