const fetchMadridDateTime = async (): Promise<Date> => {
  /* process.env.NEXT_PUBLIC_URL_API_TIME*/
  const URL_API = process.env.NEXT_PUBLIC_URL_API_TIME
  try {
    const response = await fetch(URL_API!);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return new Date(data.datetime);
  } catch (error) {
    console.error('Error fetching date:', error);
    throw new Error('Could not fetch the date from the API');
  }
};

export const generateInvoiceCode = async () => {
  try {
    const date = await fetchMadridDateTime();
    const formattedDate = formatDate(date);
    return formattedDate;
  } catch (error) {
    console.error('Error generating invoice code:', error);
    throw new Error('Could not generate the invoice code');
  }
};

export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}${month}${day}`;
};

const getCurrentTimeIn24HourFormat = async (): Promise<string> => {
  try {
    const date = await fetchMadridDateTime();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  } catch (error) {
    console.error('Error fetching time:', error);
    throw new Error('Could not fetch the time');
  }
};

// Ejemplo de uso para el código de factura
/* export const generateNewInvoiceCode = async () => {
  const correlative = 1; // Este valor debe ser dinámico en una implementación real
  const invoiceCode = await generateInvoiceCode(correlative);
  console.log('Generated Invoice Code:', invoiceCode);
}; */

// Ejemplo de uso para la hora en formato 24 horas
export const displayCurrentTime = async () => {
  const currentTime = await getCurrentTimeIn24HourFormat();
  return currentTime
};

/* generateNewInvoiceCode(); */
displayCurrentTime();

/* const generateInvoiceCode = async (correlative: number): Promise<string> => {
  try {
    const date = await fetchMadridDateTime();
    const formattedDate = formatDate(date);
     const invoiceCode = `E001${formattedDate}-${correlative}`;
    return invoiceCode;
  } catch (error) {
    console.error('Error generating invoice code:', error);
    throw new Error('Could not generate the invoice code');
  }
}; */