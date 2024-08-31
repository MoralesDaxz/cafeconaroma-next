"use client";
import { useUser } from "@/context/LoginUser";
import React, { Dispatch, FC, SetStateAction } from "react";
import { FaUserCircle } from "react-icons/fa";
type Props = {
  isModalLogin: boolean;
  setIsModalLogin: Dispatch<SetStateAction<boolean>>;
};
const ProfileSticky: FC<Props> = ({ isModalLogin, setIsModalLogin }) => {
  const { isLogin, user, controlRender, setControlRender } = useUser();

  const quitUser = () => {
    localStorage.removeItem("user");
    setControlRender(controlRender + 1);
    return;
  };

  return (
    <>
      <div
        onClick={() => setIsModalLogin(!isModalLogin)}
        className="relative flex gap-2 justify-between bg-[#1F1914] p-2 rounded-md cursor-pointer transition-all duration-300"
      >
        <FaUserCircle className="w-5 h-5" />
        <p className="capitalize w-[80px] overflow-hidden whitespace-nowrap text-ellipsis">
          {user?.name} &nbsp; {user?.lastName}
        </p>
        {isModalLogin ? (
          <div className="absolute sm:translate-y-[2.8rem] top-0 left-[140px] sm:left-0 bg-[#1f1914ee] w-full max-w-[150px] p-2 transition-all duration-300">
            <ul className="list-none flex flex-col gap-2">
              <li className="cursor-pointer opacity-75 hover:opacity-100">-</li>
              <li className="cursor-pointer opacity-75 hover:opacity-100">-</li>
              <li className="cursor-pointer opacity-75 hover:opacity-100">-</li>
              <li
                className="cursor-pointer opacity-75 hover:opacity-100"
                onClick={() => quitUser()}
              >
                Cerrar sesión
              </li>
            </ul>
          </div>
        ) : (
          <div className="absolute sm:translate-y-[2.8rem] left-0 bg-[#1f1914ee] w-full max-w-[150px] h-0 transition-all duration-300"></div>
        )}
      </div>
    </>
  );
};

export default ProfileSticky;
