"use client";

/* Componente encargado del manejo de LS, total, y  componente ModalCar */
import {
  useState,
  createContext,
  useEffect,
  FC,
  useContext,
  SetStateAction,
  Dispatch,
} from "react";

type Product = {
  _id?: string;
  available?: true;
  brand?: string;
  img_url?: string;
  price?: number;
  package?: string;
  units?: number;
};
type TotalInitValue = {
  delivery: string;
  payDelivery: number;
  total: number;
};
 type TotalInitValuee = {
  delivery: "normal";
  payDelivery: 0;
  total: 0;
}; 
interface PayProductsContextType {
  local: Product[];
  setLocal: Dispatch<SetStateAction<Product[]>>;
  total: number;
  setTotal: Dispatch<SetStateAction<number>>;
  controlRender: number;
  setControlRender: Dispatch<SetStateAction<number>>;
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
  ttotal: TotalInitValue;
  setTtotal:  Dispatch<SetStateAction<TotalInitValue|undefined>>;
}

const defaultValue: PayProductsContextType = {
  local: [],
  setLocal: () => {},
  total: 0,
  setTotal: () => {},
  controlRender: 0,
  setControlRender: () => {},
  quantity: 0,
  setQuantity: () => {},
  ttotal: { delivery: "normal", payDelivery: 0, total: 0 },
  setTtotal:()=>{},
};

export const PayProducts = createContext(defaultValue);
export const PayProductsProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [local, setLocal] = useState<Product[]>(defaultValue.local);
  const [total, setTotal] = useState(0);
  const [ttotal, setTtotal] = useState<TotalInitValuee>({ delivery: "normal", payDelivery: 0, total: 0 });
  const [quantity, setQuantity] = useState(0);
  const [controlRender, setControlRender] = useState(0);
  /* LS inicial */
  useEffect(() => {
    const storedProducts = localStorage.getItem("coffee");
    const products = storedProducts ? JSON.parse(storedProducts) : [];
    return setLocal(products);
  }, []);

  /* Actualizacion de cantidades y precio */
  useEffect(() => {
    const storedProducts = localStorage.getItem("coffee");
    const products: Product[] = storedProducts
      ? JSON.parse(storedProducts)
      : [];
    setLocal(products);
    const quantityLS = products.reduce((sum, product) => {
      return sum + product.units!;
    }, 0);

    return setQuantity(quantityLS);
  }, [controlRender]);
  return (
    <PayProducts.Provider
      value={{
        local,
        setLocal,
        total,
        setTotal,
        controlRender,
        setControlRender,
        quantity,
        setQuantity,
        ttotal,
        setTtotal,
      }}
    >
      {children}
    </PayProducts.Provider>
  );
};

// Crear un hook personalizado para usar los estados dentro de otros componentes
export const usePayProducts = () => useContext(PayProducts);
