"use client";
import { usePayProducts } from "@/context/PayCoffee";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import IsModal from "./IsModal";

import Link from "next/link";
import { LuShoppingCart } from "react-icons/lu";
import BagsPurshased from "./BagsPurshased";

const DisplayModalCar = () => {
  const { buysLocalStorage } =
    usePayProducts();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="flex flex-col items-center rounded-md"
      onMouseLeave={() => setIsOpen(false)}
    >
      {!isOpen && <IsModal isOpen={isOpen} setIsOpen={setIsOpen} />}
      {isOpen ? (
        <div className="flex flex-col items-center w-[85%] sm:w-[450px] h-[350px] overflow-y-auto fixed top-20 sm:top-20 z-20 sm:right-2 bg-[#00000098] backdrop-blur-md rounded-md transition-all duration-500">
          <div className="flex justify-center bg-[#13470f] w-full py-3">
            <Link
              className="flex items-center w-fit justify-center gap-3 border-b-[1px] border-[#6c7c6b] cursor-pointer"
              href={"/pay"}
              title="Pagar"
            >
              <h4 className="text-center text-[1.4em]">Pagar</h4>
              <LuShoppingCart className="w-[30px] h-[30px]" />
              <p className="text-[1.4em]">
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
        </div>
      ) : (
        <div className="flex flex-col items-center w-[80%] sm:w-[450px] h-0 overflow-y-auto fixed top-20 sm:top-20 sm:right-2 z-20  bg-[#00000098] backdrop-blur-md rounded-md transition-all duration-500"></div>
      )}
    </div>
  );
};

export default DisplayModalCar;
