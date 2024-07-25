import Contact from "@/components/Contact";
import React from "react";

const page = () => {
  return (
    <section className="pt-20 min-h-screen w-full bg-white text-black flex flex-col justify-center items-center gap-5">
      <h1 className="text-center py-4 title">Contacta con Aroma Café</h1>

        <p className=" text-base font-normal w-[80%]">
          ¡Hablemos! En Aroma Café, queremos asegurarnos de que tu experiencia
          con nosotros sea la mejor. Ya sea que tengas dudas sobre nuestros
          productos, desees realizar un pedido especial o simplemente quieras
          compartir tus sugerencias, estamos aquí para escucharte.{" "}
        </p>
  


          <Contact />
    </section>
  );
};

export default page;
