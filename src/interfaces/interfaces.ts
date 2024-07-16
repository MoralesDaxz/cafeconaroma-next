import { Dispatch, SetStateAction } from "react";

type Product = {
  _id?: string;
  available?: true;
  brand?: string;
  img_url?: string;
  price?: number;
  package?: string;
  units?: number;
};

type Pay = {
  payClient?: string;
  name?: string;
  mail?: string;
  phone?: string;
  comunity?: string;
  province?: string;
  street?: string;
  code?: string;
  plant?: string;
  door?: string;
  identity?:string;
  delivery: string;
  payDelivery: number;
};

/* PayCoffee */
type TotalInitValue = {
  invoice?: string;
  date?: string;
  time?: string;
  office?: string;
  subtotal: number;
  total: number;
  quantity: number;
  product: Product[];
  sent: Pay;
};
interface PayProductsContextType {
  local: Product[];
  setLocal: Dispatch<SetStateAction<Product[]>>;
  total: number;
  sebuysLocalStorage: Dispatch<SetStateAction<number>>;
  controlRender: number;
  setControlRender: Dispatch<SetStateAction<number>>;
  buysLocalStorage: TotalInitValue;
  setbuysLocalStorage: Dispatch<SetStateAction<TotalInitValue>>;
}
/* ControlDisplay */
type ControlProps = {
  closeModal: boolean;
  setCloseModal: Dispatch<SetStateAction<boolean>>;
  windowWidth: number;
  setWindowWidth: Dispatch<SetStateAction<number>>;
  windowScroll: number;
  setWindowScroll: Dispatch<SetStateAction<number>>;
};

export type { Product, TotalInitValue, PayProductsContextType, ControlProps };
