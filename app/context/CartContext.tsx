import React, { createContext, useContext, useState } from 'react';

import { Product } from '../../interfaces/productInterface';
import { CartContextType } from '../../interfaces/cartInterface';

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC | any = (props: any) => {
  const { children }: any = props;
  const [cart, setCart] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const addToCart = (product: Product) => {
    // Check if the `quantity` property already exists in the product
    const hasQuantity = product.hasOwnProperty("quantity");
  
    // Create the object with `quantity` equal to 1 only if the property does not exist
    const cartItem = hasQuantity ? product : { ...product, quantity: 1 };
  
    // Add the item to the cart
    setCart([...cart, cartItem]);
  };

  const updateQuantityFromCart = (productId: number, updateQuantity: boolean) => {
    // Find the product index in the cart
    const productIndex = cart.findIndex((item) => item.id === productId);

    // If the product is not found
    if (productIndex === -1) {
      console.warn(`Produto com ID ${productId} não encontrado no carrinho.`);
    }

    // If the product quantity is greater than 1, just decrease the quantity
    if (!updateQuantity && Number(cart[productIndex].quantity) >= 1) {

      const updatedCart = [...cart];
      let updatedQuantity = typeof cart[productIndex].quantity === 'number'
        ? cart[productIndex].quantity
        : 0;
      updatedQuantity -= 1;
      updatedCart[productIndex].quantity = updatedQuantity;
      setCart(updatedCart);
    }

    // If the quantity is 1, remove the product from the cart
    if (!updateQuantity && Number(cart[productIndex].quantity) === 0) {

      removeFromCart(productId);
    }

    // If the product quantity is greater than 1, just increase the quantity
    if (updateQuantity) {

      const updatedCart = [...cart];
      let updatedQuantity = typeof cart[productIndex].quantity === 'number'
        ? cart[productIndex].quantity
        : 0;
      updatedQuantity += 1;
      updatedCart[productIndex].quantity = updatedQuantity;
      setCart(updatedCart);
    }

    // // Update quantity based on updateQuantity flag
    // const updatedCart = [...cart];
    // updatedCart[productIndex].quantity = updateQuantity
    //   ? cart[productIndex].quantity + (updateQuantity ? 1 : -1)
    //   : cart[productIndex].quantity;

    // // Set the updated cart state
    // setCart(updatedCart);
  };

  const removeFromCart = (productId: number) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const selectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        selectedProduct,
        addToCart,
        removeFromCart,
        selectProduct,
        updateQuantityFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};