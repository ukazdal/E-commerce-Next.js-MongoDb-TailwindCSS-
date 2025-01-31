import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const HamburgerMenu = () => {
  return (
    <div className="relative flex lg:hidden">
      <GiHamburgerMenu size={26} />
    </div>
  );
};

export default HamburgerMenu;
