const questions = [
  {
    title: "¿Cómo hago el pedido?",
    answer:
      "Selecciona el café que desees probar y completa el proceso de compra. Si lo prefieres, te preguntaremos cada cuánto quieres que te lo mandemos a casa y así nunca te quedarás sin café.",
  },
  {
    title: "¿Por qué los precios son tan bajos?",
    answer:
      "Viajamos constantemente para encontrar los mejores granos y a los agricultores más exigentes. Si podemos ofrecerte estos precios es porque tratamos directamente con los productores de café, sin intermediarios. Así obtenemos el mejor precio para ti y la persona que está detrás de los granos de café recibe el mayor beneficio",
  },
  {
    title: "¿Puedo modificar mi dirección de entrega?",
    answer:
      "Una vez realizado tu pedido, podrás cambiar tu dirección de entrega poniéndote en contacto con nuestro equipo se evaluará tu caso específico. Aún así, algunos vendedores no nos permiten, como transportistas, modificar las direcciones de los clientes. Incluso si está permitido, los cambios en tu dirección de entrega a veces pueden no ser posibles debido a condiciones operativas.",
  }
];

const SpainCommunities = [
  {
    comunidad: "Andalucía",
    provincias: ["Almería", "Cádiz", "Córdoba", "Granada", "Huelva", "Jaén", "Málaga", "Sevilla"]
  },
  {
    comunidad: "Aragón",
    provincias: ["Huesca", "Teruel", "Zaragoza"]
  },
  {
    comunidad: "Asturias",
    provincias: ["Asturias"]
  },
  {
    comunidad: "Islas Baleares",
    provincias: ["Baleares"]
  },
  {
    comunidad: "Canarias",
    provincias: ["Las Palmas", "Santa Cruz de Tenerife"]
  },
  {
    comunidad: "Cantabria",
    provincias: ["Cantabria"]
  },
  {
    comunidad: "Castilla-La Mancha",
    provincias: ["Albacete", "Ciudad Real", "Cuenca", "Guadalajara", "Toledo"]
  },
  {
    comunidad: "Castilla y León",
    provincias: ["Ávila", "Burgos", "León", "Palencia", "Salamanca", "Segovia", "Soria", "Valladolid", "Zamora"]
  },
  {
    comunidad: "Cataluña",
    provincias: ["Barcelona", "Gerona", "Lérida", "Tarragona"]
  },
  {
    comunidad: "Extremadura",
    provincias: ["Badajoz", "Cáceres"]
  },
  {
    comunidad: "Galicia",
    provincias: ["La Coruña", "Lugo", "Orense", "Pontevedra"]
  },
  {
    comunidad: "Madrid",
    provincias: ["Madrid"]
  },
  {
    comunidad: "Murcia",
    provincias: ["Murcia"]
  },
  {
    comunidad: "Navarra",
    provincias: ["Navarra"]
  },
  {
    comunidad: "La Rioja",
    provincias: ["La Rioja"]
  },
  {
    comunidad: "País Vasco",
    provincias: ["Álava", "Guipúzcoa", "Vizcaya"]
  },
  {
    comunidad: "Comunidad Valenciana",
    provincias: ["Alicante", "Castellón", "Valencia"]
  },
  {
    comunidad: "Ceuta",
    provincias: ["Ceuta"]
  },
  {
    comunidad: "Melilla",
    provincias: ["Melilla"]
  }
];
const userFarmer =[
  {
    name:"Ana Iko",
    contry:"Colombia",
    location:"Antioquia",
    pic:"https://i.ibb.co/6NtKmvf/ana81.jpg",
    farm:"https://i.ibb.co/FwS0FBr/ana81-finca.jpg",
  },
  {
    name:"Carlos Pond",
    contry:"Colombia",
    location:"Cauca",
    pic:"https://i.ibb.co/khC4J4b/carlos22.jpg",
    farm:"https://i.ibb.co/g6rzC7L/carlos22-finca.jpg",
  },
  {
    name:"Carla Zet",
    contry:"Indonesia",
    location:"Sedoa",
    pic:"https://i.ibb.co/K2bsZfv/carla90.jpg",
    farm:"https://i.ibb.co/LnTrHGc/carla90-finca.jpg",
  },
  {
    name:"Julio Torrex",
    contry:"Venezuela",
    location:"Tachira",
    pic:"https://i.ibb.co/qnjrYNy/julio4.jpg",
    farm:"https://i.ibb.co/vXP80p0/julio4-finca.jpg",
  },
  {
    name:"Jose Ford",
    contry:"Colombia",
    location:"Santa Marta",
    pic:"https://i.ibb.co/80Lmwkn/jose43.jpg",
    farm:"https://i.ibb.co/C51GFfd/jose43-finca.jpg",
  },
  {
    name:"Pedro Wang",
    contry:"Colombia",
    location:"Antioquia",
    pic:"https://i.ibb.co/P1xVNNj/pedro7.jpg",
    farm:"https://i.ibb.co/4Rptfm1/pedro7-finca.jpg",
  },
]
export { questions,SpainCommunities, userFarmer };
