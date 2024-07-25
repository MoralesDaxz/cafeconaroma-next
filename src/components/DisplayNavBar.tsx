"use client";
import { useControlDisplay } from "@/context/ControlDisplay";
import React from "react";
import NavBar from "./NavBar";
import DisplayModalCar from "./DisplayModalCar";
import NavBarMovil from "./NavBarMovil";

const DisplayNavBar = () => {
  const { windowWidth } = useControlDisplay();

  return (
    <div>
      <DisplayModalCar />
      {windowWidth > 750 ? <NavBar /> : <NavBarMovil />}
    </div>
  );
};

export default DisplayNavBar;
