"use client";
import { usePayProducts } from "@/context/PayCoffee";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import IsModal from "./IsModal";
import { usePathname } from "next/navigation";
import Link from "next/link";
import BagsPurshased from "./BagsPurshased";
import { TbShoppingCart } from "react-icons/tb";
import { TbShoppingCartStar } from "react-icons/tb";
const DisplayModalCar = () => {
  const { buysLocalStorage } = usePayProducts();
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();
  useEffect(() => {
    setIsOpen(false);
  }, [path]);
  return (
    <div className="flex flex-col items-center rounded-md">
      {buysLocalStorage.subtotal > 0 && path !== "/checkout" && (
        <IsModal isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
      {isOpen ? (
        <div className="flex flex-col items-center w-[85%] sm:w-[450px] h-[350px] overflow-y-auto fixed top-20 sm:top-20 z-20 sm:right-2 bg-[#00000098] backdrop-blur-md rounded-md transition-all duration-500">
          <div className="flex justify-center items-center bg-[#0f380c] w-full py-3 text-base sm:text-[1.4em]">
            <Link
              className="flex items-center w-fit justify-center gap-3 border-b-[1px] border-[#6c7c6b] cursor-pointer"
              href={"/pay"}
              title="Pagar"
            >
              <p className="">Total a pagar </p>

              <p className="">
                {buysLocalStorage.total.toFixed(2).replace(".", ",")} €
              </p>
            </Link>
            <IoClose
              onClick={() => {
                setIsOpen(false);
              }}
              className="absolute top-1 right-2 cursor-pointer"
              title="Cerrar"
            />
          </div>
          {buysLocalStorage.subtotal > 0 ? (
            <BagsPurshased />
          ) : (
            <p className=" mt-[30%] text-[1.2em]">Carrito vacio!</p>
          )}
          <div className=" bg-[#0b2709] absolute bottom-0 flex justify-center items-center gap-3 w-full py-2 text-xs sm:text-sm opacity-80">
            {buysLocalStorage.sent.delivery !== "normal" ? (
              <TbShoppingCartStar className="w-[30px] h-[30px]" />
            ) : (
              <TbShoppingCart className="w-[30px] h-[30px]" />
            )}
            <p>
              Compra {buysLocalStorage.subtotal.toFixed(2).replace(".", ",")} €
            </p>
            <p>+</p>
            <p>
              Envio{" "}
              {buysLocalStorage.sent.delivery !== "normal"
                ? buysLocalStorage.sent.payDelivery
                    ?.toFixed(2)
                    .replace(".", ",") + " €"
                : "Gratis"}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center w-[80%] sm:w-[450px] h-0 overflow-y-auto fixed top-20 sm:top-20 sm:right-2 z-20  bg-[#00000098] backdrop-blur-md rounded-md transition-all duration-500"></div>
      )}
    </div>
  );
};

export default DisplayModalCar;
