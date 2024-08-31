"use client";
import FormLogin from "@/components/FormLogin";
import ToastAlert from "@/components/ToastAlert";
import { useUser } from "@/context/LoginUser";
import React, { useEffect, useState } from "react";

const Access = () => {
  const { isLogin, user } = useUser();
  const [isToast, setIsToast] = useState(false);
  const [validFormInfo, setValidFormInfo] = useState("");
  useEffect(() => {
    setTimeout(() => {
      return isLogin === false && setValidFormInfo("");
    }, 3000);
    return;
  }, [isToast || isLogin]);

  return (
    <section className="pt-24 md:pt-32 text-[#0c1225] bg-white min-h-screen w-full flex flex-col items-center gap-3">
      <h2 className="title text-black">Area de Acceso</h2>

      {isLogin ? (
        <article className="w-full">
          <p className="text-lg text-center mt-[8%]">Bienvenido {user?.name}</p>
        </article>
      ) : (
        <FormLogin setIsToast={setIsToast} setValidFormInfo={setValidFormInfo} />
      )}
      {isToast && (
        <ToastAlert
          title={validFormInfo === "ok" ? "Bienvenido..." : "Error en datos."}
          valid={validFormInfo === "ok" ? true : false}
          isToast={true}
          setIsToast={setIsToast}
        />
      )}
    </section>
  );
};

export default Access;
