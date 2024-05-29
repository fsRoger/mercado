import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  background-color: #fff;
  color: #121e2b;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05), 0px 2px 8px 0px #00000022;
  width: 100%;
  max-width: 218px;
  height: 260px;
  

  &:hover {
  border: solid 1px #f7bc05;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05), 0px 2px 8px 0px #00000022;
  transform: scale(1.1);
  transition: 0.5s;
}
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  width: 100%;

  span{
    
    color: red;
    font-size: 12px;
    font-weight: 400;
  }
`;

export const Title = styled.h4`

  font-size: 14px;  
  font-weight: 600;
  letter-spacing: -0.5px;
  height: 181px;
  
`;

export const Price = styled.span`
position: relative;
padding: 10px;
text-align: center;

  border-radius: 5px;
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  background-color: #ecf6bb;
  color: #121e2b;
`;


export const BuyButton = styled.div`
  height: 32px;
  background-color: #2cbf59;
  width: 100%;
  border-radius: 0 0 8px 8px;
  margin-bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-weight: 600;
  bottom: 0px;
  margin-top: auto;

  &:hover {
    cursor: pointer;
    background-color: #1C7737;
    transition: 0.4s;
    text-transform: 
   
  }
`;
