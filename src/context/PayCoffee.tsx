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
  invoice?: string;
  identity?: string;
  date?: string;
  time?: string;
  office?: string;
  delivery: string;
  payDelivery: number;
  subtotal: number;
  total: number;
  quantity: number;
  product: Product[];
};

interface PayProductsContextType {
  local: Product[];
  setLocal: Dispatch<SetStateAction<Product[]>>;
  total: number;
  setTotal: Dispatch<SetStateAction<number>>;
  controlRender: number;
  setControlRender: Dispatch<SetStateAction<number>>;
  ttotal: TotalInitValue;
  setTtotal: Dispatch<SetStateAction<TotalInitValue>>;
}

const defaultValue: PayProductsContextType = {
  local: [],
  setLocal: () => {},
  total: 0,
  setTotal: () => {},
  controlRender: 0,
  setControlRender: () => {},

  ttotal: {
    invoice: "",
    identity: "",
    date: "",
    time: "",
    office: "",
    delivery: "normal",
    subtotal: 0,
    total: 0,
    quantity: 0,
    payDelivery: 0,
    product: [],
  },
  setTtotal: () => {},
};

export const PayProducts = createContext<PayProductsContextType>(defaultValue);

export const PayProductsProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [local, setLocal] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [ttotal, setTtotal] = useState<TotalInitValue>({
    invoice: "",
    identity: "",
    date: "",
    time: "",
    office: "",
    delivery: "normal",
    subtotal: 0,
    total: 0,
    quantity: 0,
    payDelivery: 0,
    product: [],
  });

  const [controlRender, setControlRender] = useState<number>(0);

  const updateState = () => {
    const storedProducts = localStorage.getItem("buy");
    const itemsLocalStorage: TotalInitValue = storedProducts
      ? JSON.parse(storedProducts)
      :{ delivery: "normal", payDelivery: 0, subtotal: 0, total: 0, quantity: 0, product: [] };
    const balance = itemsLocalStorage.product.reduce(
      (sum, product) => {
        sum.quantityReduce += product.units!;
        sum.subtotalReduce += product.units! * product.price!;
        return sum;
      },
      { quantityReduce: 0, subtotalReduce: 0 }
    );
    const updatedTotal = itemsLocalStorage.payDelivery + balance.subtotalReduce;
    const updatedState = {
      ...itemsLocalStorage,
      quantity: balance.quantityReduce,
      subtotal: balance.subtotalReduce,
      total: updatedTotal,
    };
    setTtotal(updatedState);
  return  localStorage.setItem("buy", JSON.stringify(updatedState));
  };
  useEffect(() => {
    updateState();
  }, []);

  /* LS inicial */
  useEffect(() => {
    updateState();
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

/* Actualizacion de cantidades y precio */
/*    */
