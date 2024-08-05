"use client";
import { usePayProducts } from "@/context/PayCoffee";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import IsModal from "./IsModal";
import { usePathname } from "next/navigation";
import Link from "next/link";
import BagsPurshased from "./BagsPurshased";
import { TbShoppingCart } from "react-icons/tb";
import { TbShoppingCartStar } from "react-icons/tb";
import { FaArrowRightLong } from "react-icons/fa6";
const DisplayModalCar = () => {
  const { buysLocalStorage } = usePayProducts();
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();
  useEffect(() => {
    setIsOpen(false);
  }, [path]);

  /* Cuando queda el carrito vacio y envio urgente sigue cobrando el 9 Euros, separar para que muestre "Escoja un producto" */
  return (
    <div className="flex flex-col items-center rounded-md">
      {buysLocalStorage.subtotal > 0 && path !== "/checkout" && (
        <IsModal isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
      {isOpen ? (
        <div className="flex flex-col items-center w-[85%] sm:w-[450px] fixed top-20 z-20 sm:right-2 bg-[#00000098] backdrop-blur-md  transition-all duration-500 rounded-md">
          <div className="flex justify-center items-center bg-[#26a826] w-full text-base sm:text-[1.4em] rounded-se-md rounded-ss-md">
            <Link
              className="cursor-pointer my-4"
              href={buysLocalStorage.product.length >= 1 ? "/pay" : "/store"}
              title={buysLocalStorage.product.length >= 1 ? "Pagar" : "Escoger"}
            >
              {buysLocalStorage.product.length >= 1 ? (
                <div className="flex items-end w-fit gap-3">
                  <p>Pagar:</p>
                  <p className="text-base">
                    {buysLocalStorage.subtotal.toFixed(2).replace(".", ",")} €
                  </p>
                  <p>+</p>
                  <p className="text-base">
                    Envio&nbsp;
                    {buysLocalStorage.sent.delivery !== "normal"
                      ? buysLocalStorage.sent.payDelivery
                          ?.toFixed(2)
                          .replace(".", ",") + "  €"
                      : "Gratis"}
                  </p>
                </div>
              ) : (
                <p className="text-center">Escoja un producto</p>
              )}
            </Link>
            <IoClose
              onClick={() => {
                setIsOpen(false);
              }}
              className="absolute top-1 right-2 cursor-pointer"
              title="Cerrar"
            />
          </div>
          <div className="w-full h-[380px] overflow-auto mb-12">
            {buysLocalStorage.subtotal > 0 ? (
              <BagsPurshased />
            ) : (
              <p className="text-center mt-[30%] text-[1.2em]">
                Carrito vacio!
              </p>
            )}
          </div>
          {buysLocalStorage.product.length >= 1 ? (
            <Link
              href={"/pay"}
              className=" bg-[#26a826] text-base py-2 fixed bottom-0 left-0 flex justify-center items-center gap-3 w-full opacity-90 rounded-ee-md rounded-es-md"
            >
              <p>Total</p>
              <p>{buysLocalStorage.total.toFixed(2).replace(".", ",")} €</p>
              <FaArrowRightLong></FaArrowRightLong>
              {buysLocalStorage.sent.delivery !== "normal" ? (
                <TbShoppingCartStar className="w-[30px] h-[30px]" />
              ) : (
                <TbShoppingCart className="w-[30px] h-[30px]" />
              )}
            </Link>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center w-[80%] sm:w-[450px] h-0 overflow-y-auto fixed top-20 sm:top-20 sm:right-2 z-20  bg-[#000000bb] backdrop-blur-md rounded-md transition-all duration-500"></div>
      )}
    </div>
  );
};

export default DisplayModalCar;
