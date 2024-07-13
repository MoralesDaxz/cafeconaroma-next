"use client";
import { useProducts } from "@/context/GetProducts";
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import Loader from "./Loader";
import { addLocalStorage } from "@/utils/localStorageItems";
import { usePayProducts } from "@/context/PayCoffee";

type NumberBags = {
  units: number;
};

const CoffeeBags: FC<NumberBags> = ({ units }) => {
  const { coffee } = useProducts();
  const [isCoffee, setIsCoffee] = useState(false);
  const { controlRender, setControlRender } = usePayProducts();

  useEffect(() => {
    setIsCoffee(coffee !== undefined ? true : false);
  }, [coffee]);
  return (
    <>
      <section className="w-full flex flex-wrap justify-center gap-3 text-[#181717]">
        {isCoffee ? (
          coffee?.map((bagCoffee, index) => {
            if (index < units) {
              return (
                <div
                  className="w-[70%] sm:w-[40%] md:w-[20%]  border-2 border-[#e3ded7] hover:border-[#c5c0b8] hover:bg-[#e3ded7] rounded-md px-5 pt-2 flex flex-col items-center group/bagCoffee gap-3 transition-all duration-500"
                  key={index}
                >
                  <h4 className="capitalize font-medium text-2xl ">
                    {bagCoffee.brand}
                  </h4>
                  <Image
                    className="w-[full] h-auto"
                    src={bagCoffee.img_url!}
                    width={400}
                    height={400}
                    alt="bag_coffe"
                    priority
                  />
                  <p className="font-medium text-xl">
                    {bagCoffee.price?.toFixed(2)} €
                  </p>
                  <button
                    className="transition-all duration-300 hover:scale-105 w-fit py-3 px-2 rounded-md bg-[#13470F] group-hover/bagCoffee:bg-[#1d6116] text-white font-medium text-lg"
                    id={bagCoffee._id}
                    onClick={() => {
                      addLocalStorage({ bagCoffee }),
                        setControlRender(controlRender + 1);
                    }}
                  >
                    Añadir
                  </button>
                  <p className="font-medium text-[.6em]">
                    IVA incluido {bagCoffee.price! * 0.21} €
                  </p>
                </div>
              );
            }
          })
        ) : (
          <Loader />
        )}
      </section>
    </>
  );
};

export default CoffeeBags;
