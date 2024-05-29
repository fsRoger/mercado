import { create } from "zustand";

interface Product {
  id: number;
  name: string;
  price: number;
  qty_stock: number;
  // brand: string;
  // createdAt: string;
  // updatedAt: string;
}

interface CartItem extends Product {
  count: number;
  quantity: number;
}

type CartStore = {
  cart: CartItem[];
  count: () => number;
  add: (product: Product) => void;
  remove: (idProduct: number) => void;
  increaseQuantity: (idProduct: number) => void;
  decreaseQuantity: (idProduct: number) => void;
  removeAll: () => void;
};

export const useCartStore = create<CartStore>((set, get) => ({
  cart: [],
  count: () => {
    const { cart } = get();
    if (cart.length)
      return cart.map((item) => item.count).reduce((prev, curr) => prev + curr);
    return 0;
  },
  add: (product: Product) => {
    const { cart } = get();
    const updatedCart = updateCart(product, cart);
    set({ cart: updatedCart });
  },
  remove: (idProduct: number) => {
    const { cart } = get();
    const updatedCart = removeCart(idProduct, cart);
    set({ cart: updatedCart });
  },
  increaseQuantity: (idProduct: number) => {
    const { cart } = get();
    const updatedCart = increaseProductQuantity(idProduct, cart);
    set({ cart: updatedCart });
  },
  decreaseQuantity: (idProduct: number) => {
    const { cart } = get();
    const updatedCart = decreaseProductQuantity(idProduct, cart);
    set({ cart: updatedCart });
  },
  removeAll: () => set({ cart: [] }),
}));

function updateCart(product: Product, cart: CartItem[]): CartItem[] {
  const updatedCart = [...cart];
  const existingItemIndex = updatedCart.findIndex(
    (item) => item.id === product.id
  );
 
  if (existingItemIndex !== -1) {
    updatedCart[existingItemIndex].count += 1;
    updatedCart[existingItemIndex].quantity += 1;
  } else {
    updatedCart.push({ ...product, count: 1, quantity: 1 });
  }

  return updatedCart;
}

function increaseProductQuantity(
  idProduct: number,
  cart: CartItem[]
): CartItem[] {
  return cart.map((item) => {
    if (item.id === idProduct) {
      return { ...item, count: item.count + 1, quantity: item.quantity + 1 };
    }
    return item;
  });
}

function decreaseProductQuantity(
  idProduct: number,
  cart: CartItem[]
): CartItem[] {
  return cart.map((item) => {
    if (item.id === idProduct) {
      const newCount = Math.max(item.count - 1, 1);
      const newQuantity = Math.max(item.quantity - 1, 1);
      return { ...item, count: newCount, quantity: newQuantity };
    }
    return item;
  });
}

function removeCart(idProduct: number, cart: CartItem[]): CartItem[] {
  return cart.filter((item) => item.id !== idProduct);
}
