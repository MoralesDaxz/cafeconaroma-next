import Footer from "@/components/Footer";
import { privacity } from "@/data/information";
import React from "react";

const page = () => {
  return (
    <section className="pt-24 md:pt-32 bg-[#000000f6] min-h-screen w-full rounded-sm flex flex-col items-center gap-3">
      <h2 className=" text-base text-center py-5 title">
        Política de Privacidad
      </h2>
      <div className="flex flex-col gap-3 text-base font-extralight text-[#d1d0d0] w-[90%] sm:w-[60%]">
        {privacity.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
      <Footer />
    </section>
  );
};

export default page;
