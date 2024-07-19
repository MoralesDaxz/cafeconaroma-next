import { Bag, Product } from "@/interfaces/interfaces";

/* Agregar producto a LS */
export const AddToLocal = ({ bagCoffee }: Bag) => {
  const itemsLocalStorage = getKeyLocal("buy");
  /* Nuevo producto con argunmentos proporcionados */
  const coffee = {
    _id: bagCoffee._id,
    img_url: bagCoffee.img_url,
    brand: bagCoffee.brand,
    units: 1,
    price: bagCoffee.price,
    package: bagCoffee.package,
  };
  /* Evaluamos si existe o no para agregar unidades*/
  const existingProduct = itemsLocalStorage.product.find(
    (item: Product) => item._id === bagCoffee._id
  );
  if (existingProduct) {
    existingProduct.units += 1;
  } else {
    itemsLocalStorage.product.unshift(coffee);
  }
  return localStorage.setItem("buy", JSON.stringify(itemsLocalStorage));
};

/* Eliminar producto de LS */
export const SubsToLocal = ({ bagCoffee }: Bag) => {
  const itemsLocalStorage = getKeyLocal("buy");
  const existingProduct = itemsLocalStorage.product.find(
    (item: Product) => item._id === bagCoffee._id
  );
  if (existingProduct.units >= 1) {
    existingProduct.units -= 1;
    const filtered = itemsLocalStorage.product.filter(
      (item: Product) => item.units! >= 1
    );
    const newData = {...itemsLocalStorage, product: filtered }
    return localStorage.setItem(
      "buy",
      JSON.stringify(newData)
    );
  }
};
/* Informacion de LS */
export const getKeyLocal = (keyLocal: string) => {
  const itemsReset = {
    subtotal: 0,
    total: 0,
    quantity: 0,
    product: [],
    sent: { delivery: "normal", payDelivery: 0 },
  }; /* Default, generamos en LS un valor para empezar, si no existe */
  const storedProducts = localStorage.getItem(keyLocal);
  const buyLocal = storedProducts ? JSON.parse(storedProducts) : itemsReset;
  const getKeyLS = JSON.parse(
    storedProducts!
  ); /* Obtener key de LS segun Key */
  return keyLocal === "buy" ? buyLocal : getKeyLS;
};
export const resetBuyLocal = () => {
  const itemsReset = {
    subtotal: 0,
    total: 0,
    quantity: 0,
    product: [],
    sent: { delivery: "normal", payDelivery: 0 },
  }; /* Deafult, para iniciar nueva operacion en 0 */
  return localStorage.setItem("buy", JSON.stringify(itemsReset));
};

export async function updateData(newData: any) {
  try {
    const response = await fetch("/api/writeOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Error al actualizar los datos:", error);
  }
}
