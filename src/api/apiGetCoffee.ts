const getCoffee = async (url: string) => {
  const promise = await fetch(url);
  const response = await promise.json();
  return response.products;
};

export { getCoffee };
