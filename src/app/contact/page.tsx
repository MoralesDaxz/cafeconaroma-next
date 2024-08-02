import Contact from "@/components/Contact";
import Image from "next/image";
import React from "react";
import cupCoffee from "@/assets/images/contact-cup.jpg";
const page = () => {

  return (
    <section className="pt-20 md:pt-28 min-h-screen w-full bg-white text-black flex flex-col justify-between items-center gap-5">
      <h1 className="text-center mb-6 title text-[#0c1225]">Contacta con Aroma Café</h1>
      <div className="min-h-[390px] flex flex-wrap gap-4 items-center justify-center w-[90%] mb-5">
        <p className="text-base sm:text-lg font-extralight w-full sm:w-[40%] z-10">
          ¡Hablemos! En <b>Aroma Café</b>, queremos asegurarnos de que tu experiencia
          con nosotros sea la mejor. Ya sea que tengas dudas sobre nuestros
          productos, desees realizar un pedido especial o simplemente quieras
          compartir tus sugerencias, <b><i>estamos aquí para escucharte</i></b>.
        </p>
        <Image
          className="ml-1 sm:w-[50%] float max-w-[350px] rounded-full box-shadow"
          width={0}
          height={0}
          src={cupCoffee}
          alt="contact_img"
        />

      </div>
      <Contact />
    </section>
  );
};

export default page;
