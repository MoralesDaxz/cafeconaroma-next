"use client";
import { usePayProducts } from "@/context/PayCoffee";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import IsModal from "./IsModal";
import Image from "next/image";

const DisplayModalCar = () => {
  const { local } = usePayProducts();
  const [isOpen, setIsOpen] = useState(false);
  const total = local.reduce((sum, product) => {
    return sum + (product.units! * product.price!);
  }, 0);

  return (
    <div className="flex flex-col items-center rounded-md">
      <IsModal isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen ? (
        <div className="flex flex-col items-center w-[85%] sm:w-[300px] h-[350px] overflow-y-auto fixed top-20 z-20 sm:right-2 bg-[#00000098] backdrop-blur-md rounded-md transition-all duration-500">
          <div className="bg-[#13470f] w-full flex items-center justify-around">
            <h4 className="text-center w-full py-3 text-[1.4em]">Compras</h4>
            <p>{total}</p>
            <IoClose
              onClick={() => {
                setIsOpen(false);
              }}
              className="absolute top-1  right-2"
            />
          </div>
          {local?.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full p-2 flex items-center justify-between border-b-[1px] border-[#615649]"
              >
                <div className="relative w-[70px] h-[70px]">
                  <p className="absolute top-0 right-0 rounded-full bg-[#13470f] w-6 h-6 flex items-center justify-center">
                    {item.units}
                  </p>
                  <Image
                    src={item.image!}
                    width={70}
                    height={70}
                    alt={`${item.name}_image`}
                  />
                </div>
                <div className="flex flex-col items-start justify-center gap-2">
                  <p className="w-[90px] text-[1.2em] capitalize">
                    {item.name}
                  </p>
                  <p className="text-[.9em] self-center">{item.price} €</p>
                </div>
                <p className="min-w-[50px] text-[1.3em]">
                  {item.price! * item.units!} €
                </p>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center w-[80%] sm:w-[300px] h-0 overflow-y-auto fixed top-20 z-20  bg-[#00000098] backdrop-blur-md rounded-md transition-all duration-500"></div>
      )}
    </div>
  );
};

export default DisplayModalCar;
