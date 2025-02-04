"use client";

import Image from "next/image";
import Container from "../container/Container";
import Counter from "../counter/Counter";
import { useState } from "react";

interface Product {
  id: number;
  title: string;
  brand: string;
  description: string;
  price: number;
  discounted_price?: number;
  discount_rate?: number;
  stock: number;
  badges: { new: boolean };
  images: string[];
}

export type ProductCardProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  inStock: number;
};

const DetailClient = ({ product }: { product: Product }) => {
  const [productCard, setProductCard] = useState<ProductCardProps>({
    id: product.id.toString(),
    name: product.title,
    description: product.description,
    price: product.price,
    image: product.images[0],
    quantity: 1,
    inStock: product.stock,
  });

  const increaseFunc = () => {
    if (productCard.quantity == 10) return;
    setProductCard((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
  };

  const decreaseFunc = () => {
    if (productCard.quantity == 1) return;
    setProductCard((prev) => ({ ...prev, quantity: prev.quantity - 1 }));
  };

  return (
    <Container>
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
            <div>ranting</div>
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
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">
            Add To Card
          </button>
        </div>
      </div>
    </Container>
  );
};

export default DetailClient;
