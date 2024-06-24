import { Outfit } from "next/font/google";
import "./globals.css";
import "../assets/css/loader.css";
import { ControlDisplayProvider } from "@/context/ControlDisplay";
import DisplayNavBar from "@/components/DisplayNavBar";
import CopyRight from "@/components/CopyRight";
import { GetProductsProvider } from "@/context/GetProducts";
import { PayProducts, PayProductsProvider } from "@/context/PayCoffee";

const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="https://i.ibb.co/HhX4VdS/favicon.png"
        />

        <meta name="description" content="Café de Primera" />
        <meta property="og:url" content="" />
        {/* Cuando surja el Deploy */}
        <meta property="og:title" content="Café con Aroma" />
        <meta
          property="og:description"
          content="Comercializadora de café con 30 años de tradición y experiencia, exportamos a Europa, Estados Unidos, y todo Latinoamérica."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <meta
          property="og:image"
          content="https://i.ibb.co/mcx7zBj/social.png"
        />
      </head>
      <body className={outfit.className}>
        <ControlDisplayProvider>
          <GetProductsProvider>
            <PayProductsProvider>
              <DisplayNavBar />
              {children}
              <CopyRight />
            </PayProductsProvider>
          </GetProductsProvider>
        </ControlDisplayProvider>
      </body>
    </html>
  );
}
