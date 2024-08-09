export const fetchMadridDateTime = async (): Promise<{ time: string, date: string }> => {
  const URL_API = process.env.NEXT_PUBLIC_URL_API_TIME || 'https://worldtimeapi.org/api/timezone/Europe/Madrid';
  
  try {
    const response = await fetch(URL_API);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const date = new Date(data.datetime);

    // Formatear la hora
    const time = `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;

    // Formatear la fecha
    const formattedDate = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`;

    return { time, date: formattedDate };
  } catch (error) {
    console.error('Error fetching date and time:', error);
    throw new Error('Could not fetch the date and time from the API');
  }
};



/* // Ejemplo de uso para la hora en formato 24 horas
export const displayCurrentTime = async () => {
  const currentTime = await getCurrentTimeIn24HourFormat();
  return currentTime
};


displayCurrentTime(); */

