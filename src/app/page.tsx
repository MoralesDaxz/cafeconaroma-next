import CardsInfo from "@/components/CardsInfo";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import NewsCoffee from "@/components/NewsCoffee";

export default function Home() {
  return (
    <main className=" w-full flex flex-col items-center justify-between">
      <Hero/>
      <CardsInfo/>
      <NewsCoffee/>
      <Faq/>
      <Location/>
      <Contact/>
    </main>
  );
}
