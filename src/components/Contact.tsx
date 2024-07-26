import React from "react";
import { IoMailOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import FormContact from "./FormHero";

const Contact = () => {
  return (
    <section className="w-full sm:h-[460px] flex flex-col sm:flex sm:flex-row sm:justify-center py-3 sm:py-0 px-3 sm:px-7 gap-8 sm:gap-3 bg-[#E2DFD7]">
      <article className=" max-w-[580px] flex flex-col gap-4 text-[#777E89] justify-center">
        <h2 className="text-[#111933] font-medium">
          Entra en contacto con nosotros
        </h2>
        <p>
          Si tienes dudas, ponte en contacto con nosotros a través del
          formulario y te responderemos lo antes posible.
        </p>
        <p>
          También nos puedes encontrar en la siguiente dirección o
          a través del teléfono de la tienda.
        </p>
        <div className="flex flex-col">
          <p>742 Evergreen Terrace</p>
          <p>Springfield, OR 12345</p>
        </div>
        <div className="flex items-center gap-2">
          <IoMailOutline />
          <p>support@example.com</p>
        </div>
        <div className="flex items-center gap-2">
          <LuPhone />
          <p>+1 (555) 123-4567</p>
        </div>
      </article>
      <article className="w-full sm:min-w-[300px] sm:max-w-[580px] flex items-center justify-center">
        <FormContact />
      </article>
    </section>
  );
};

export default Contact;
