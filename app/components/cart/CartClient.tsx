"use client";

import UseCart from "@/hooks/useCart";
import Container from "../container/Container";
import Button from "../button/Button";
import { CiTrash } from "react-icons/ci";
import Image from "next/image";
import CartInfo from "./CartInfo";

const CartClient = () => {
  const { prdCard, removeCart, removeAllCart } = UseCart();

  console.log(prdCard, "prdCard");
  if (!prdCard || prdCard.length == 0) {
    return <>Sepetinizde ürün bulunmuyor.</>;
  }

  return (
    <Container>
      <div className="grid grid-cols-12 gap-x-5">
        <div className="col-span-6">
          {" "}
          <div className="">
            <div>
              <h2>Sepetim</h2>
              <p>(Ürün adet 2)</p>
            </div>
            <div>
              {prdCard.map((product, index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 gap-4 border-b py-4"
                >
                  <div className="col-span-2 md:col-span-1 flex items-center gap-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={75}
                      height={75}
                      className="rounded-lg p-1 border"
                    />
                    <h3>{product.name}</h3>
                  </div>
                  <div className="col-span-2 md:col-span-1 flex items-center justify-between">
                    <span>{product.quantity}</span>
                    <div className="flex items-center gap-4">
                      {product.price}
                      <Button
                        icon={<CiTrash size={24} />}
                        onClick={() => removeCart(product)}
                        xsmall
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button onClick={() => removeAllCart()} />
          </div>
        </div>
        <div className="col-span-6 relative">
          <CartInfo />
        </div>
      </div>
    </Container>
  );
};

export default CartClient;
