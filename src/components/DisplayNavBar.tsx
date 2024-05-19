"use client";
import { useControlDisplay } from "@/context/ControlDisplay";
import React from "react";
import NavBar from "./NavBar";
import ModalNavBar from "./ModalNavBar";

const DisplayNavBar = () => {
  const { windowWidth } = useControlDisplay();
  return <>
  {windowWidth > 750 ? <NavBar /> : <ModalNavBar />}
  </>;
};

export default DisplayNavBar;
