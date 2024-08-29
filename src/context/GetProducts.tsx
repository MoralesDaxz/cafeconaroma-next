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
  const urlCoffee = process.env.NEXT_PUBLIC_URL_API_COFFEE;

  const getProduct = async () => {
    try {
      const promise = await fetch(urlCoffee! + "products");
      const response = await promise.json();
      return setCoffee(response.products);
    } catch (error) {
      /* Podriamos generar una pagina 404 */
      return console.log(error);
    }
  };
  const initApi = async () => {
    /* Inicializamos API ya que al estar en Render - Gratis, despues de un tiempo dejan de estar disponibles */
    const arrApi = [
      process.env.NEXT_PUBLIC_URL_API_COFFEE,
      process.env.NEXT_PUBLIC_URL_API_ORDER,
      process.env.NEXT_PUBLIC_URL_API_USERS,
    ];
    const promises = arrApi.map(async (url) => {
      const res = await fetch(url!);
      const data = await res.json();
      return data;
    });
    const results = await Promise.all(promises);
    return;
  };
  useEffect(() => {
    getProduct();
    initApi();
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
