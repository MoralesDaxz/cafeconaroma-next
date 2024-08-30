"use client";
import FormLogin from "@/components/FormLogin";
import ModalRedirect from "@/components/ModalRedirect";
import { useUser } from "@/context/LoginUser";
import React from "react";

const Access = () => {
  const { isUser } = useUser();

  return (
    <section className="pt-24 md:pt-32 text-[#0c1225] bg-white min-h-screen w-full flex flex-col justify-center items-center gap-3">
        <>
          <h2 className="title text-black">Accede</h2>
          <FormLogin />
        </>
     {/*  {isUser ? (
        <ModalRedirect
          route="/"
          text="Hay una sesión iniciada, debes cerrar sesión para utilizar este sitio, serás redireccionado a la página"
          page="Principal."
        />
      ) : (
      )} */}
    </section>
  );
};

export default Access;
