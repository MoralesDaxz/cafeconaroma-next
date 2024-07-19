"use client";
import { usePayProducts } from "@/context/PayCoffee";
import { Order } from "@/interfaces/interfaces";
import { getKeyLocal } from "@/utils/localStorageItems";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Successful = () => {
  const [order, setOrder] = useState<Order>({ product: [] });
  useEffect(() => {
    const itemsLocalStorage = getKeyLocal("invoice");
    setOrder(itemsLocalStorage);
  }, []);
  return (
    <section className="pt-10 sm:pt-20 pb-2 bg-[white] text-black min-h-screen w-full flex flex-col items-center gap-8">
      <p>Hola! {order.name}</p>
      <h2>Tenemos su Pedido Nº {order.invoice}</h2>
      {order.delivery === "normal" ? (
        <p>Estarás recibiéndolo entre los próximos 5 a 7 días hábiles</p>
      ) : (
        <p>Estarás recibiéndolo en las próximas 24 Horas </p>
      )}
      <p>
        Envio con destino a {order.comunity}, {order.province}.
      </p>

      <div>
        {order.product?.map((bagCoffee, index) => {
          return (
            <div
              key={index}
              className="w-full px-2 py-4 flex items-center justify-between border-b-[1px] border-[#615649]"
            >
              <div className="flex items-center gap-2">
                <div className="relative w-[70px] h-[70px]">
                  <p className="absolute top-0 right-0 rounded-full text-white bg-[#13470f] w-6 h-6 flex items-center justify-center">
                    {bagCoffee.units}
                  </p>
                  <Image
                    src={bagCoffee.img_url!}
                    width={70}
                    height={70}
                    alt={`${bagCoffee.brand}_image`}
                  />
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="flex flex-col items-center justify-center gap-2">
                  <p className="w-[90px] text-[1.2em] capitalize text-center">
                    {bagCoffee.brand}
                  </p>
                  <p className="text-[.9em] self-center">{bagCoffee.price} €</p>
                </div>
              </div>
              <p className="min-w-[50px] text-[1.1em]">
                {(bagCoffee.units! * bagCoffee.price!)
                  .toFixed(2)
                  .replace(".", ",")}{" "}
                €
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Successful;
