"use client";
import { useControlDisplay } from "@/context/ControlDisplay";
import React, { Dispatch, FC, SetStateAction } from "react";
import { IoBagCheckSharp } from "react-icons/io5";

type Props = {
  isOpen: boolean,
  setIsOpen:  Dispatch<SetStateAction<boolean>>
};

const IsModal: FC<Props> = ({ isOpen, setIsOpen }) => {
  const { windowWidth } = useControlDisplay();
  return (
    <div
      className={`fixed z-20 ${
        windowWidth > 750 ? "top-4 " : "top-16 "
      } right-0`}
      onClick={()=> setIsOpen(!isOpen)}
    >
      <div
        className={`relative top-0 right-2 bg-[#1817179f]  rounded-full p-2 flex justify-center items-center cursor-pointer`}
      >
        <IoBagCheckSharp width={40} height={0} className="" />
      </div>
    </div>
  );
};

export default IsModal;
