"use client";

import { route } from "@/utils/pandora";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { HiMenu } from "react-icons/hi";
import { SlCup } from "react-icons/sl";
const ModalNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen && (
        <div className="text-lg fixed z-10 w-full bg-[#2B2A2B] flex flex-col items-start justify-start gap-10 min-h-screen pt-4 px-2">
          <Link
            className="bg-[#515051] font-semibold py-3 px-6  flex items-center rounded"
            href={"/login"}
          >
            <p>Iniciar sesión</p>
          </Link>
          <IoIosClose
            onClick={() => setIsOpen(false)}
            className="w-[2rem] h-[2rem] absolute z-20 top-2 right-5 opacity-90"
          />

          <div className="flex flex-col gap-8 pl-3">
            <Link href={"/"}>Inicio</Link>
            {route.map((item, index) => {
              return (
                <Link key={index} href={item.link}>
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
      )}
      {isOpen === false && (
        <div className="p-2">
          <Link href={"/"} className="w-full flex items-center gap-2">
            <h2 className=" text-2xl">cafeconaroma.com</h2>
            <SlCup className="w-[1.5rem] h-[1.5rem]" />
          </Link>
          <HiMenu
            onClick={() => {
              setIsOpen(true);
            }}
            className="w-[1.5rem] h-[1.5rem] absolute z-20 top-3 right-3 opacity-90"
          />
        </div>
      )}
    </>
  );
};

export default ModalNavBar;
