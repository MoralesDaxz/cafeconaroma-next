import CarouselCoffee from "@/components/CarouselCoffee";
import React from "react";

const page = () => {
  return (
    <section className="pt-20 md:pt-28 min-h-screen w-full bg-white text-black flex flex-col items-center gap-5">
      <h1 className="title">Dirigido a compañias</h1>
      <p>
        Café con Aroma se compromete a ofrecerte granos de café de la más alta
        calidad a precios competitivos. Nuestra selección cuidadosa y procesos
        de tostado aseguran un producto excepcional en cada entrega. Al combinar
        calidad superior con precios atractivos, te ayudamos a destacarte en el
        mercado y a satisfacer a tus clientes más exigentes. Elige la mejor
        relación calidad-precio con nosotros.
      </p>
      <p>
        Valoramos a los agricultores que hacen posible nuestro café. Al eliminar
        intermediarios, garantizamos un comercio justo que beneficia
        directamente a los productores. Esto no solo asegura un precio justo
        para ellos, sino que también te ofrece un café de mayor calidad y
        frescura. Apoya un comercio ético y sostenible con cada compra al por
        mayor.
      </p>
      <p>
        Entendemos la importancia del tiempo en tu negocio. Por eso, hemos
        optimizado nuestros procesos para reducir significativamente el tiempo
        de exportación. Esto garantiza que recibas nuestros granos de café
        premium de manera rápida y eficiente, manteniendo siempre su frescura y
        calidad. Confía en nosotros para entregas puntuales que mantienen tu
        negocio en marcha.
      </p>
      <div className="w-full">
        <CarouselCoffee></CarouselCoffee>
      </div>
    </section>
  );
};

export default page;
