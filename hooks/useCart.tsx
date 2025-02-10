"use client";
import { ProductCardProps } from "@/app/components/detail/Types.Product";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";

interface CartContextProps {
  productsCartQty: number;
  prdCard: ProductCardProps[];
  addToBasket: (product: ProductCardProps) => void;
  removeCart: (product: ProductCardProps) => void;
  removeAllCart: () => void;
}

const CartContext = createContext<CartContextProps | null>(null);

interface Props {
  children?: React.ReactNode;
}

export const CartContextProvider = (props: Props) => {
  const [productsCartQty] = useState(0);
  const [prdCard, setPrdCard] = useState<ProductCardProps[]>([]);

  useEffect(() => {
    const getItem: string | null = localStorage.getItem("prdCard");
    const getItemParse: ProductCardProps[] = getItem ? JSON.parse(getItem) : [];
    setPrdCard(getItemParse);
  }, []);

  const removeAllCart = useCallback(() => {
    setPrdCard([]);
    toast.success("Delete to cart");
    localStorage.setItem("prdCard", JSON.stringify(null));
  }, []);

  const addToBasket = useCallback((product: ProductCardProps) => {
    setPrdCard((prev) => {
      let updatedCart;
      if (prev) {
        updatedCart = [...prev, product];
      } else {
        updatedCart = [product];
      }
      toast.success("Added to cart");
      localStorage.setItem("prdCard", JSON.stringify(updatedCart));
      return updatedCart;
    });
  }, []);

  const removeCart = useCallback(
    (product: ProductCardProps) => {
      if (prdCard) {
        const filteredProducts = prdCard.filter(
          (cartItem) => cartItem.id !== product.id
        );
        setPrdCard(filteredProducts);
        toast.success("Remove to cart");
        localStorage.setItem("prdCard", JSON.stringify(filteredProducts));
      }
    },
    [prdCard]
  );

  const value = {
    productsCartQty,
    addToBasket,
    prdCard,
    removeCart,
    removeAllCart,
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
