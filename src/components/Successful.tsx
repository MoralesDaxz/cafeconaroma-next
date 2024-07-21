"use client";

import { Order } from "@/interfaces/interfaces";
import { getKeyLocal } from "@/utils/localStorageItems";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { TbCoffee } from "react-icons/tb";
const Successful = () => {
  const [order, setOrder] = useState<Order>({ product: [] });
  useEffect(() => {
    const itemsLocalStorage = getKeyLocal("invoice");
    setOrder(itemsLocalStorage);
  }, []);
  /* bajar text-[12px] se alarga la tabla */
  return (
    <section className="pb-2 bg-[white] text-black min-h-screen w-full flex flex-col items-center justify-center">
      <div className="w-[90%] sm:w-[50%] pt-6 pb-1 px-6 rounded-md bg-success flex flex-col">
        <div className="w-full flex items-center justify-center gap-2">
          <TbCoffee className="w-[1.8rem] h-[1.8rem]" />
          <h2 className=" text-3xl font-semibold">Café con Aroma S.L.</h2>
        </div>
        <div className="self-center w-[70%] bg-[#eeebeba4] backdrop-blur-[2px] my-4 p-4 rounded-md">
          <p>
            <b>Hola!</b> {order.name}
          </p>
          <h2>
            <b>Pedido Nº: </b>
            {order.invoice}
          </h2>
          <p>
            <b>Destino:</b> {order.comunity}, {order.province}.
          </p>
        </div>

        <div className="w-full">
          <table className="w-full table-border">
            <tr>
              <th>Cant.</th>
              <th>Producto</th>
              <th>Empaque</th>
              <th>Valor</th>
            </tr>
            {order.product?.map((item, index) => {
              return (
                <tr
                  className={index % 2 === 0 ? "bg-[#bad4af]" : ""}
                  key={index}
                >
                  <td>{item.units}</td>
                  <td className="capitalize">{item.brand}</td>
                  <td>{item.package} gr</td>
                  <td>
                    {(item.units! * item.price!).toFixed(2).replace(".", ",")} €
                  </td>
                </tr>
              );
            })}
          </table>
        </div>

        {order.delivery === "normal" ? (
          <p className="text-sm text-center mt-4">
            <i>Estarás recibiéndolo entre los próximos 5 a 7 días hábiles</i>
          </p>
        ) : (
          <p className="text-sm text-center mt-4">
            <i>Estarás recibiéndolo en las próximas 24 Horas</i>
          </p>
        )}
      </div>
    </section>
  );
};

export default Successful;
