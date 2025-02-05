import React from "react";
import { Product } from "../detail/Types.Product";

const ProdcutInfo = ({ product }: { product: Product }) => {
  return (
    <div className="border rounded-md p-2 md:p-4">
      <p className="text-sm my-2">{product?.longDescription}</p>
    </div>
  );
};

export default ProdcutInfo;
