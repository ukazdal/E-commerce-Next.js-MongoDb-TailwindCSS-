import { ProductCardProps } from "../detail/Types.Product";
import { FiPlus } from "react-icons/fi";
import { AiOutlineMinus } from "react-icons/ai";

interface CounterProps {
  productCard: ProductCardProps;
  increaseFunc: () => void;
  decreaseFunc: () => void;
}

const Counter: React.FC<CounterProps> = ({
  productCard,
  increaseFunc,
  decreaseFunc,
}) => {
  const buttonStyle =
    "flex items-center justify-center h-6 w-6 bg-white text-md border rounded-md cursor-pointer";

  return (
    <div className="flex items-center gap-x-4 p-2 border rounded-md bg-slate-50">
      <div className={buttonStyle} onClick={decreaseFunc}>
        <AiOutlineMinus size={12} />
      </div>
      <div className="text-xl font-medium">{productCard?.quantity}</div>
      <div className={buttonStyle} onClick={increaseFunc}>
        <FiPlus size={12} />
      </div>
    </div>
  );
};

export default Counter;
