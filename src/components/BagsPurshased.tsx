"use client";
import { usePayProducts } from "@/context/PayCoffee";
import { addLocalStorage, removeLocalStorage } from "@/utils/localStorageItems";
import React, { useEffect } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { IoMdAddCircle } from "react-icons/io";
import { IoMdRemoveCircle } from "react-icons/io";
import Image from "next/image";

const BagsPurshased = () => {
  const { local, setTotal, controlRender, setControlRender } =
    usePayProducts();
  const subTotal = local.reduce((sum, product) => {
    return sum + product.units! * product.price!;
  }, 0);
  useEffect(() => {
    setTotal(subTotal);
  }, [subTotal]);

  return (
    <>
      {local.map((bagCoffee, index) => {
        return (
          <div
            key={index}
            className="w-full px-2 py-4 flex items-center justify-between border-b-[1px] border-[#615649]"
          >
            <div className="flex items-center gap-2">

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
            <IoMdAddCircle
              onClick={() => {
                addLocalStorage({ bagCoffee }),
                  setControlRender(controlRender + 1);
              }}
              className="w-[30px] h-[30px] opacity-80 hover:opacity-100 cursor-pointer"
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
              {(bagCoffee.price! * bagCoffee.units!).toFixed(2).replace('.',',')} €
            </p>

          </div>
        );
      })}
    </>
  );
};

export default BagsPurshased;
