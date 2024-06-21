/* interface Product {
  _id: string;
  available: boolean;
  brand: string;
  img_url: string;
  price: number;
  package: string;
}
 */
const getCoffee = async (url:string) => {
  const promise = await fetch(url);
  const response = await promise.json();
  return response.products;
};

export { getCoffee };
