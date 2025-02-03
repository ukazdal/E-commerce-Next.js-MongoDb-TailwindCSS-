import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="h-[400px] w-full">
      <div className="h-[400px] relative w-full">
        <Image src="/images/banner/4.jpg" alt="BannerOne" fill />
      </div>
    </div>
  );
};

export default Banner;
