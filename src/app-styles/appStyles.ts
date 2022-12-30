import styled from 'styled-components';

export const AppContainer = styled.div`
  max-width: 1270px;
  padding: 0 15px 0 15px;
  position: relative;
  min-width: 320px;
  margin: 0 auto;
  color: #080338;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Preloader = styled.img`
  width: 200px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
  font-weight: 700;
  color: #394dff;
`;

export const ErrorInscription = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  color: #ff314d;
`;
