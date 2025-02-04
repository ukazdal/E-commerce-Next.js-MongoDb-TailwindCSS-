import { ProductCardProps } from "../detail/DetailClient";

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
    "flex items-center justify-center h-8 w-8 bg-blue-500 text-white text-lg rounded-md cursor-pointer";

  return (
    <div className="flex items-center gap-x-4 p-2 ">
      <div className={buttonStyle} onClick={decreaseFunc}>
        -
      </div>
      <div className="text-xl font-medium">{productCard?.quantity}</div>
      <div className={buttonStyle} onClick={increaseFunc}>
        +
      </div>
    </div>
  );
};

export default Counter;
