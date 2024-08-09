import { SignUpData } from "@/interfaces";


async function putNewUser(data:SignUpData) {
  const urlApi = process.env.NEXT_PUBLIC_URL_API_USERS;
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
    throw error;  // Re-lanzar el error para manejarlo en otro lugar si es necesario
  }
}

export {putNewUser}