import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Main = styled.main`

  flex: 1;
  overflow-y: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  gap: 0.5rem;

  button.pagination{
    border: 1px solid #000 ;
    font-size: 14px;
    border-radius: 10px;
    padding: 6px;
    background-color:#76bcad ;
    cursor: pointer;
  }
`;

export const ContainerProduct = styled.div`
  padding-top: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  align-items: center;
  justify-content: center;
  background-color: #fff;

 /* Media query para tablet */
 @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }

  /* Media query para mobile */
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0.5rem; 
    gap: 0.5rem;
  }
`;
