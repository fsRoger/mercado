"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCartStore } from "@/store/cart";
import {
  CartContainer,
  CartHeader,
  CartTitle,
  CloseButton,
  CartContent,
  ProductCard,
  ProductPrice,
  ProductInfo,
  ProductActions,
  ProductName,
  QuantityButton,
  CloseButton2,
  CartFooter,
  TotalPrice,
  CheckoutButton,
  Formulary,
} from "./styles";

const Cart = ({ onClose }: any) => {
  const { cart, remove, increaseQuantity, decreaseQuantity } = useCartStore();
  const [formData, setFormData] = useState({
    client_name: "",
    delivery_date: "",
  });
  const [total, setTotal] = useState(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    try {
      const dataToSend = {
        ...formData,
        products: cart.map(product => ({
          id: product.id,
          quantity: product.quantity,
          // Adicione outros campos do produto conforme necessário
        }))
      };

      const response = await axios.post("/v1/shopping", dataToSend);
      if (response.data.success) {
        setSuccess("Compra realizada com sucesso!");
        // Limpar o carrinho após a compra bem-sucedida
        clearCart();
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
      setError("Erro ao enviar os dados. Por favor, tente novamente.");
    }
  };

  const clearCart = () => {
    setFormData({
      client_name: "",
      delivery_date: "",
      products: "",
    });
    setTotal(0);
    setSuccess("");
    setError("");
    onClose();
  };

  useEffect(() => {
    const newTotal = cart.reduce(
      (acc, curr) => acc + Number(curr.price) * curr.quantity,
      0
    );
    setTotal(newTotal);
  }, [cart]);

  const handleRemoveItem = (id: number) => {
    remove(id);
  };

  const handleIncreaseQuantity = (id: number) => {
    increaseQuantity(id);
  };

  const handleDecreaseQuantity = (id: number) => {
    decreaseQuantity(id);
  };

  return (
    <CartContainer>
      <CartHeader>
        <CartTitle>Carrinho de Compras</CartTitle>
        <CloseButton onClick={onClose}>X</CloseButton>

      </CartHeader>
      <div>
        <Formulary>
          <input
            type="text"
            placeholder="Nome"
            name="client_name"
            value={formData.client_name}
            onChange={handleFormChange}
          />
          <input
            type="date"
            placeholder="Data de entrega"
            name="delivery_date"
            value={formData.delivery_date}
            onChange={handleFormChange}
          />
        </Formulary>
      </div>
      <CartContent>
        {cart.map((product) => (
          <ProductCard key={product.id}>
            <ProductInfo>
              <h5>estoque:</h5>
              <span>{product.qtyStock}</span>
              <ProductName>{product.name}</ProductName>
            </ProductInfo>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>Qtd:</p>
              <ProductActions>
                <QuantityButton
                  onClick={() => handleDecreaseQuantity(product.id)}
                >
                  -
                </QuantityButton>
                <span>{product.quantity}</span>
                <QuantityButton
                  onClick={() => handleIncreaseQuantity(product.id)}
                >
                  +
                </QuantityButton>
              </ProductActions>
            </div>
            <ProductPrice>R$ {Number(product.price)}</ProductPrice>
            <CloseButton2 onClick={() => handleRemoveItem(product.id)}>
              X
            </CloseButton2>
          </ProductCard>
        ))}
      </CartContent>
      <CartFooter>
        <TotalPrice>
          <p>Total: </p>
          <p>R${total.toFixed(2)}</p>
        </TotalPrice>
        <CheckoutButton onClick={handleSubmit}>Finalizar Compra</CheckoutButton>
      </CartFooter>
    </CartContainer>
  );
};

export default Cart;
