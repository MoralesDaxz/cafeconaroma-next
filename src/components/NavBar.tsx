import { useControlDisplay } from "@/context/ControlDisplay";
import { useUser } from "@/context/LoginUser";
import { route } from "@/utils/boxRoutes";
import Link from "next/link";
import React from "react";
import { LuPhone } from "react-icons/lu";
import { TbCoffee } from "react-icons/tb";
import ProfileSticky from "./ProfileSticky";

const NavBar = () => {
  const { windowWidth, windowScroll } = useControlDisplay();
  const { isUser, user } = useUser();
  return (
    <div
      className={`text-lg fixed z-10 min-w-[330px] w-full h-16 flex justify-evenly items-center transition-all duration-300 ${
        windowScroll > 40 ? "bg-[#2b2a2be0] backdrop-blur-sm" : "bg-[#2B2A2B]"
      }`}
    >
      <Link href={"/"} className="flex items-center gap-2">
        {/* Control en ancho de pantalla "saturacion de iconos". */}
        {windowWidth > 1000 && <h2 className=" text-2xl">cafeconaroma.com</h2>}
        <TbCoffee className="w-[1.5rem] h-[1.5rem]" />
      </Link>

      <div className="flex sm:gap-4 lg:gap-6">
        {route.map((item, index) => {
          return (
            <Link key={index} href={item.link}>
              {item.title}
            </Link>
          );
        })}
      </div>
      {/* Control en ancho de pantalla "saturacion de iconos". */}
      {windowWidth > 1150 && (
        <div className="flex items-center gap-2">
          <LuPhone /> <p>+34 919 49 05 00</p>
        </div>
      )}
      {/* Control de inicio de Sesion */}
      {isUser ? (
        <ProfileSticky />
      ) : (
        <Link href={"/login"}>
          <p className="font-semibold py-2 px-4 bg-[#515051] flex items-center justify-center rounded">
            Iniciar sesión
          </p>
        </Link>
      )}
    </div>
  );
};

export default NavBar;
