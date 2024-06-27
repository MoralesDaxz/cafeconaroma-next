"use client";
import { usePayProducts } from "@/context/PayCoffee";
import React, { FC, useState } from "react";
import { IoBagCheckSharp } from "react-icons/io5";
import IsModal from "./IsModal";
import Image from "next/image";

const DisplayModalCar = () => {
  const { local } = usePayProducts();
  const [isOpen, setIsOpen] = useState(false);
  const [enableModal, setEnableModal] = useState();
  console.log(local);

  return (
    <div>
      <IsModal isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <div className="flex flex-col justify-center items-center w-[300px] h-[350px] fixed top-20 z-20 right-2 bg-[#00000098] backdrop-blur-md rounded-md">
          {local?.map((item) => 
            <div className="w-full p-2 flex justify-between">
              <div><Image src={item.img!} width={10} height={10} alt={`${item.name}_image`}/></div>
              <div>{item.name}</div>
              <div>{item.price}</div>
              
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DisplayModalCar;
