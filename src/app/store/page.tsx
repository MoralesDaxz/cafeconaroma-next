import CardsInfo from "@/components/CardsInfo";
import CoffeeBags from "@/components/CoffeeBags";
import Footer from "@/components/Footer";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="w-full min-h-screen ">
      <article className="pt-20 pb-10 bg-white">
        <h2 className="text-[#2B5A45] title  my-8">Últimos orígenes</h2>
        <CoffeeBags units={20} />
      </article>
      <CardsInfo />
      <Footer />
    </section>
  );
};

export default page;
