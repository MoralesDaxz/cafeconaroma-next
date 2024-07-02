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

interface PayProductsContextType {
  local: Product[];
  setLocal: Dispatch<SetStateAction<Product[]>>;
  total: number;
  setTotal: Dispatch<SetStateAction<number>>;
  controlRender: number;
  setControlRender: Dispatch<SetStateAction<number>>;
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
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
};

export const PayProducts = createContext(defaultValue);
export const PayProductsProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [local, setLocal] = useState<Product[]>(defaultValue.local);
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [controlRender, setControlRender] = useState(0);
  useEffect(() => {
    const storedProducts = localStorage.getItem("coffee");
    const products = storedProducts ? JSON.parse(storedProducts) : [];
    setLocal(products);
  
    return;
  }, []);

  useEffect(() => {
    const storedProducts = localStorage.getItem("coffee");
    const products:Product[] = storedProducts ? JSON.parse(storedProducts) : [];
    setLocal(products);
    const quantityLS = products.reduce((sum, product) => {
      return sum + product.units!;
    }, 0);
    setQuantity(quantityLS);
    return;
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
      }}
    >
      {children}
    </PayProducts.Provider>
  );
};

// Crear un hook personalizado para usar los estados dentro de otros componentes
export const usePayProducts = () => useContext(PayProducts);
