import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
