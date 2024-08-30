import BagsCoffee from "@/components/BagsCoffee";
import CardsInfo from "@/components/CardsInfo";
import Footer from "@/components/Footer";
import React from "react";
const Store = () => {
  return (
    <section className="w-full min-h-screen ">
    <article className="pt-24 md:pt-32 pb-10 bg-white">
      <h2 className="text-[#0c1225] title pb-10">Últimos orígenes</h2>
      <BagsCoffee units={20} />
    </article>
    <CardsInfo />
    <Footer />
  </section>
  )
}

export default Store