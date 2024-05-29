import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f7bc05;
  height: 101px;
`;

export const Title = styled.h1`
  color: red;
  font-size: 45px;
  font-weight: 600;
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
