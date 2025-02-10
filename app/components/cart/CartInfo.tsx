import UseCart from "@/hooks/useCart";
import { ProductCardProps } from "../detail/Types.Product";

const CartInfo = () => {
  const { prdCard } = UseCart();

  const prdCardTotal = prdCard.reduce(
    (acc: number, item: ProductCardProps) => acc + item.quantity * item.price,
    0
  );

  const productCargo = 20;
  return (
    <div className="shadow-lg p-4">
      <ul className="bg-gray-200 p-2 rounded-lg">
        <li className="flex justify-between border-b border-gray-600 py-3">
          <div>Price</div>
          <div>${prdCardTotal}</div>
        </li>
        <li className="flex justify-between border-b border-gray-600 py-3">
          <div>Shipping </div>
          <div>${productCargo}</div>
        </li>
        <li className="flex justify-between py-3">
          <div>Total Price</div>
          <div>${prdCardTotal + productCargo}</div>
        </li>
      </ul>
    </div>
  );
};

export default CartInfo;
