import BagsCoffee from "@/components/BagsCoffee";
import CardsInfo from "@/components/CardsInfo";
import Footer from "@/components/Footer";
import React from "react";

const page = () => {
  return (
    <section className="w-full min-h-screen ">
      <article className="pt-20 pb-10 bg-white">
        <h2 className="text-[#2B5A45] title  my-8">Últimos orígenes</h2>
        <BagsCoffee units={20} />
      </article>
      <CardsInfo />
      <Footer />
    </section>
  );
};

export default page;
