
type Product = {
  _id?: string;
  available?: true;
  brand?: string;
  img_url?: string;
  price?: number;
  package?: string;
  units?: number;
};
type Props = {
  bagCoffee: Product;
};
/* Agregar producto a LS */
export const addLocalStorage = ({ bagCoffee }: Props) => {
  /* Trabajamos con LS dentro de funcion, al montar el componente en primer vuelco nos dara error
    Mientras que en la FN esperara a ser ejecutada con componente ya desplegado */
  const storedProducts = localStorage.getItem("coffee");
  const products = storedProducts ? JSON.parse(storedProducts) : [];

  /* Nuevo producto con argunmentos proporcionados */
  const product = {
    _id: bagCoffee._id,
    img_url: bagCoffee.img_url,
    brand: bagCoffee.brand,
    units: 1,
    price: bagCoffee.price,
    package:bagCoffee.package
  };
  /* Evaluamos si existe o no para agregar unidades*/
  const existingProduct = products.find(
    (item: Product) => item._id === bagCoffee._id
  );
  if (existingProduct) {
    existingProduct.units += 1;
  } else {
    products.unshift(product);
  }
  localStorage.setItem("coffee", JSON.stringify(products));
  return products;
};
/* Eliminar producto de LS */
export const removeLocalStorage = ({ bagCoffee }: Props) => {
  const storedProducts = localStorage.getItem("coffee");
  const products = storedProducts ? JSON.parse(storedProducts) : [];
  const existingProduct = products.find(
    (item: Product) => item._id === bagCoffee._id
  );
  if (existingProduct.units >= 1) {
    existingProduct.units -= 1;
    const filtered = products.filter((item: Product) => item.units! >= 1);
    return localStorage.setItem("coffee", JSON.stringify(filtered));
  }
};
/* Informacion de LS */
export const getCoffeeLocalStorage = () => {
  const storedProducts = localStorage.getItem("coffee");
  const products = storedProducts ? JSON.parse(storedProducts) : [];
  return products;
};

export async function updateData(newData: any) {
  try {
    const response = await fetch('/api/writeOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error('Error al actualizar los datos:', error);
  }
}