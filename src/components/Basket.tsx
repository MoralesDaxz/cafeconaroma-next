"use client";
import { usePayProducts } from "@/context/PayCoffee";
import React from "react";
import BagsPurshased from "./BagsPurshased";
const Basket = () => {
    const { local, total, quantity } = usePayProducts();
  return (
    <section className="pt-20 bg-[white] min-h-screen flex flex-col items-center gap-8">
      <h3 className="title text-[#2f5854] mt-8">Cesta ( {quantity} )</h3>
      <article className=" flex flex-col sm:flex-row sm:justify-center gap-3 px-4 sm:px-0 w-full max-w-[900px]">
        <div className="flex flex-col bg-[#2e2d2dd2] w-full sm:w-[50%] p-2 rounded-md">
          <h4>Products</h4>
          <BagsPurshased />
        </div>
        <div className="bg-[#f6f5f3] flex flex-col text-black w-full sm:w-[30%] p-4 rounded-md">
          <h4>Total de sus compras</h4>
          <span className="bg-[#615649] h-[1px] w-[90%] self-center"></span>
          <div className="flex justify-between items-center">
            <p>SUBTOTAL</p>
            <p>{total}</p>
          </div>
          <div className="flex justify-between items-center">
            <p>ENVIO</p>
            <p>GRATIS?</p>
          </div>
          <p>TOTAL</p>
        </div>
      </article>
    </section>
  );
};

export default Basket;
