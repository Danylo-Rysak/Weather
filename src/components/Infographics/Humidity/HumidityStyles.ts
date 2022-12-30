import styled from 'styled-components';

export const GraphicWrapper = styled.div`
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

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Name = styled.p`
  margin: 0;
  font-size: 20px;
  line-height: 27px;
`;

export const Percent = styled(Name)``;

export const Chart = styled.div`
  position: absolute;
  margin-left: -20px;
  margin-top: -46px;
`;
