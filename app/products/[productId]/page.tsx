"use client";

import { useParams } from "next/navigation";
import DetailClient from "@/app/components/detail/DetailClient";
import productsData from "@/app/components/products/Products.data.mocks";

const ProductDetail = () => {
  const params = useParams();
  if (!params) return <p>Ürün bulunamadı</p>;
  const productId = Number(params.productId);

  const product = productsData.find((p) => p.id === productId);

  if (!product) return <p>Ürün bulunamadı</p>;

  return (
    <div>
      <DetailClient product={product} />
    </div>
  );
};

export default ProductDetail;
