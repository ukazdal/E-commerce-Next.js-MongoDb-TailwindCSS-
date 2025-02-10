import UseCart from "@/hooks/useCart";
import { ProductCardProps } from "../detail/Types.Product";
import Image from "next/image";

const CartInfo = () => {
  const { prdCard } = UseCart();

  const prdCardTotal = prdCard.reduce(
    (acc: number, item: ProductCardProps) => acc + item.quantity * item.price,
    0
  );

  const productCargo = 20;
  return (
    <div className="p-5">
      <div>
        {prdCard.map((product, index) => (
          <div
            key={index}
            className="grid grid-cols-2 gap-4 border-b last:border-b-0 py-4"
          >
            <div className="col-span-2 md:col-span-1 flex items-center gap-4">
              <Image
                src={product.image}
                alt={product.name}
                width={60}
                height={60}
                className="rounded-md max-w-16 max-h-16 w-full h-full object-cover"
              />
            </div>
            <div className="col-span-2 md:col-span-1 w-full flex items-center justify-end gap-x-5">
              <h5>{product.name}</h5>
              <h6>${product.price}</h6>
            </div>
          </div>
        ))}
      </div>

      <ul className="bg-gray-50 mt-2 p-2 rounded-lg">
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
