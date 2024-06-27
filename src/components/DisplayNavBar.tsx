"use client";
import { useControlDisplay } from "@/context/ControlDisplay";
import React from "react";
import NavBar from "./NavBar";
import ModalNavBar from "./ModalNavBar";
import DisplayModalCar from "./DisplayModalCar";

const DisplayNavBar = () => {
  const { windowWidth } = useControlDisplay();

  return (
    <div>
      <DisplayModalCar />
      {windowWidth > 750 ? <NavBar /> : <ModalNavBar />}
    </div>
  );
};

export default DisplayNavBar;
