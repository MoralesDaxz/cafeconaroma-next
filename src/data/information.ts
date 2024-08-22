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
  },
];

const SpainCommunities = [
  {
    comunidad: "Andalucía",
    provincias: [
      "Almería",
      "Cádiz",
      "Córdoba",
      "Granada",
      "Huelva",
      "Jaén",
      "Málaga",
      "Sevilla",
    ],
  },
  {
    comunidad: "Aragón",
    provincias: ["Huesca", "Teruel", "Zaragoza"],
  },
  {
    comunidad: "Asturias",
    provincias: ["Asturias"],
  },
  {
    comunidad: "Islas Baleares",
    provincias: ["Baleares"],
  },
  {
    comunidad: "Canarias",
    provincias: ["Las Palmas", "Santa Cruz de Tenerife"],
  },
  {
    comunidad: "Cantabria",
    provincias: ["Cantabria"],
  },
  {
    comunidad: "Castilla-La Mancha",
    provincias: ["Albacete", "Ciudad Real", "Cuenca", "Guadalajara", "Toledo"],
  },
  {
    comunidad: "Castilla y León",
    provincias: [
      "Ávila",
      "Burgos",
      "León",
      "Palencia",
      "Salamanca",
      "Segovia",
      "Soria",
      "Valladolid",
      "Zamora",
    ],
  },
  {
    comunidad: "Cataluña",
    provincias: ["Barcelona", "Gerona", "Lérida", "Tarragona"],
  },
  {
    comunidad: "Extremadura",
    provincias: ["Badajoz", "Cáceres"],
  },
  {
    comunidad: "Galicia",
    provincias: ["La Coruña", "Lugo", "Orense", "Pontevedra"],
  },
  {
    comunidad: "Madrid",
    provincias: ["Madrid"],
  },
  {
    comunidad: "Murcia",
    provincias: ["Murcia"],
  },
  {
    comunidad: "Navarra",
    provincias: ["Navarra"],
  },
  {
    comunidad: "La Rioja",
    provincias: ["La Rioja"],
  },
  {
    comunidad: "País Vasco",
    provincias: ["Álava", "Guipúzcoa", "Vizcaya"],
  },
  {
    comunidad: "Comunidad Valenciana",
    provincias: ["Alicante", "Castellón", "Valencia"],
  },
  {
    comunidad: "Ceuta",
    provincias: ["Ceuta"],
  },
  {
    comunidad: "Melilla",
    provincias: ["Melilla"],
  },
];

const userFarmer = [
  {
    name: "Ana Iko",
    contry: "Colombia",
    location: "Antioquia",
    pic: "https://i.ibb.co/6NtKmvf/ana81.jpg",
    farm: "https://i.ibb.co/FwS0FBr/ana81-finca.jpg",
    comment:
      "Trabajamos día a día por mantener ese sabor y calidad tradicional.",
  },
  {
    name: "Carlos Pond",
    contry: "Colombia",
    location: "Cauca",
    pic: "https://i.ibb.co/khC4J4b/carlos22.jpg",
    farm: "https://i.ibb.co/g6rzC7L/carlos22-finca.jpg",
    comment: "Aroma Café es una ventana al mundo para nuestro producto.",
  },
  {
    name: "Carla Zet",
    contry: "Indonesia",
    location: "Sedoa",
    pic: "https://i.ibb.co/K2bsZfv/carla90.jpg",
    farm: "https://i.ibb.co/LnTrHGc/carla90-finca.jpg",
    comment:
      "Es un privilegio trabajar al lado de otros productores de alta categoría.",
  },
  {
    name: "Julio Torrex",
    contry: "Venezuela",
    location: "Tachira",
    pic: "https://i.ibb.co/qnjrYNy/julio4.jpg",
    farm: "https://i.ibb.co/vXP80p0/julio4-finca.jpg",
    comment: "Todo nuestro amor y esfuerzo en cada grano.",
  },
  {
    name: "Jose Ford",
    contry: "Colombia",
    location: "Santa Marta",
    pic: "https://i.ibb.co/80Lmwkn/jose43.jpg",
    farm: "https://i.ibb.co/C51GFfd/jose43-finca.jpg",
    comment: "Dando a conocer nuestro café fuera de nuestras fronteras.",
  },
  {
    name: "Pedro Wang",
    contry: "Colombia",
    location: "Antioquia",
    pic: "https://i.ibb.co/P1xVNNj/pedro7.jpg",
    farm: "https://i.ibb.co/4Rptfm1/pedro7-finca.jpg",
    comment:
      "Todo el sabor que esperas de un café por la mañana, aquí lo tenemos.",
  },
];

