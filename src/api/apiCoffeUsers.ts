import { SignUpData } from "@/interfaces";
const urlApi = process.env.NEXT_PUBLIC_URL_API_USERS;
async function putNewUser(data: SignUpData) {
  try {
    const response = await fetch(urlApi!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to create user");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error; // Re-lanzar el error para manejarlo en otro lugar si es necesario
  }
}

export { putNewUser };
/* BD en MongoDB conectada a API la cual no pudo ser desplegada desde RENDER, 
de esta manera nos permite consultar al igual que Products u Order, tenemos 
que inicializarla mediante repositorio.*/
