"use client";
import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Image src={"/images/logo.png"} width={150} height={75} />
    </div>
  );
};

export default Logo;