const faqSubscription = [
  {
    question:
      "¿Cuál es la diferencia entre las suscripciones Gratuita, Estándar y Premium?",
    answer:
      "La suscripción Gratuita te ofrece acceso a noticias, promociones, descuentos especiales y nuestro boletín mensual. La suscripción Estándar incluye todos los beneficios de la suscripción Gratuita, además de envío gratuito, acceso a recetas exclusivas, atención al cliente prioritaria y la oportunidad de asistir a eventos especiales. La suscripción Premium, nuestra opción más completa, incluye todos los beneficios de la suscripción Estándar, además de una suscripción mensual de café, acceso a productos exclusivos, consultas personalizadas con baristas, regalos sorpresa y acceso anticipado a nuevos productos.",
  },
  {
    question: "¿Puedo cambiar mi suscripción en cualquier momento?",
    answer:
      "Sí, en Aroma Café puedes cambiar tu suscripción en cualquier momento. Si decides actualizar tu suscripción de Gratuita a Estándar o Premium, o bajar de Premium a Estándar o Gratuita, puedes hacerlo fácilmente a través de tu cuenta en nuestro sitio web. Los cambios se aplicarán de inmediato, y podrás disfrutar de los beneficios de tu nueva suscripción sin interrupciones.",
  },
  {
    question: "¿Qué tipo de café recibiré con la suscripción Premium?",
    answer:
      "Con la suscripción Premium, recibirás cada mes una bolsa de nuestro café más selecto. Nos aseguramos de que nuestros suscriptores Premium tengan acceso a las mejores cosechas y mezclas especiales que ofrecemos. Además, recibirás información detallada sobre el origen del café, sus notas de sabor y las mejores formas de prepararlo para que puedas disfrutar de una experiencia de café de primera clase en la comodidad de tu hogar.",
  },
];

const subscriptionOptions = [
  {
    title: "Gratuita",
    features: [
      "Acceso a Noticias y Promociones",
      "Descuentos Especiales",
      "Boletín Mensual",
    ],
  },
  {
    title: "Estándar",
    features: [
      "Todo lo de la Suscripción Gratuita",
      "Envío Gratuito",
      "Acceso a Recetas Exclusivas",
      "Atención al Cliente Prioritaria",
      "Eventos Especiales",
    ],
  },
  {
    title: "Premium",
    features: [
      "Todo lo de la Suscripción Estándar",
      "Suscripción Mensual de Café",
      "Acceso a Productos Exclusivos",
      "Consultas Personalizadas",
      "Regalos y Sorpresas",
      "Acceso Anticipado a Nuevos Productos",
    ],
  },
];

