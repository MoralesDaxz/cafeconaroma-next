"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import pickCoffee from "@/assets/images/pick-coffee.jpg";
import { useControlDisplay } from "@/context/ControlDisplay";
const Hero = () => {
  const { windowWidth } = useControlDisplay();
  return (
    <section className="pt-10 sm:pt-24 pb-10 px-12 w-full flex flex-col sm:flex-row sm:justify-center sm:items-center bg-[#FEFFFE] gap-5 h-[500px]">
      <article className="w-full max-w-[580px] flex flex-col gap-8 sm:gap-5">
        <p className="text-[#2B5A45] font-medium text-lg">
          De la planta a tu taza
        </p>
        <h3 className="text-[#000101] font-bold text-[2.1rem] leading-8">
          El mejor café del mundo, ahora en tu casa.
        </h3>
        <p className="text-[#000101]">
          Trabajamos con agricultores de todo el mundo para seleccionar los
          mejores granos de café y que puedas viajar desde la comodidad de tu
          hogar.
        </p>
        <div className="flex items-center gap-2">
          <Link
            className="bg-[#1F1914] px-2 sm:px-3 py-2 rounded text-center md:text-lg"
            href={"/origins"}
          >
            Descubrir Orígenes
          </Link>
          <Link
            className="bg-[#2B5A45] px-2 sm:px-3 py-2 rounded text-center md:text-lg"
            href={"/store"}
          >
            Comprar Café
          </Link>
        </div>
      </article>
      {windowWidth > 640 && (
        <article className="w-full max-w-[580px] flex justify-center items-center">
          <Image
            src={pickCoffee}
            alt="coffee-aroma"
            className="w-full rounded-xl shadow-md shadow-[#00000093] opacity-90 "
            width={0}
            height={0}
          />
        </article>
      )}
    </section>
  );
};

export default Hero;
