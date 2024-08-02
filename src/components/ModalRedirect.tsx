"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ModalRedirect = () => {
  const router = useRouter();
  const [sec, setSec] = useState(5);
  useEffect(() => {
    setTimeout(() => {
      setSec(sec - 1);
    }, 1000);
    sec === 1 && router.push("/");
  }, [sec]);
  return (
    <div className="absolute top-0 left-0 w-full min-h-screen flex justify-center items-center bg-[#000000f5] backdrop-blur-sm text-white z-30">
      <div className="w-[70%] flex flex-col items-center justify-center gap-10">
        <p className="text-[1.7rem] font-light text-center ">
          No hay compras realizadas, seras redireccionado en un momento a la{" "}
          <Link href={"/"} className="italic font-medium ">
            pagina principal
          </Link>
          .
        </p>
        <p className="text-[4rem] font-bold">( {sec > 0 ? sec : 0} )</p>
      </div>
    </div>
  );
};

export default ModalRedirect;
