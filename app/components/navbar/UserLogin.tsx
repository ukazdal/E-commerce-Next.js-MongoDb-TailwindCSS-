"use client";
import { User } from "@prisma/client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";

interface UserProps {
  currentUser: User | null | undefined;
}

const UserLogin: React.FC<UserProps> = ({ currentUser }) => {
  const [openMenu, setOpenMenu] = useState(false);

  console.log("currentUser ==>", currentUser);

  return (
    <div className="hidden md:flex relative">
      {currentUser ? (
        <div
          onClick={() => setOpenMenu(!openMenu)}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div>
            <AiOutlineUser size={25} />
          </div>
          <div>{currentUser.name}</div>
        </div>
      ) : (
        <Link href="/login" className="flex items-center gap-2 cursor-pointer">
          <AiOutlineUser size={25} />
          <div>Login</div>
        </Link>
      )}

      {openMenu && (
        <div className="absolute left-0 mt-2 bg-white shadow-md rounded-md">
          {currentUser ? (
            <div className="text-black">
              <div className="p-2">
                <div>{currentUser.name}</div>
                <div>{currentUser.email}</div>
              </div>
              <div className="border-t border-gray-200">
                <div className="p-2">Admin</div>
                <div className="p-2">Profile</div>
                <div className="p-2">Settings</div>
                <div className="p-2">Logout</div>
              </div>
            </div>
          ) : (
            <div className="text-black flex flex-col">
              <Link href="/login" className="p-2">
                Login
              </Link>
              <Link href="/register" className="p-2">
                Register
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserLogin;
