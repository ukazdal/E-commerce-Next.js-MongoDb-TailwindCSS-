"use client";
import { ProductCardProps } from "@/app/components/detail/Types.Product";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

interface CartContextProps {
  productsCartQty: number;
  prdCard: ProductCardProps[] | null;
  addToBasket: (product: ProductCardProps) => void;
}

const CartContext = createContext<CartContextProps | null>(null);

interface Props {
  children?: React.ReactNode;
}

export const CartContextProvider = (props: Props) => {
  const [productsCartQty, setProductsCartQty] = useState(0);
  const [prdCard, setPrdCard] = useState<ProductCardProps[]>([]);

  useEffect(() => {
    const getItem: any = localStorage.getItem("prdCard");
    const getItemParse: ProductCardProps[] | null = JSON.parse(getItem);
    setPrdCard(getItemParse);
  }, []);

  const addToBasket = useCallback((product: ProductCardProps) => {
    setPrdCard((prev) => {
      let updatedCart;
      if (prev) {
        updatedCart = [...prev, product];
      } else {
        updatedCart = [product];
      }
      localStorage.setItem("prdCard", JSON.stringify(updatedCart));
      return updatedCart;
    });
  }, []);

  const value = {
    productsCartQty,
    addToBasket,
    prdCard,
  };

  return <CartContext.Provider value={value} {...props} />;
};

const UseCart = () => {
  const context = useContext(CartContext);
  if (context == null) {
    throw new Error("CartContext hatası var");
  }
  return context;
};

export default UseCart;
