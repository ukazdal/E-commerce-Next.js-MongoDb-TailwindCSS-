import React from "react";
import SectionTitle from "../sectionTitle/SectionTitle";
import { PiArrowFatLineRightDuotone } from "react-icons/pi";
import ProductCard from "./ProductCard";
import { randomKey } from "@/utils/randomKey";
import productsData from "./Products.data.mocks";

const Products = () => {
  return (
    <div>
      <SectionTitle
        title="Title"
        subTitle="Subtitle"
        linkTitle="LinkTitle"
        link="#"
        linkIcon={<PiArrowFatLineRightDuotone />}
      />
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {productsData.map((product) => (
          <ProductCard
            key={randomKey()}
            id={product.id.toString()}
            title={product.title}
            description={product.description}
            badges={product.badges}
            stock={product.stock}
            images={product.images}
            brand={product.brand}
            price={product.price}
            discounted_price={product.discounted_price}
            discount_rate={product.discount_rate}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
