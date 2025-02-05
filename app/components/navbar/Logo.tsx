"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <Image src={"/images/logo.png"} width={150} height={75} alt={"Logo"} />
    </Link>
  );
};

export default Logo;
