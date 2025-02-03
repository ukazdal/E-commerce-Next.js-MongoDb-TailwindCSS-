import DetailClient from "@/app/components/detail/DetailClient";
import productsData from "@/app/components/products/Products.data.mocks";
import React from "react";

type ProductDetailProps = {
  productId?: string;
};

const ProductDetail = ({ params }: { params: ProductDetailProps }) => {
  const { productId } = params;

  const product = productsData.find(
    (product) => product.id.toString() === productId
  );

  console.log(product, "product");
  return (
    <div>
      <DetailClient />
    </div>
  );
};

export default ProductDetail;
