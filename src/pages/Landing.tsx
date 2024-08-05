import CardsInfo from "@/components/CardsInfo";
import Hero from "@/components/Hero";
import NewsCoffee from "@/components/NewsCoffee";
import React from "react";
import Footer from "@/components/Footer";
import Location from "@/components/Location";
import ContactUs from "@/components/ContactUs";
import FaqLanding from "@/components/FaqLanding";

const Landing = () => {
  return (
    <>
      <main className=" w-full flex flex-col items-center justify-between">
        <Hero />
        <CardsInfo />
        <NewsCoffee />
        <FaqLanding />
        <Location />
        <ContactUs />
        <Footer />
      </main>
    </>
  );
};

export default Landing;
