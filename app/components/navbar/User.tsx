"use client";
import { AiOutlineUser } from "react-icons/ai";

const User = () => {
  return (
    <div className="hidden md:flex">
      <div className="flex items-center gap-2">
        <AiOutlineUser size={25} />
        <div>User</div>
      </div>
    </div>
  );
};

export default User;
