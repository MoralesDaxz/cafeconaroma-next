import { TotalInitValue } from "@/interfaces/index";

const urlApi = process.env.NEXT_PUBLIC_URL_API_ORDER

const newOrder = async (data: TotalInitValue) => {
  try {
    const response = await fetch(`${urlApi}/new`, {
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


export { newOrder };
