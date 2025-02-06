"use client";

import UseCart from "@/hooks/useCart";
import Container from "../container/Container";
import Button from "../button/Button";
import { CiTrash } from "react-icons/ci";

const CartClient = () => {
  const { prdCard } = UseCart();

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
                    <img
                      src={product.image}
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
                        onClick={() => {}}
                        xsmall
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-6 relative">
          <div className="sticyk top-2 ">
            <span>
              total fiyat ödemeler felan bu alanda gözükecek compoenen yapılacak
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CartClient;
