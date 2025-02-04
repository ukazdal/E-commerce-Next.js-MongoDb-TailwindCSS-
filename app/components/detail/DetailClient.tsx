"use client";

import Image from "next/image";
import Container from "../container/Container";

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

const DetailClient = ({ product }: { product: Product }) => {
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
        </div>
      </div>
    </Container>
  );
};

export default DetailClient;
