"use client";

import Image from "next/image";
import Container from "../container/Container";
import Counter from "../counter/Counter";
import { useEffect, useState } from "react";
import Button from "../button/Button";
import Tab from "../tab/Tab";
import Comment from "../tabPanel/Comment";
import ProdcutInfo from "../tabPanel/ProdcutInfo";
import Installment from "../tabPanel/Installment";
import { Product, ProductCardProps } from "./Types.Product";
import UseCart from "@/hooks/useCart";

const DetailClient = ({ product }: { product: Product }) => {
  const { productsCartQty, addToBasket, prdCard } = UseCart();
  const [displayButton, setDisplayButton] = useState(false);

  const [productCard, setProductCard] = useState<ProductCardProps>({
    id: product.id.toString(),
    name: product.title,
    description: product.description,
    price: product.price,
    image: product.images[0],
    quantity: 1,
    inStock: product.stock,
  });

  console.log(productsCartQty, "productsCartQty");
  console.log(prdCard, "prdCard");

  useEffect(() => {
    const controlDisplay: number =
      prdCard?.findIndex((cart) => cart.id == productCard.id) ?? -1;
    setDisplayButton(controlDisplay > -1);
  }, [prdCard, productCard]);

  const increaseFunc = () => {
    if (productCard.quantity == 10) return;
    setProductCard((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
  };

  const decreaseFunc = () => {
    if (productCard.quantity == 1) return;
    setProductCard((prev) => ({ ...prev, quantity: prev.quantity - 1 }));
  };

  const tabData = [
    {
      title: "Ürün Detay",
      content: <ProdcutInfo prd={product} />,
      link: "tab1",
    },
    {
      title: "Yorumlar",
      content: <Comment prd={product} />,
      link: "tab2",
    },
    {
      title: "Taksit Tablosu",
      content: <Installment />,
      link: "tab3",
    },
  ];

  return (
    <>
      <Container className="mb-10">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-6">
            {product.images.map((image: string) => (
              <Image
                key={image}
                src={image}
                alt={product.title}
                width={500}
                height={500}
                className="w-full h-[300px] object-cover"
              />
            ))}
          </div>
          <div className="col-span-12 md:col-span-6">
            <h1 className="text-2xl font-semibold">{product.title}</h1>
            <p className="text-sm my-2">{product.description}</p>
            <p className="text-sm text-gray-500 my-2">{product.brand}</p>
            <div className="flex items-center justify-between gap-x-2">
              <div>
                {product.discounted_price ? (
                  <div className="flex items-center gap-x-2">
                    <p className="text-sm line-through text-gray-400">
                      ${product.price}
                    </p>
                    <p className="text-base font-bold">
                      ${product.discounted_price}
                    </p>
                  </div>
                ) : (
                  <p className="text-base font-bold">${product.price}</p>
                )}
              </div>
              <div className="flex items-center gap-x-2">
                <div>Comments onclick trigger to commnts tab</div>
                <div> / ranting</div>
              </div>
            </div>
            <div>
              {product.stock > 0 ? (
                <p className="text-green-500">In Stock</p>
              ) : (
                <p className="text-red-500">Out of Stock</p>
              )}
            </div>
            <Counter
              increaseFunc={increaseFunc}
              decreaseFunc={decreaseFunc}
              productCard={productCard}
            />
            {displayButton ? (
              <>
                {product.stock > 0 ? (
                  <Button
                    small
                    text="Sepete Ekli"
                    onClick={() => addToBasket(productCard)}
                    outline
                  />
                ) : (
                  <Button small text="Stokta Yok" onClick={() => {}} diseable />
                )}
              </>
            ) : (
              <>
                {product.stock > 0 ? (
                  <Button
                    small
                    text="Sepete Ekle"
                    onClick={() => addToBasket(productCard)}
                    outline
                  />
                ) : (
                  <Button
                    small
                    text="Stokta Yok"
                    onClick={() => {}}
                    diseable
                    outline
                  />
                )}
              </>
            )}

            {/* {product.stock > 0 ? (
              <Button
                small
                text="Sepete Ekle"
                onClick={() => addToBasket(productCard)}
                outline
              />
            ) : (
              <Button
                small
                text="Stokta Yok"
                onClick={() => {}}
                diseable
                outline
              />
            )} */}
          </div>
        </div>
      </Container>

      <Tab data={tabData} />
    </>
  );
};

export default DetailClient;
