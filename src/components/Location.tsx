import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import bakery from "@/assets/images/bakery.jpg"
const Location = () => {
  return (
    <section className="bg-[#f6f5f3]">
      <article>
        <h3 className="title">Pruébalo en nuestro coffee shop</h3>
        <p>
          Visita nuestra cafetería en el centro de la ciudad para probar los
          granos de café antes de hacer tu pedido y llévate un descuento
        </p>
        <Link
          href={"https://maps.app.goo.gl/C4ehyrkk2vKedmLx5"}
          className="flex items-center gap-3"
        >
          <p>Cómo llegar</p> <FaArrowRightLong />
        </Link>
      </article>
      <article>
        <Image className="w-[450px]" src={bakery} width={1000} height={1000} alt="retiro_coffee"></Image>
      </article>
    </section>
  );
};

export default Location;
