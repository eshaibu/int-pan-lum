import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  addItemToCart,
  CartItemType,
  CartType,
  changeCartCurrency,
  defaultCart,
  getCartStorage,
  removeCartItem,
  updateCartItemQty,
  UpdateCartType,
} from '../utils/cart';

type CartContextType = {
  cartCurrency: string;
  cartItems: { [id: string]: CartItemType };
  setCurrency: (currency: string) => void;
  addItem: (productId: number) => void;
  updateItemQty: (productId: number, type: UpdateCartType) => void;
  removeItem: (productId: number) => void;
};

type Props = {
  children: React.ReactNode;
};

export const CartContext = createContext<CartContextType>({} as CartContextType);

export const CartContextProvider = ({ children }: Props) => {
  const [cart, setCart] = useState<CartType>(defaultCart);

  const refreshCart = () => {
    const storageCart = getCartStorage();
    setCart(() => storageCart);
  };

  useEffect(() => {
    refreshCart();
  }, []);

  const setCurrency = (currency: string) => {
    changeCartCurrency(currency);
    refreshCart();
  };

  const addItem = (productId: number) => {
    addItemToCart({ productId, quantity: 1 });
    refreshCart();
  };

  const updateItemQty = (productId: number, type: UpdateCartType) => {
    updateCartItemQty(productId, type);
    refreshCart();
  };

  const removeItem = (productId: number) => {
    removeCartItem(productId);
    refreshCart();
  };

  return (
    <CartContext.Provider
      value={{
        cartCurrency: cart.currency,
        cartItems: cart.items,
        setCurrency,
        addItem,
        updateItemQty,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCartContext must be used within CartContextProvider');
  }
  return context;
};
