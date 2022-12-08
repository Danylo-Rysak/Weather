import styled from 'styled-components';

export const SearchPlaceContainer = styled.div`
  display: flex;
  align-items: center;
  order: 2;
  & #input {
    height: 50px;
    width: 302px;
    border-radius: 30px;
    padding-left: 54.84px;
    border: 1px solid silver;
    background: linear-gradient(
      162.91deg,
      rgba(0, 0, 0, 0.03) -1.68%,
      rgba(255, 255, 255, 0.093125) 127.54%,
      rgba(255, 255, 255, 0.112968) 127.56%,
      rgba(255, 255, 255, 0.111191) 127.57%,
      rgba(255, 255, 255, 0.15) 127.58%
    );

    &:focus {
      outline: none;
    }
  }
  @media (max-width: 600px) {
    order: 1;
  }
`;

export const SearchImg = styled.img`
  height: 19.9966983795166px;
  width: 20.011890411376953px;
  position: relative;
  z-index: 1;
  margin-right: -38.82px;
`;
