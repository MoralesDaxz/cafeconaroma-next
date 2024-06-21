type Local = {
    id?: string;
    img?: string;
    name?: string;
    price?: number;
    units?: number;
  };
  
  export const putLocalStorage = (
    idArg?: string,
    imgArg?: string,
    nameArg?: string,
    priceArg?: number
  ) => {
    /* Trabajamos con LS dentro de funcion, al montar el componente en primer vuelco nos dara error
    Mientras que en la FN esperara a ser ejecutada con componente ya desplegado */
    const storedProducts = localStorage.getItem("coffee");
    const products = storedProducts ? JSON.parse(storedProducts) : [];
    /* Nuevo producto con argunmentos proporcionados */
    const product = {
      id: idArg,
      image: imgArg,
      name: nameArg,
      units: 1,
      price: priceArg,
    };
    /* Evaluamos si existe o no para agregar unidades*/
    const existingProduct = products.find((item: Local) => item.id === idArg);
    if (existingProduct) {
      existingProduct.units += 1;
    } else {
      products.unshift(product);
    }
    localStorage.setItem("coffee", JSON.stringify(products));
  };