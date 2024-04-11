export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string | any;
  rating: {
    rate: number;
    count: number;
  };
  quantity: number;
}
