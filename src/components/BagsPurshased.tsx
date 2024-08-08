"use client";
import { usePayProducts } from "@/context/PayCoffee";
import React from "react";
import { IoMdAddCircle } from "react-icons/io";
import { IoMdRemoveCircle } from "react-icons/io";
import Image from "next/image";
import { AddToLocal, SubsToLocal } from "@/data/controlLocalStorage";

const BagsPurshased = () => {
  const { buysLocalStorage, controlRender, setControlRender } =
    usePayProducts();
  return (
    <>
      {buysLocalStorage.product.map((bagCoffee, index) => {
        return (
          <div
            key={index}
            className="w-full px-2 py-4 flex items-center justify-between border-b-[1px] border-[#615649]"
          >
            <div className="flex items-center gap-2">
              <IoMdRemoveCircle
                onClick={() => {
                  SubsToLocal({ bagCoffee });
                  setControlRender(controlRender + 1);
                }}
                className="transition-all duration-300 hover:scale-90 w-[30px] h-[30px] opacity-80 hover:opacity-100 cursor-pointer"
                color="#fcf6f6f1"
              />
              <div className="relative w-[40px] h-[40px] sm:w-[70px] sm:h-[70px]">
                <p className="absolute top-0 right-0 rounded-full text-white bg-[#13470f] w-4 h-4 text-xs sm:text-sm sm:w-6 sm:h-6 flex items-center justify-center">
                  {bagCoffee.units}
                </p>
                <Image
                  src={bagCoffee.img_url!}
                  width={70}
                  height={70}
                  alt={`${bagCoffee.brand}_image`}
                />
              </div>
              <IoMdAddCircle
                onClick={() => {
                  AddToLocal({ bagCoffee }),
                    setControlRender(controlRender + 1);
                }}
                className="transition-all duration-300 hover:scale-90 w-[30px] h-[30px] opacity-80 hover:opacity-100 cursor-pointer"
                color="#fcf6f6f1"
              />
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="flex flex-col items-center justify-center gap-2">
                <p className="w-[90px] text-[1.2em] capitalize text-center">
                  {bagCoffee.brand}
                </p>
                <p className="text-[.9em] self-center">{bagCoffee.price} €</p>
              </div>
            </div>
            <p className="min-w-[50px] text-[1.1em]">
              {(bagCoffee.units! * bagCoffee.price!)
                .toFixed(2)
                .replace(".", ",")}{" "}
              €
            </p>
          </div>
        );
      })}
    </>
  );
};

export default BagsPurshased;
