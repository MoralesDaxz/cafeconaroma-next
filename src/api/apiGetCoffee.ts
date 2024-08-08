import { TotalInitValue } from "@/interfaces/index";

const postApi = process.env.NEXT_PUBLIC_URL_API_ORDER_NEW

const newOrder = async (data: TotalInitValue) => {
  try {
    const response = await fetch(postApi!, {
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

/*Pendiente inicializacion de API para que marchen rapido
const initApis = async()=>{
  const response = await fetch(postApi!, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    
    
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }
} */

export { newOrder };
