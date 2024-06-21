"use client";
import { getCoffee } from "@/utils/apiGetCoffee";
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

type ControlProps = {
  coffee: Product[] | undefined;
  setCoffee: Dispatch<SetStateAction<Product[] | undefined>>;
};

/* const localInfo = localStorage.setItem('buys', JSON.stringify([])) */
export const GetProducts = createContext<ControlProps>({
  coffee: [],
  setCoffee: () => {},
});

export const GetProductsProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [coffee, setCoffee] = useState<Product[]>();
  const url = process.env.NEXT_PUBLIC_URL_API_COFFEE;
  useEffect(() => {
    getCoffee(url!).then((data: Product[]) => {
      setCoffee(data);
    });
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
export const useProducts = () => useContext<ControlProps>(GetProducts);
