"use client";
import { usePayProducts } from "@/context/PayCoffee";
import React, { FC, useEffect, useState } from "react";
import { IoBagCheckSharp } from "react-icons/io5";
import IsModal from "./IsModal";
import Image from "next/image";

const DisplayModalCar = () => {
  const { local } = usePayProducts();
  const [isOpen, setIsOpen] = useState(false);
  const [enableModal, setEnableModal] = useState();
  const [products, setProducts] = useState(local);
  
  useEffect(() => setProducts(local), [local]);

  return (
    <div>
      <IsModal isOpen={isOpen} setIsOpen={setIsOpen} />
      
        <div className="flex flex-col items-center w-[300px] h-[350px] overflow-y-auto fixed top-20 z-20 right-2 bg-[#00000098] backdrop-blur-md rounded-md">
          {local.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full p-2 flex items-center justify-between"
              >
                <div className="relative w-[70px] h-[70px]">
                  <p className="absolute top-0 right-0 rounded-full bg-[#082006] w-6 h-6 flex items-center justify-center">
                    {item.units}
                  </p>
                  <Image
                    src={item.image!}
                    width={70}
                    height={70}
                    alt={`${item.name}_image`}
                  />
                </div>
                <p className="w-[80px]">{item.name}</p>
                <div>{item.price! * item.units! } €</div>
              </div>
            );
          })}
        </div>
      
    </div>
  );
};

export default DisplayModalCar;
