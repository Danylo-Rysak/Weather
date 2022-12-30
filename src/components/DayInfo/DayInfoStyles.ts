import styled from 'styled-components';

export const DayInfoContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  margin: 0;
  height: 380px;
  width: 1240px;
  padding: 21px 33px;
  border-radius: 30px;
  background: linear-gradient(
    162.91deg,
    rgba(0, 0, 0, 0.03) -1.68%,
    rgba(255, 255, 255, 0.093125) 127.54%,
    rgba(255, 255, 255, 0.112968) 127.56%,
    rgba(255, 255, 255, 0.111191) 127.57%,
    rgba(255, 255, 255, 0.15) 127.58%
  );
`;

export const MainInfo = styled.div`
  display: flex;
  width: 260px;
  flex-direction: column;
  gap: 24px;
`;

export const CurrentData = styled.p`
  width: 400px;
  margin: 0;
  font-size: 24px;
  line-height: 33px;
`;

export const MainWeatherImg = styled.img`
  margin-left: -30px;
  height: 187.2834014892578px;
  width: 280.787841796875px;
`;

export const Temp = styled.p`
  margin: 0;
  font-size: 70px;
  line-height: 85px;
`;

export const InfoName = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 170px;
  gap: 13px;
`;

export const InfoNameValue = styled.p`
  color: #c0c0c0;
  margin: 0;
  flex-direction: column;
  font-size: 18px;
  line-height: 25px;
`;

export const DayPart = styled.div`
  display: flex;
  margin-left: 54px;
  gap: 30px;
  flex-wrap: wrap;
`;
