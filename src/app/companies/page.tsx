import CarouselCoffee from "@/components/CarouselCoffee";
import Image from "next/image";
import React from "react";
import coffeePic from "@/assets/images/companies/clean-coffee.jpg";
import farmer from "@/assets/images/companies/farmers.jpg";
import exportPic from "@/assets/images/companies/export.jpg";

const page = () => {
  return (
    <section className="pt-20 md:pt-28 min-h-screen w-full bg-companies text-black flex flex-col items-center gap-5">
      <h1 className="title">Dirigido a compañias</h1>

      <article className="px-5 flex flex-col items-center gap-3 w-[90%]">

        <div className="flex p-2  backdrop-blur-sm rounded">
          <p className="">
            Café con Aroma se compromete a ofrecerte granos de café de la más
            alta calidad a precios competitivos. Nuestra selección cuidadosa y
            procesos de tostado aseguran un producto excepcional en cada
            entrega. 
          </p>
          <Image
            src={coffeePic}
            width={500}
            height={500}
            className="w-[250]"
            alt="clean-coffee"
          />
          <p>Al combinar calidad superior con precios atractivos, te
            ayudamos a destacarte en el mercado y a satisfacer a tus clientes
            más exigentes. Elige la mejor relación calidad-precio con nosotros.</p>
        </div>
        <div>
          <p>
            Valoramos a los agricultores que hacen posible nuestro café. Al
            eliminar intermediarios, garantizamos un comercio justo que
            beneficia directamente a los productores. Esto no solo asegura un
            precio justo para ellos, sino que también te ofrece un café de mayor
            calidad y frescura. Apoya un comercio ético y sostenible con cada
            compra al por mayor.
          </p>
          <Image
            src={farmer}
            width={500}
            height={500}
            className="w-[250]"
            alt="farmer"
          />
        </div>
        <div>
          <p>
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
            className="w-[250]"
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
