"use client";
import Image from "next/image";
import React, { useState } from "react";

interface ProductCardProps {
  id: string;
  title: string;
  description?: string;
  badges?: {
    new: boolean;
  };
  stock: number;
  images: string[];
  brand?: string;
  price: number;
  discounted_price?: number;
  discount_rate?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  description,
  badges,
  stock,
  images,
  brand,
  price,
  discounted_price,
  discount_rate,
}) => {
  const [hoveredImage, setHoveredImage] = useState(images[0]); // Varsayılan olarak ilk resmi göster

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (images.length < 2) return; // Eğer ikinci resim yoksa değiştirme

    const { clientX, currentTarget } = event;
    const { left, width } = currentTarget.getBoundingClientRect();
    const midpoint = left + width / 2;

    // Mouse sol taraftaysa ilk resmi, sağ taraftaysa ikinci resmi göster
    setHoveredImage(clientX < midpoint ? images[0] : images[1]);
  };

  return (
    <div
      key={id}
      className="relative group duration-300 border  rounded-md"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoveredImage(images[0])} // Mouse çıkınca ilk resme dön
    >
      <div className="relative p-2">
        {badges?.new && (
          <div className="absolute top-2 left-2 z-50 bg-red-500 text-white text-xs font-medium rounded-md py-1 px-2">
            New
          </div>
        )}

        {stock === 0 && (
          <div className="absolute top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-50 rounded-md">
            <p className="text-white text-sm font-bold bg-neutral-600 p-2 rounded-md">
              Out of Stock
            </p>
          </div>
        )}

        <div className="relative w-full h-[200px] flex">
          {images.length >= 2 ? (
            <div className="w-full h-full overflow-hidden">
              <Image
                src={hoveredImage}
                alt={title}
                className="w-full h-full object-cover duration-300"
                width={335}
                height={200}
              />
            </div>
          ) : (
            <Image
              src={images[0]}
              alt={title}
              className="w-full h-full object-cover"
              width={335}
              height={200}
            />
          )}
        </div>

        {/* Ürün Bilgileri */}
        <div className="mt-2">
          <h2 className="text-sm font-semibold">{title}</h2>
          <p className="text-xs my-1">{description}</p>
          <p className="text-xs text-gray-500 my-2">{brand}</p>
          <div className="flex items-center gap-x-2">
            <p className="text-base font-bold">${price}</p>
            {discounted_price && (
              <p className="text-sm line-through text-gray-400">
                ${discounted_price}
              </p>
            )}

            {discount_rate && (
              <p className="text-sm text-green-500">-{discount_rate}%</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
