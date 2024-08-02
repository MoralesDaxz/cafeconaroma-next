"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ModalRedirect = () => {
  const router = useRouter();
  const [sec, setSec] = useState(5);
  useEffect(() => {
    setTimeout(() => {
      setSec(sec - 1);
    }, 1000);
    sec === 0 && router.push("/");
  }, [sec]);
  return (
    <div className="absolute w-full h-screen bg-[#000000d0] text-white">
      <p>Aun no has comprado, seras redireccionado a la pagina principal.</p>
      <p>{sec}</p>
    </div>
  );
};

export default ModalRedirect;
