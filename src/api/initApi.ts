const API_PRODUCTS = process.env.NEXT_PUBLIC_URL_API_COFFEE;
const API_ORDERS = process.env.NEXT_PUBLIC_URL_API_ORDER;
const API_DATE = process.env.NEXT_PUBLIC_URL_API_TIME;
const initApi = async () => {
  const products = await fetch(API_PRODUCTS!);
  const orders = await fetch(API_ORDERS!);
  const response = await fetch(API_DATE!);
  return { products, orders, response };
};

export { initApi };
/* 
Encargado de inicializar las API de esta forma 
reducir el tiempo de respuesta, ya que son Free y 
al estar sin actividad entran en suspencion
*/
