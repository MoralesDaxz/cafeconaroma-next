"use client";
import { usePayProducts } from "@/context/PayCoffee";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import IsModal from "./IsModal";
import Image from "next/image";
import Link from "next/link";
import { LuShoppingCart } from "react-icons/lu";
import { IoMdAddCircle } from "react-icons/io";
import { IoMdRemoveCircle } from "react-icons/io";
import { addLocalStorage, removeLocalStorage } from "@/utils/localStorageItems";

const DisplayModalCar = () => {
  const { local, total, setTotal, controlRender, setControlRender } =
    usePayProducts();
  const [isOpen, setIsOpen] = useState(false);

  const subTotal = local.reduce((sum, product) => {
    return sum + product.units! * product.price!;
  }, 0);
  useEffect(() => {
    setTotal(subTotal);
  }, [subTotal]);

  return (
    <div className="flex flex-col items-center rounded-md">
      {total > 0 && <IsModal isOpen={isOpen} setIsOpen={setIsOpen} />}
      {isOpen ? (
        <div className="flex flex-col items-center w-[85%] sm:w-[350px] h-[350px] overflow-y-auto fixed top-20 sm:top-20 z-20 sm:right-2 bg-[#00000098] backdrop-blur-md rounded-md transition-all duration-500">
          <div className="flex justify-center bg-[#13470f] w-full py-3">
            <Link
              className="flex items-center w-fit justify-center gap-3 border-b-[1px] border-[#6c7c6b] cursor-pointer"
              href={"/pay"}
              title="Pagar"
            >
              <h4 className="text-center text-[1.4em]">Pagar</h4>
              <LuShoppingCart className="w-[30px] h-[30px]" />
              <p className="text-[1.4em]">{total} €</p>
            </Link>
            <IoClose
              onClick={() => {
                setIsOpen(false);
              }}
              className="absolute top-1 right-2 cursor-pointer"
              title="Cerrar"
            />
          </div>

          {total > 0
            ? local.map((bagCoffee, index) => {
                return (
                  <div
                    key={index}
                    className="w-full px-2 py-4 flex items-center justify-between border-b-[1px] border-[#615649]"
                  >
                    <IoMdRemoveCircle
                      onClick={() => {
                        removeLocalStorage({ bagCoffee });
                        setControlRender(controlRender + 1);
                      }}
                      className="w-[30px] h-[30px] opacity-80 hover:opacity-100 cursor-pointer"
                      color="#fcf6f6f1"
                    />
                    <div className="relative w-[70px] h-[70px]">
                      <p className="absolute top-0 right-0 rounded-full bg-[#13470f] w-6 h-6 flex items-center justify-center">
                        {bagCoffee.units}
                      </p>
                      <Image
                        src={bagCoffee.img_url!}
                        width={70}
                        height={70}
                        alt={`${bagCoffee.brand}_image`}
                      />
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <div className="flex flex-col items-center justify-center gap-2">
                        <p className="w-[90px] text-[1.2em] capitalize text-center">
                          {bagCoffee.brand}
                        </p>
                        <p className="text-[.9em] self-center">
                          {bagCoffee.price} €
                        </p>
                      </div>
                    </div>
                    <p className="min-w-[50px] text-[1.1em]">
                      {bagCoffee.price! * bagCoffee.units!} €
                    </p>

                    <IoMdAddCircle
                      onClick={() => {
                        addLocalStorage({ bagCoffee }),
                          setControlRender(controlRender + 1);
                      }}
                      className="w-[30px] h-[30px] opacity-80 hover:opacity-100 cursor-pointer"
                      color="#fcf6f6f1"
                    />
                  </div>
                );
              })
            : <p className=" mt-[30%] text-[1.2em]">Carrito vacio!</p>}
        </div>
      ) : (
        <div className="flex flex-col items-center w-[80%] sm:w-[350px] h-0 overflow-y-auto fixed top-20 sm:top-20 sm:right-2 z-20  bg-[#00000098] backdrop-blur-md rounded-md transition-all duration-500"></div>
      )}
    </div>
  );
};

export default DisplayModalCar;
