"use client";
import { useUser } from "@/context/LoginUser";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
const ProfileSticky = () => {
  const { isUser, user, controlRender, setControlRender } = useUser();

  const quitUser = () => {
    localStorage.removeItem("user");
    setControlRender(controlRender + 1);
    return;
  };

  return (
    <div className="relative flex gap-2 justify-between bg-[#1F1914] p-2 rounded-md  ">
      <FaUserCircle className="w-5 h-5" />
      <p className="capitalize w-[80px] overflow-hidden whitespace-nowrap text-ellipsis">
        {user?.name} &nbsp; {user?.lastName}
      </p>
      <div className="absolute sm:translate-y-[2.8rem] left-0 bg-[#1f1914ee] w-full max-w-[150px] p-2">
        <ul className="list-none flex flex-col gap-2">
          <li>-</li>
          <li>-</li>
          <li>-</li>
          <li onClick={() => quitUser()}>Cerrar sesión</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileSticky;
