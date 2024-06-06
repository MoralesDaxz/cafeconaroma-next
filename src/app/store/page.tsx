import CardsInfo from "@/components/CardsInfo";
import CoffeeBags from "@/components/CoffeeBags";
import Footer from "@/components/Footer";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="pt-20 w-full min-h-screen">
      <h2 className="text-[#2B5A45] title py-5">Últimos orígenes</h2>
      <CoffeeBags units={20}/>
      <CardsInfo/>
      <Footer />
    </section>
  );
};

export default page;
