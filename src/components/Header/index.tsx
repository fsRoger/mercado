"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useCartStore } from "@/store/cart";
import Cart from "../Cart";
import {
  Container,
  LogoContainer,
  Title,
  Sub,
  IconContainer,
  IconText,
} from "./styles";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartCount = useCartStore((state) => state.count());

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <Container>
      <LogoContainer>
        <Title>Mercado</Title>

      </LogoContainer>
      <IconContainer onClick={toggleCart}>
        <Image src="/icon.svg" alt="Icon" width={19} height={18} />
        <IconText>{cartCount}</IconText>
      </IconContainer>
      {isCartOpen && <Cart onClose={toggleCart} />}
    </Container>
  );
};

export default Header;
