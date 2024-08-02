'use client'
import ChoosePay from "@/components/ChoosePay";
import Link from "next/link";
import React from "react";
import { IoArrowBack } from "react-icons/io5";

const page = () => {
  return (

    <section className="pt-20 md:pt-28 pb-2 bg-[white] min-h-screen w-full flex flex-col items-center">
      <Link
        href={"/pay"}
        className="text-black absolute top-14 sm:top-20 left-2 flex gap-2"
      >
        <IoArrowBack /> Volver
      </Link>
      <h1 className="title text text-[#0c1225] py-8">Confirmación de pago</h1>

      <ChoosePay />
    </section>

  );
};

export default page;
