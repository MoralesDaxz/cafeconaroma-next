"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
type Props ={
  route:string;
  text:string;
  page:string;
}
const ModalRedirect:FC <Props>= ({route, text,page}) => {
  const router = useRouter();
  const [seconds, setSeconds] = useState(5);
  useEffect(() => {
    setTimeout(() => {
      setSeconds(seconds - 1);
    }, 1000);
    seconds === 1 && router.push(route);
  }, [seconds]);
  return (
    <div className="absolute top-0 left-0 w-full min-h-screen flex justify-center items-center bg-[#000000f5] backdrop-blur-sm text-white z-30">
      <div className="w-[70%] flex flex-col items-center justify-center gap-10">
        <p className="text-[1.7rem] font-light text-center ">
          {text} &nbsp;
          <Link href={route} className="italic font-medium ">
             {page}
          </Link>
          .
        </p>
        <p className="text-[4rem] font-bold">( {seconds > 0 ? seconds : 0} )</p>
      </div>
    </div>
  );
};

export default ModalRedirect;
