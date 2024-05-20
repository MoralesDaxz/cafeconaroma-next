/* Routes NavBar */
const route = [
  { link: "/store", title: "Tienda" },
  { link: "/suscription", title: "Suscripción" },
  { link: "/companies", title: "Para empresas" },
  { link: "/us", title: "Sobre nosotros" },
  { link: "/contact", title: "Contacto" },
];
/* Get index route -> map.route "index + 1" */
function getRouteIndex(param: string) {
  switch (param) {
    case "/":
      return 0;
    case "/store":
      return 1;
    case "/suscription":
      return 2;
    case "/companies":
      return 3;
    case "/us":
      return 4;
    case "/contact":
      return 5;
    default:
      return -1; // Devuelve -1 si la ruta no coincide con ninguna en el array
  }
}

export { route, getRouteIndex };
