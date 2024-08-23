"use client";
import React, { Dispatch, FC, ReactNode, SetStateAction, useState } from "react";
import { IoClose } from "react-icons/io5";
type Props = {
  children?: ReactNode;
  arrText: string[];
  title: string;
  isOpen:boolean
  setIsOpen:Dispatch<SetStateAction<boolean>>
};
const ModalInformation: FC<Props> = ({ children, title, arrText,isOpen,setIsOpen }) => {

  return (
    <>
      {isOpen && (
        <article className="bg-[#000000f6] absolute max-w-[500px]  p-4 rounded-sm">
          <IoClose
            onClick={() => setIsOpen(false)}
            className="absolute top-1 right-2 cursor-pointer"
            title="Cerrar"
          />
          <h2 className=" text-base text-center py-5">{title}</h2>
          <div className="overflow-y-auto scrollBar h-[370px] flex flex-col gap-3 text-sm font-extralight text-[#d1d0d0]">
            {arrText?.map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
            {children}
          </div>
        </article>
      )}
    </>
  );
};

export default ModalInformation;