const logos = [
  "https://cdn.svgporn.com/logos/anthropic-icon.svg",
  "https://cdn.svgporn.com/logos/async-api.svg",
  "https://cdn.svgporn.com/logos/sonarcloud.svg",
  "https://cdn.svgporn.com/logos/cube.svg",
  "https://cdn.svgporn.com/logos/volar.svg",
  "https://cdn.svgporn.com/logos/meta.svg",
  "https://cdn.svgporn.com/logos/gradio.svg",
  "https://cdn.svgporn.com/logos/mistral-ai.svg",
  "https://cdn.svgporn.com/logos/android-vertical.svg",
  "https://cdn.svgporn.com/logos/angular.svg",
  "https://cdn.svgporn.com/logos/apache-flink.svg",
  "https://cdn.svgporn.com/logos/apache-spark.svg",
  "https://cdn.svgporn.com/logos/fastapi.svg",
  "https://cdn.svgporn.com/logos/google-palm.svg",
  "https://cdn.svgporn.com/logos/presto.svg",
  "https://cdn.svgporn.com/logos/qdrant.svg",
  "https://cdn.svgporn.com/logos/google-play-console.svg",
  "https://cdn.svgporn.com/logos/obsidian.svg",
  "https://cdn.svgporn.com/logos/webgpu.svg",
  "https://cdn.svgporn.com/logos/dailydev.svg",
  "https://cdn.svgporn.com/logos/zapier.svg",
  "https://cdn.svgporn.com/logos/katalon.svg",
  "https://cdn.svgporn.com/logos/rush.svg",
  "https://cdn.svgporn.com/logos/qwik.svg",
  "https://cdn.svgporn.com/logos/keydb.svg",
  "https://cdn.svgporn.com/logos/amex.svg",
  "https://cdn.svgporn.com/logos/microsoft-windows.svg",
  "https://cdn.svgporn.com/logos/openapi.svg",
  "https://cdn.svgporn.com/logos/risingwave.svg",
  "https://cdn.svgporn.com/logos/netlify.svg",
];

const galeryUs = [
  "https://i.ibb.co/4sj9TNt/client.jpg",
  "https://i.ibb.co/jWD0sD5/coffee-farmer.jpg",
  "https://i.ibb.co/gvG8cYd/farmer1.jpg",
  "https://i.ibb.co/T19zpPp/farmer2.jpg",
  "https://i.ibb.co/T0LQrwh/pic.jpg",
  "https://i.ibb.co/0GcPhdr/hot.jpg",
  "https://i.ibb.co/YPZsGYm/grain.jpg",
  "https://i.ibb.co/q71mRkb/toast.jpg",
  "https://i.ibb.co/mXH71Gn/team.jpg",
  "https://i.ibb.co/7vWvx40/meet.jpg",
  "https://i.ibb.co/G2sNcR7/farmer.jpg",
  "https://i.ibb.co/4SHDDqY/front.jpg",
  "https://i.ibb.co/MhrnG5x/pic2.jpg",
  "https://i.ibb.co/Fqw2wL6/cold-coffee.jpg",
  "https://i.ibb.co/rbLbSt0/work.jpg",
];

