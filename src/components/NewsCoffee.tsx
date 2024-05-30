import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import CoffeeBags from "./CoffeeBags";
const NewsCoffee = () => {
  return (
    <section className="w-full py-10 bg-[#FEFFFE] text-black flex flex-col items-center gap-6">
      <h2 className="title text-[#2A5B45]">Novedades</h2>
      
      <CoffeeBags units={4}/>
      <Link href={"/store"} className="flex items-center gap-3">
        <p className="underline font-bold">Ver todos</p>
        <FaArrowRightLong />
      </Link>
    </section>
  );
};

export default NewsCoffee;
