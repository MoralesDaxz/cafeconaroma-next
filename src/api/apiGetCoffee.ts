import { TotalInitValue } from "@/interfaces/interfaces";

const postApi = "https://api-order-cafeconaroma.onrender.com/new"

const getCoffee = async (url: string) => {
  const promise = await fetch(url);
  const response = await promise.json();
  return response.products;
};

const newOrder = async (data: TotalInitValue) => {
  try {
    const response = await fetch('https://api-order-cafeconaroma.onrender.com/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const resp = await response.json();
    return resp;
  } catch (error) {
    console.error('Error al realizar el POST:', error);
  }
};

export { getCoffee, newOrder };
