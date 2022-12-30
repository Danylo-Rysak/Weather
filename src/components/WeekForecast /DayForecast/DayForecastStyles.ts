import styled, { css } from 'styled-components';

export const DayForecastWrapper = styled.div<{ dir: 'active' | 'not active' }>`
  height: 133px;
  width: 158px;
  border-radius: 30px;
  padding: 16px 12px;
  cursor: pointer;
  ${(props) => {
    switch (props.dir) {
      case 'active':
        return css`
          transform: scale(1.1);
          box-shadow: 0 10px 20px 2px rgba(0, 0, 0, 0.25);
          background: #00fffc;
        `;
      case 'not active':
        return css`
          background: linear-gradient(
            162.91deg,
            rgba(0, 0, 0, 0.03) -1.68%,
            rgba(255, 255, 255, 0.093125) 127.54%,
            rgba(255, 255, 255, 0.112968) 127.56%,
            rgba(255, 255, 255, 0.111191) 127.57%,
            rgba(255, 255, 255, 0.15) 127.58%
          );
        `;
    }
  }}
`;

export const DayName = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
`;

export const Data = styled.p`
  margin: 4px 0;
  top: 4px;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
`;

export const WeatherInfo = styled.div`
  margin: 20px 0;
  display: flex;
  gap: 40px;
`;

export const WeatherIcon = styled.img`
  margin: 0;
  width: 56px;
  height: 56px;
`;

export const TempInfo = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export const Temp = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
`;

export const FeelsLike = styled(Temp)`
  margin: 4px 0;
  color: #686868;
`;
