import CarouselCompanies from "@/components/CarouselCompanies";
import React from "react";

const page = () => {
  return (
    <section className="pt-20 md:pt-28 min-h-screen w-full bg-white text-black flex flex-col items-center gap-5">
      <h1 className="title">Nosotros</h1>
      <div className="w-full flex">

      <CarouselCompanies></CarouselCompanies>
      </div>
    </section>
  );
};

export default page;
