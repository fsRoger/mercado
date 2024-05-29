import styled from "styled-components";

export const CartContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  width: 486px;
  height: 100%;
  background-color:#12212c;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05), 0px 2px 8px 0px #00000022;
  z-index: 999;

  /* Adicionando media query para dispositivos móveis */
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const CartHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 40px;
`;

export const CartTitle = styled.h2`
  color: #f7bc05;
  font-size: 28px;
  font-weight: 700;
  margin-right: auto;
 
`;

export const CloseButton2 = styled.button`
  background: red;
  border: none;
  color: #ffffff;
  font-size: 20px;
  cursor: pointer;
  font-weight: 400;
  border-radius: 50%;
  position: absolute;
  top: -7px;
  right: -7px;

  &:hover {
    color: #fff;
    background-color: red;
    transition: 0.4s;
    transform: scale(1.1);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05), 0px 2px 8px 0px #00000022;
  }
`;

export const CloseButton = styled.button`
  background: red;
  border: none;
  color: #ffffff;
  font-size: 26px;
  cursor: pointer;
  width: 38px;
  height: 38px;
  font-weight: 400;
  border-radius: 50%;

  &:hover {
    background-color: red;
    transition: 0.4s;
    transform: scale(1.1);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05), 0px 2px 8px 0px #00000022;
  }
`;

export const CartContent = styled.div`
  flex: 1;
  padding: 40px;
  overflow-y: auto;
  margin-top: 20px;

`;

export const ProductCard = styled.div`
  align-items: flex-start;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 20px;
  margin-bottom: 20px;
  width: 100%;
  height: 101px;
  border-radius: 8px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05), 0px 2px 8px 0px #00000022;
  gap: 20px;
  position: relative;
  display: flex;
`;


export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;

  h5{
    padding-top: 4px;
  }
`;

export const ProductName = styled.span`
  font-size: 13px;
  font-weight: 400;
  color: #000000;
  margin-bottom: auto;
`;

export const ProductPrice = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #000000;
  margin-top: auto;
`;

export const ProductActions = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: flex-start;
`;

export const QuantityButton = styled.button`
  background: none;
  border: none;
  margin: 0 5px;
  font-size: 18px;
  cursor: pointer;
`;

export const CartFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TotalPrice = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 28px;
  font-weight: 700;
  color: #fff;
  width: 100%;
  padding: 40px;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  height: 97px;
  background-color: #2cbf59;
  color: #ffffff;
  font-size: 28px;
  font-weight: 700;

  border: none;
  cursor: pointer;

  &:hover {
    background-color: #1C7737;
    transition: 0.2s;
   
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05), 0px 2px 8px 0px #00000022;
  }
`;

export const Formulary = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  gap: 10px;
  margin: 10px;


  input{
    width: 100%;
    height: 50px;
    border-radius: 8px;
    padding: 0 10px;
    margin-bottom: 10px;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #2c2c2c;
    font-size: 14px;
    font-weight: 400;

    h2{
      color: #fff;
      font-size: 27px;
      font-weight: 700;
      margin-right: 40px;
     
    }
  }
`;

  
