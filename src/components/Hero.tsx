import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="pt-24 pb-10 px-12 w-full flex flex-col sm:flex-row sm:justify-evenly sm:items-center bg-[#FEFFFE] gap-5">
      <article className="w-full flex flex-col gap-5">
        <p className="text-[#2B5A45] font-normal text-base">De la planta a tu taza</p>
        <h3 className="text-[#000101] font-bold text-[2.8rem]">El mejor café del mundo, ahora en tu casa.</h3>
        <p className="text-[#000101]">
          Trabajamos con agricultores de todo el mundo para seleccionar los
          mejores granos de café y que puedas viajar desde la comodidad de tu
          hogar.
        </p>
        <div className="flex items-center gap-3">
          <Link className="bg-[#1F1914] px-6 py-1 rounded" href={"/origins"}>Descubrir Orígenes</Link>
          <Link className="bg-[#2B5A45] px-6 py-1 rounded" href={"/store"}>Comprar Café</Link>
        </div>
      </article>
      <article className=" w-full flex justify-center items-center">
        <Image src={"/images/coffee-hero.png"} alt="coffee-aroma" className="w-[250px] sm:w-[550px] lg:w-full  rounded-3xl shadow-md shadow-[#00000093]" width={1000} height={1000} />
      </article>
    </section>
  );
};

export default Hero;
