import CarouselCoffee from "@/components/CarouselCoffee";
import CarouselCompanies from "@/components/CarouselCompanies";
import Image from "next/image";
import React from "react";
import coffeePic from "@/assets/images/companies/clean-coffee.jpg";
import farmer from "@/assets/images/companies/farmers.jpg";
import exportPic from "@/assets/images/companies/export.jpg";

const page = () => {
  return (
    <section className="pt-20 md:pt-28 min-h-screen w-full bg-companies text-black flex flex-col items-center gap-5">
      <h1 className="title text-white">Dirigido a compañias</h1>
    {/* <CarouselCompanies></CarouselCompanies> */}
   {/*    <article className="bg-black h-[200px] w-full flex flex-wrap gap-3 text-white">
        <p>empresas</p>
        <p>empresas</p>
        <p>empresas</p> 
        <p>empresas</p> 
        <p>empresas</p> 
        <p>empresas</p>
      </article> */}
      <article className="sm:mt-10 px-5 flex flex-col items-center gap-5 w-[80%]">
        <div className="flex sm:justify-around sm:items-center gap-4 p-4 bg-[#ffffff75] backdrop-blur-[2px] rounded-md">
          <p className="font-light">
            Café con Aroma se compromete a ofrecerte granos de café de la más
            alta calidad a precios competitivos. Nuestra selección cuidadosa y
            procesos de tostado aseguran un producto excepcional en cada
            entrega.
          </p>
          <Image
            src={coffeePic}
            width={500}
            height={500}
            className="w-[350px] rounded-full shadow-[#95E0A6] shadow-lg"
            alt="clean-coffee"
          />
          <p className="font-light">
            Al combinar calidad superior con precios atractivos, te ayudamos a
            destacarte en el mercado y a satisfacer a tus clientes más
            exigentes. Elige la mejor relación calidad-precio con nosotros.
          </p>
        </div>
        <div className="flex sm:justify-around sm:items-center gap-4 p-4 bg-[#ffffff75] backdrop-blur-[2px] rounded-md">
          <Image
            src={farmer}
            width={500}
            height={500}
            className="w-[350px] rounded-full shadow-[#95E0A6] shadow-lg"
            alt="farmer"
          />
          <p className="font-light">
            Valoramos a los agricultores como Radammel Falkao que hacen posible
            nuestro café. Al eliminar intermediarios, garantizamos un comercio
            justo que beneficia directamente a los productores. Esto no solo
            asegura un precio justo para ellos, sino que también te ofrece un
            café de mayor calidad y frescura. Apoya un comercio ético y
            sostenible con cada compra al por mayor.
          </p>
        </div>
        <div className="flex sm:justify-around sm:items-center gap-4 p-4 bg-[#ffffff75] backdrop-blur-[2px] rounded-md">
          <p className="font-light">
            Entendemos la importancia del tiempo en tu negocio. Por eso, hemos
            optimizado nuestros procesos para reducir significativamente el
            tiempo de exportación. Esto garantiza que recibas nuestros granos de
            café premium de manera rápida y eficiente, manteniendo siempre su
            frescura y calidad. Confía en nosotros para entregas puntuales que
            mantienen tu negocio en marcha.
          </p>
          <Image
            src={exportPic}
            width={500}
            height={500}
            className="w-[350px] rounded-full shadow-[#95E0A6] shadow-lg"
            alt="export"
          />
        </div>
      </article>

      <div className="w-full">
        <CarouselCoffee />
      </div>
    </section>
  );
};

export default page;
