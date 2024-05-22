import CardsInfo from "@/components/CardsInfo";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className=" w-full flex flex-col items-center justify-between">
      <Hero/>
      <CardsInfo/>
    </main>
  );
}
