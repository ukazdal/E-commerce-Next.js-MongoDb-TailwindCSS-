import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import CardCount from "./CardCount";
import User from "./User";
import HamburgerMenu from "./HamburgerMenu";
import Category from "../home/Category";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between px-4 lg:px-10 gap-3 lg:gap-10 bg-gray-800 text-white h-20">
        <Logo />
        <Search />
        <CardCount />
        <User />
        <HamburgerMenu />
      </div>
      <div className="hidden lg:block">
        <Category />
      </div>
    </>
  );
};

export default Navbar;
