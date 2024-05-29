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
      <div >
      </div>
      <Container>
        <Title>{product.name}</Title>
        <span>Estoque: {product.qtyStock}</span>
      </Container>
      <Price>R$ {parseFloat(product.price).toFixed(2)}</Price>
      <BuyButton onClick={handleAddToCart}>COMPRAR</BuyButton>
    </Card>
  );
};

export default ProductItem;
