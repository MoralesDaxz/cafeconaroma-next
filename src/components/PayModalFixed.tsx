"use client";
import { usePayProducts } from "@/context/PayCoffee";
import React, { FC, ReactNode } from "react";
type Props = {
  children?: ReactNode;
};

const PayModalFixed: FC<Props> = ({ children }) => {
  const { buysLocalStorage } = usePayProducts();
  return (
    <section className="relative w-full sm:w-[40%] mr-8">
      <div className="sm:fixed bg-[#dfd9cdd7] sm:w-[40%] flex flex-col text-black p-6 rounded-md h-fit gap-4 ">
        <h4 className="text-[1.1em] font-semibold">Total de sus compras</h4>
        <span className="bg-[#615649] h-[1px] w-[90%] self-center"></span>
        <div className="flex justify-between items-center text-[.9em] font-medium">
          <p className=" ">SUBTOTAL</p>
          <p>{buysLocalStorage.subtotal.toFixed(2).replace(".", ",")} €</p>
        </div>
        <div className="flex justify-between items-center text-[.9em] font-medium">
          <p className=" ">ENVIO</p>
          <p>{buysLocalStorage.sent.payDelivery?.toFixed(2).replace(".", ",")} €</p>
        </div>

        <span className="bg-[#615649] h-[1px] w-[90%] self-center"></span>
        <div className="flex justify-between items-center text-[.6em] font-medium">
          <p className="">Incluye IVA 21%</p>
          <p>
            {(buysLocalStorage.total * 0.21).toFixed(2).replace(".", ",")} €
          </p>
        </div>
        <div className="flex justify-between items-center text-[.9em] font-medium">
          <p className="">TOTAL</p>
          <p>{buysLocalStorage.total.toFixed(2).replace(".", ",")} €</p>
        </div>
        {children}
      </div>
    </section>
  );
};

export default PayModalFixed;
