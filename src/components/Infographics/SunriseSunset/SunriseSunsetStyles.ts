import styled, { css } from 'styled-components';

export const SunriseSunsetWrapper = styled.div`
  height: 236px;
  width: 353px;
  padding: 20px 20px;
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

export const Value = styled.p`
  margin: 0;
  font-size: 20px;
  line-height: 27px;
`;

export const SunriseSunsetChart = styled.div`
  margin-top: 23px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
`;

export const Info = styled.div`
  margin-left: 10px;
`;

export const DataTime = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
`;

export const Name = styled.p`
  margin: 0;
  color: #ffe55f;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
`;
