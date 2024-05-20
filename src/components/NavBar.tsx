"use client";
import { useControlDisplay } from "@/context/ControlDisplay";
import { route } from "@/utils/boxRoutes";
import Link from "next/link";
import React from "react";
import { LuPhone } from "react-icons/lu";
import { SlCup } from "react-icons/sl";

const NavBar = () => {
  const { windowWidth, windowScroll } = useControlDisplay();
  return (

      <div className="text-lg fixed z-10 w-full bg-[#2B2A2B] h-16 flex justify-evenly items-center ">
        <Link href={"/"} className="flex items-center gap-2">
          {windowWidth > 1150 && (
            <h2 className=" text-2xl">cafeconaroma.com</h2>
          )}
          <SlCup className="w-[1.5rem] h-[1.5rem]" />

        </Link>
        
        <div className="flex sm:gap-2 lg:gap-4">
          {route.map((item, index) => {
            return (
              <Link key={index} href={item.link}>
                {item.title}
                
              </Link>
            );
          })}
        </div>
        {windowWidth > 1150 && (
          <div className="flex items-center gap-2">
            <LuPhone /> <p>+34 919 49 05 00</p>
          </div>
        )}
        <Link href={"/login"}>
          <p className="font-semibold py-2 px-6 bg-[#515051] flex items-center justify-center rounded">
            Iniciar sesión
          </p>
        </Link>
      </div>

  );
};

export default NavBar;
