"use client";
import { useProducts } from "@/context/GetProducts";
import { getCoffee } from "@/utils/apiGetCoffee";
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
const URL_API = "https://api-cafeconaroma.onrender.com/products";
type Product = {
  _id?: string;
  available?: true;
  brand?: string;
  img_url?: string;
  price?: number;
  package?: string;
};
interface Props {
  units: number;
}

const CoffeeBags: FC<Props> = ({ units }) => {
  const { coffee  } = useProducts();

  useEffect(() => {
    const getCoffee = async () => {
      const promise = await fetch(URL_API);
      const response = await promise.json();
      return response.products;
    };
  });

  const putLocalStorage = () => {};

  return (
    <>
      <section className="w-full flex flex-wrap justify-center gap-3 text-[#181717]">
        {coffee !== undefined ? (
          coffee.map((item, index) => {
            if (index < units) {
              return (
                <div
                  className="w-[70%] sm:w-[40%] md:w-[20%]  border-2 border-[#e3ded7] hover:border-[#c5c0b8] hover:bg-[#e3ded7] rounded-md p-5 flex flex-col items-center group/bagCoffee gap-3 transition-all duration-500"
                  key={index}
                >
                  <h4 className="capitalize font-medium text-2xl ">
                    {item.brand}
                  </h4>
                  <Image
                    className="w-[full] h-auto"
                    src={item.img_url!}
                    width={400}
                    height={400}
                    alt="bag_coffe"
                    priority
                  />
                  <p className="font-medium text-xl">
                    {item.price?.toFixed(2)} €
                  </p>
                  <button
                    className="w-fit py-3 px-2 rounded-md bg-[#2a5b45b3] group-hover/bagCoffee:bg-[#2A5B45] text-white font-medium text-lg"
                    id={item._id}
                  >
                    Añadir
                  </button>
                </div>
              );
            }
          })
        ) : (
          <div className="flex flex-col items-center">
            <div className="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <p className="text-2xl font-medium">Loading...</p>
          </div>
        )}
      </section>
    </>
  );
};

export default CoffeeBags;
