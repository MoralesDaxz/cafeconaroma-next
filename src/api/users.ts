import { SignUpData } from "@/interfaces";
const urlApi = process.env.NEXT_PUBLIC_URL_API_USERS;
async function newUser(data: SignUpData) {
  try {
    const response = await fetch(urlApi! + "users/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error de conexion con API", error);
    throw error; // Re-lanzar el error para manejarlo en otro lugar si es necesario
  }
}

async function loginUser(data: { email: string, password: string }) {
  try {
    const response = await fetch(urlApi! + "users/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const data = await response.json();
      return data
    } else {
      const errorData = await response.json();
      return errorData
    }
  } catch (err) {
    return  console.error('Error during login:', err);
  }

}

export { newUser, loginUser };
/* BD en MongoDB conectada a API la cual no pudo ser desplegada desde RENDER, 
de esta manera nos permite consultar al igual que Products u Order, tenemos 
que inicializarla mediante repositorio.*/
