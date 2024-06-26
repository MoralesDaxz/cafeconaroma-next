"use client";
import { useControlDisplay } from "@/context/ControlDisplay";
import React from "react";
import NavBar from "./NavBar";
import ModalNavBar from "./ModalNavBar";
import ModalCar from "./ModalCar";

const DisplayNavBar = () => {
  const { windowWidth } = useControlDisplay();
  /* Nombrar bien las navbar utilizables en movil o pc 
  el componente de bolsa debe estar aislado*/
  return (
    <div>
      <ModalCar display={windowWidth} />
      {windowWidth > 750 ? <NavBar /> : <ModalNavBar />}
    </div>
  );
};

export default DisplayNavBar;
