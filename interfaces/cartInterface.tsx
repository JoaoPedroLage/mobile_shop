import { Product } from './productInterface'

export type CartContextType = {
  cart: Product[]; 
  selectedProduct: Product | null; 
  addToCart: (product: Product) => void; 
  removeFromCart: (productId: number) => void; 
  selectProduct: (product: Product) => void;
  updateQuantityFromCart: (productId: number, updateQuantity: boolean) => void;
};