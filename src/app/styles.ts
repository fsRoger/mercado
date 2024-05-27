import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Main = styled.main`
  flex: 1;
  overflow-y: auto; /* Adicione esta linha */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding: 1rem;
  height: 100%;
  align-items: center;
  justify-content: center;

  /* Media query para tablet */
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Media query para mobile */
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
