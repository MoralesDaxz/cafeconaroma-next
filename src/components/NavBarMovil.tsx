"use client";

import { getRouteIndex, route } from "@/utils/boxRoutes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { HiMenu } from "react-icons/hi";
import { TbCoffee } from "react-icons/tb";
import { FaCircle } from "react-icons/fa6";
import { usePathname } from "next/navigation";
const NavBarMovil = () => {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [indexRoute, setIndexRoute] = useState(-1);

  useEffect(() => {
   return setIndexRoute(getRouteIndex(path!));
  }, [path]);

  return (
    <>
      {isOpen && (
        <div className="text-lg fixed z-30 min-w-[330px] w-full bg-[#2b2a2bf6] flex flex-col items-start justify-start gap-10 min-h-screen pt-4 px-2">
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
            <Link
              className="flex items-center justify-between gap-4 py-2"
              href={"/"}
            >
              <FaCircle
                className={`w-3 h-3 transition-all duration-500 ${
                  indexRoute === 0 && "chooseRoute"
                }`}
                color={indexRoute === 0 ? "#3a7c5e" : "#808080"}
              />

              <p className={`text-start w-[8rem] `}>Inicio</p>
            </Link>
            {route.map((item, index) => {
              return (
                <Link
                  className="flex items-center justify-between gap-4 py-2"
                  key={index}
                  href={item.link}
                >
                  <FaCircle
                    className={`w-3 h-3 transition-all duration-500 ${
                      indexRoute === Number(index + 1) && "chooseRoute"
                    }`}
                    color={
                      indexRoute === Number(index + 1) ? "#3a7c5e" : "#808080"
                    }
                  />
                  <p className={`text-start w-[8rem]`}>{item.title}</p>
                </Link>
              );
            })}
          </div>
        </div>
      )}
      {isOpen === false && (
        <div className="bg-[#2B2A2B]  p-2">
          <Link href={"/"} className="w-fit flex items-center gap-2">
            <h2 className=" text-2xl">cafeconaroma.com</h2>
            <TbCoffee className="w-[1.5rem] h-[1.5rem]" />
          </Link>
          <HiMenu
            onClick={() => {
              0;
              setIsOpen(true);
            }}
            className="w-[1.5rem] h-[1.5rem] absolute z-20 top-3 right-3 opacity-90"
          />
        </div>
      )}
    </>
  );
};

export default NavBarMovil;
