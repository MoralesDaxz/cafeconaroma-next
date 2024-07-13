"use client";
import Link from "next/link";
import React from "react";
import { LuPhone } from "react-icons/lu";
import { IoMailOutline } from "react-icons/io5";
import { footerRoute, route } from "@/utils/boxRoutes";
import { TbCoffee } from "react-icons/tb";
const Footer = () => {
  return (
    <section className="bg-[#201815] w-full flex flex-col justify-center sm:flex-row sm:justify-between sm:items-center p-5">
      <article className="sm:w-[40%] flex flex-col gap-3">
        <Link href={"/"} className="flex items-center gap-2">
          <h2 className=" text-2xl">cafeconaroma.com</h2>
          <TbCoffee className="w-[1.5rem] h-[1.5rem]" />
        </Link>
        <p>Te ayudamos</p>
        <div className="flex gap-2 bg-[#505050] w-fit p-4 rounded-md">
          <LuPhone />
          <p>+34 919 49 05 00</p>
        </div>
        <div className="flex gap-2 bg-[#505050] w-fit p-4 rounded-md">
          <IoMailOutline />
          <p>hola@cafeconaroma.com</p>
        </div>
      </article>
      <article className=" w-full sm:w-[60%] flex justify-evenly mt-6 sm:mt-0 sm:flex-wrap sm:gap-6">
        <div className="flex flex-col gap-4">
          {route.map((item, index) => {
            return (
              <Link key={index} href={item.link}>
                {item.title}
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col gap-4">
          {footerRoute.map((item, index) => {
            return (
              <Link key={index} href={item.link}>
                {item.title}
              </Link>
            );
          })}
        </div>
      </article>
    </section>
  );
};

export default Footer;
