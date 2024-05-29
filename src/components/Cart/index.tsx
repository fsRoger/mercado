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
    itemShoppings: [],
  });
  const [total, setTotal] = useState(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "delivery_date") {
      // Obter a data atual
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = String(currentDate.getMonth() + 1).padStart(2, '0');
      const currentDay = String(currentDate.getDate()).padStart(2, '0');
      const formattedCurrentDate = `${currentYear}-${currentMonth}-${currentDay}`;

      // Comparar a data inserida com a data atual
      if (value < formattedCurrentDate) {
        alert("A data de entrega deve ser a partir de hoje.");
        return;
      }
    }

    // Atualizar o estado do formulário
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = async () => {
    try {
      const data = {
        client_name: formData.client_name,
        delivery_date: formData.delivery_date,
        itemShoppings: cart.map(product => ({
          productId: product.id,
          quantity: product.quantity,
          price: product.price

        }))
      };
      console.log("Dados a serem enviados para o backend:", data);

      const response = await axios.post("http://localhost:3003/v1/shopping", data);

      if (response.data.success) {
        alert("Compra realizada com sucesso!");
        setSuccess("Compra realizada com sucesso!");
        clearCart();
      } else {
        alert(response.data.message);
        setError(response.data.message);
      }
    } catch (error) {

      alert("Erro ao enviar os dados. Por favor, tente novamente!");
      setError("Erro ao enviar os dados. Por favor, tente novamente.");
    }
  };

  const clearCart = () => {
    setFormData({
      client_name: "",
      delivery_date: "",
      itemShoppings: [],
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
          <label htmlFor="delivery_date"><h2>Nome do Cliente</h2></label>
          <input
            type="text"
            placeholder="Digite seu nome"
            name="client_name"
            value={formData.client_name}
            onChange={handleFormChange}
          />
          <label htmlFor="delivery_date"><h2>Data de Entrega</h2></label>
          <input
            type="date"
            placeholder="Data de Entrega"
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
              <h5>estoque: <span>{product.qty_stock}</span></h5>
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
