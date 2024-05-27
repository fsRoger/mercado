"use client";
import { useCartStore } from "@/store/cart";
import {
  Card,
  Container,
  Title,
  Price,
  BuyButton,

} from "./styles";

const ProductItem = ({ product }: any) => {
  const addToCart = useCartStore((state) => state.add);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Card>
      <div style={{ display: "flex", justifyContent: "center" }}>

      </div>

      <Container>
        <span>{product.id}</span>
        <Title>{product.name}</Title>
        <span>Estoque: {parseFloat(product.qtyStock).toFixed(0)}</span>
      </Container>
      <Price>R$ {parseFloat(product.price).toFixed(2)}</Price>


      <BuyButton onClick={handleAddToCart}>COMPRAR</BuyButton>
    </Card>
  );
};

export default ProductItem;
