import { TotalInitValue } from "@/interfaces/interfaces";

const postApi = "https://api-order-cafeconaroma.onrender.com/new"

const getCoffee = async (url: string) => {
  const promise = await fetch(url);
  const response = await promise.json();
  return response.products;
};

const newOrder = async (data: TotalInitValue) => {
  try {
    const response = await fetch(postApi, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

      },
      /* mode: 'no-cors', */
      body: JSON.stringify(data),
    });
    const resp = await response.json().then();
    return resp;
    // Assuming the server responds with a message
  } catch (error) {
    console.error(error);
    // Handle error if needed
  }
};

export { getCoffee, newOrder };
