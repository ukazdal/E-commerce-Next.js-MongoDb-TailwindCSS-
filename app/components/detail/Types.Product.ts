export interface Review {
  id: number;
  user: string;
  comment: string;
  rating: number;
}

export interface User {
  id: number;
  name: string;
  avatar: string;
}

export interface Product {
  id: number;
  title: string;
  brand: string;
  description: string;
  price: number;
  longDescription: string;
  discounted_price?: number;
  discount_rate?: number;
  stock: number;
  badges: { new: boolean };
  images: string[];
  reviews: Review[];
  user: User;
}

export type ProductCardProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  inStock: number;
};
