"use client";

/* Componente encargado de obtener productos de la API */

import {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  FC,
  useContext,
} from "react";

type Product = {
  _id?: string;
  available?: true;
  brand?: string;
  img_url?: string;
  price?: number;
  package?: string;
};

type GetProps = {
  coffee: Product[] | undefined;
  setCoffee: Dispatch<SetStateAction<Product[] | undefined>>;
};

export const GetProducts = createContext<GetProps>({
  coffee: [],
  setCoffee: () => {},
});

export const GetProductsProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [coffee, setCoffee] = useState<Product[]>();
  const url = process.env.NEXT_PUBLIC_URL_API_COFFEE;
 
  useEffect(() => {
    (async () => {
      const promise = await fetch(url!);
      const response = await promise.json();
      return setCoffee(response.products);
    })();
  }, []);
  return (
    <GetProducts.Provider
      value={{
        coffee,
        setCoffee,
      }}
    >
      {children}
    </GetProducts.Provider>
  );
};
// Crear un hook personalizado para usar los estados dentro de otros componentes
export const useProducts = () => useContext<GetProps>(GetProducts);
