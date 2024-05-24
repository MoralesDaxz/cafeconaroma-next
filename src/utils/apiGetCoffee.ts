interface Product {
  _id: string;
  available: boolean;
  brand: string;
  img_url: string;
  price: number;
  package: string;
}

const URL_API = "https://api-cafeconaroma.onrender.com/products";

const getCoffee = async () => {
  const promise = await fetch(URL_API);
  const response = await promise.json();
  return response.products;
};

export { getCoffee };
