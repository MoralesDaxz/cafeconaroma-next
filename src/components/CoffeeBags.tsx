"use client";
import { getCoffee } from "@/utils/apiGetCoffee";
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";

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
  const [coffee, setCoffee] = useState<Product[]>();
  useEffect(() => {
    getCoffee().then((data) => {
      setCoffee(data);
    });
  }, []);

  return (
    <>
      <section className="w-[80%] flex flex-wrap justify-center gap-3">
        {coffee !== undefined &&
          coffee?.map((item, index) => {
            if (index < units) {
              return (
                <div
                  className="border-2 border-[#e3ded7] hover:border-[#c5c0b8] hover:bg-[#e3ded7] rounded-md p-5 flex flex-col items-center group/bagCoffee gap-3 transition-all duration-500"
                  key={index}
                >
                  <h4 className="capitalize font-medium text-2xl ">
                    {item.brand}
                  </h4>
                  <Image
                    className="w-[300px] h-auto"
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
          })}
      </section>
    </>
  );
};

export default CoffeeBags;
