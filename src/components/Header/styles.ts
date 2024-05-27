import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #121e2b;
  height: 101px;
`;

export const Title = styled.h1`
  color: white;
  font-size: 40px;
  font-weight: 600;
`;

export const Sub = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 300;
  margin-top: 10px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  height: 45px;
  width: 90px;
  gap: 14px;
  margin-right: 20px;
`;

export const IconText = styled.span`
  height: 22px;
  width: 13px;
  font-weight: 700;
`;
