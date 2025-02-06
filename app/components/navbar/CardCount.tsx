"use client";
import UseCart from "@/hooks/useCart";
import { BsFillBasket3Fill } from "react-icons/bs";

const CardCount = () => {
  const { prdCard } = UseCart();

  return (
    <div className="relative">
      <BsFillBasket3Fill size={22} />
      <div className="absolute -top-1 -right-2 bg-white rounded-full h-4 w-4 text-gray-800 flex items-center justify-center text-xs font-medium z-50">
        {prdCard?.length}
      </div>
    </div>
  );
};

export default CardCount;
