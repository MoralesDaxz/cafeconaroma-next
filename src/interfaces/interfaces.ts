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
/* Add, sub, bags */
type Bag = {
  bagCoffee: Product;
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
  anyMore?: string;
  identity?: string;
  delivery?: string;
  payDelivery?: number;
};
/* Form ChoosePay */
type ChoosePayFormData = {
  payTipe: string;
  name: string;
  identity: string;
  mail: string;
  phone: string;
  comunity: string;
  province: string;
  street: string;
  code: string;
  plant: string;
  door: string;
  anyMore: string;
};
/* Successfull */
type Order = {
  invoice?: string;
  product?: Product[];
  comunity?: string;
  province?: string;
  name?: string;
  extra?: string;
  delivery?: string;
  code?:string;
};
/* PayCoffee */
type TotalInitValue = {
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

export type {
  Product,
  TotalInitValue,
  PayProductsContextType,
  ControlProps,
  ChoosePayFormData,
  Order,
  Bag
};