const terms = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin sagittis ullamcorper. Nullam eget ultricies mauris. Vivamus turpis ex, malesuada a eleifend non, vestibulum at diam. Donec in est lectus. Nam imperdiet neque risus, ac tristique magna posuere vel. Morbi at cursus sem. In non cursus neque. Aliquam ut feugiat sem, eget viverra nulla. Proin eleifend mi erat, eget sollicitudin nisl pulvinar in. Nam et quam in tortor pulvinar vehicula ut ac enim. Proin erat tortor, luctus eget laoreet nec, elementum a nibh. Vestibulum tellus turpis, pellentesque interdum dui sit amet, elementum sollicitudin ante. Nullam ut dui id nibh varius fringilla et eget tortor. Quisque velit velit, scelerisque ac quam et, sollicitudin maximus elit.",
  "Morbi nulla ex, auctor ut sollicitudin at, cursus vitae est. Vivamus varius maximus eros. Maecenas tincidunt iaculis convallis. Aliquam ac ultrices justo, vitae efficitur tellus. Nulla sed dignissim nisi, vitae laoreet massa. Suspendisse mattis elit enim, eu fermentum turpis egestas ac. Quisque sapien felis, facilisis eget venenatis sed, blandit vitae sem. Proin finibus ornare tellus sit amet pulvinar. Proin gravida scelerisque justo a ultrices. Cras aliquam luctus purus, sagittis sodales mauris fringilla in. Donec at vestibulum diam.",
  "Sed ullamcorper laoreet ligula sed dignissim. Vivamus laoreet lorem sapien, vitae pharetra enim iaculis et. Sed volutpat maximus dolor sit amet efficitur. Praesent malesuada dui vitae neque lobortis, nec sodales massa convallis. Maecenas a malesuada ante. Duis fringilla molestie orci nec dignissim. Nullam rhoncus elit sit amet nulla luctus scelerisque. Quisque lacinia, dolor non faucibus posuere, nisi ipsum imperdiet elit, et dignissim elit orci quis nulla. Pellentesque in suscipit ante. Duis id pretium elit, vitae pharetra metus.",
  "Pellentesque ac nulla ut nisl porttitor pulvinar. Donec placerat elit sed ex vehicula, sed rutrum augue molestie. Sed felis orci, tincidunt nec cursus sed, vehicula eu purus. Nunc hendrerit id sem at maximus. Nam accumsan varius lorem ut volutpat. Cras quis molestie justo, eget cursus eros. Sed quis lacus sagittis, placerat sapien sed, commodo nisi. Integer nulla nunc, tempus at nisi quis, eleifend facilisis leo. Quisque a nisl sit amet neque sodales vulputate.",
  "Sed hendrerit sapien maximus justo tempus feugiat. Pellentesque magna mi, tempus et varius et, lobortis suscipit ante. Duis maximus posuere tristique. Integer euismod purus in varius semper. Aliquam sit amet nunc at turpis congue eleifend. Sed fringilla, massa eu pharetra luctus, tortor purus pellentesque justo, quis finibus erat massa non nunc. In rhoncus, massa eu volutpat posuere, enim urna porta justo, in sagittis libero nisi et ipsum.",
  "Suspendisse sit amet rhoncus sapien. Phasellus non eros lacinia, rhoncus arcu et, tristique velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec in tincidunt ligula, ut fringilla turpis. Vestibulum ac augue sit amet dolor ullamcorper porta ac sit amet nisl. Quisque mollis enim vel dapibus suscipit. Nunc sed orci ac felis sodales ornare vitae sit amet est. Nulla euismod sem orci, nec malesuada velit facilisis at. Aenean quis enim lacinia erat laoreet fermentum id id mi. Duis efficitur nibh a facilisis posuere.",
  "Vestibulum enim massa, suscipit a accumsan id, commodo at dolor. Nam gravida elit nunc, ac blandit dolor porttitor sed. Nunc nec arcu tempus, consequat neque non, mollis libero. Duis porta ullamcorper lacus in tempor. Integer venenatis porta tortor, nec cursus nulla ultrices ornare. Donec vehicula ante a consectetur imperdiet. Donec vel tincidunt turpis. Proin diam ante, placerat egestas nulla ut, ornare condimentum erat. Quisque vitae lobortis elit, ut finibus diam. Ut bibendum sit amet tellus et tincidunt. Quisque aliquam placerat enim interdum rhoncus. Nunc eleifend magna malesuada erat vehicula viverra. Proin vel finibus felis. Quisque luctus efficitur leo, nec consequat justo cursus auctor. Vivamus facilisis bibendum ex consequat pharetra. Aliquam commodo lorem eget fermentum eleifend.",
  "Etiam sit amet diam sit amet lectus ullamcorper volutpat a id nisl. Sed posuere congue justo, in fringilla lectus faucibus eu. Maecenas vitae quam placerat, congue felis a, tempor mauris. Donec ut placerat nulla. Proin lobortis felis vitae mi luctus, quis iaculis sem viverra. Nulla ac nisi vel nunc mollis vestibulum. Quisque pharetra velit sed urna laoreet, sit amet ultrices enim rhoncus. Morbi neque orci, iaculis at ipsum quis, porta iaculis purus. Fusce commodo ligula tellus, sit amet pretium nisl tincidunt eu. Sed at dui nec lacus fermentum convallis at eu sem.",
];

export {
  questions,
  SpainCommunities,
  userFarmer,
  logos,
  galeryUs,
  faqSubscription,
  subscriptionOptions,
  terms
};
