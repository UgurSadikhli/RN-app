import React, { createContext, useContext } from "react";
import { useAuth } from "./AuthContext";
import { useUser } from "./UserContext";
import { Users } from "../data/Users";

type Product = {
  title: string;
  price: number;
  country: string;
  description: string;
  isFavorite: false;
  isInCart: false;
  img: undefined;
  isPiece: false;
};

type CartType = {
  email: string;
  cart?: any[];
  addToCart?: (product: Product) => void;
  removeFromCart?:(product: Product) => void;
};

type CartContextType = {
  cartObj: CartType;
  addToCart?: (product: Product) => void;
  removeFromCart?:(product: Product) => void;
};

export const CartContext = createContext<CartContextType>({
  cartObj: {
    email: "",
    cart: [],
  },
  addToCart: (product: Product) => {},
  removeFromCart:(product: Product) => {},
});

export const useCart = () => {
  return useContext(CartContext);
};

interface CartProviderProps {
  children: React.ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({
  children,
}: CartProviderProps) => {
  const userData = useAuth();
  const user = userData.getUser(userData.email, userData.password);
  const cartObj = userData.getCart(userData.email, userData.password);

  const addToCart = (product: Product) => {
    const cart = cartObj.cart;
    const productExists = cart.find(
      (item: Product) => item.title === product.title
    );
    const a = productExists ? true : false;
    if (a) {
      window.alert("This product is already in the cart.");
      return;
    }
    cart.push(product);

    let index = null;
    Users.forEach((u, i) =>
      u.email == cartObj.email ? (index = i) : (index = null)
    );

    if (index != null) {
      Users[index].cart = cart;
    }
  };
  const removeFromCart = (product: Product) => {
    const cart = cartObj.cart;
    const index = cart.findIndex((item: Product) => item.title === product.title);
   
    if (cart.some((item: Product) => item.title === product.title)) {
      const index = cart.findIndex((item: Product) => item.title === product.title);
      if (index !== -1) {
        cart.splice(index, 1);
      }
    }

    let userIndex = null;
    Users.forEach((u, i) =>
      u.email == cartObj.email ? (userIndex = i) : (userIndex = null)
    );

    if (userIndex != null) {
      Users[userIndex].cart = cart;
    }
  };
  const contextValue = { cartObj, addToCart,removeFromCart };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
