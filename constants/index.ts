export const CLIENTS = [
  "juliao",
  "country",
  "clinica",
  "green",
  "jimenez",
  "porto rosso",
  "bruxxel",
  "torredecadiz",
  "clubtower2",
];

export const BRANDS = [
  "cummins",
  "perkins",
  "cat",
  "doosan",
  "jhondeere",
  "generac",
  "kohler",
  "leroy",
  "stamford",
  "marathon",
  "deepsea",
  "comap",
  "smartgen",
];

export const MOTORS_VENTAS = [
  { name: "Cummins", src: "/img/brands/cummins.png" },
  { name: "HD Hyundai Infracore", src: "/img/brands/hyundai.png" }, 
  { name: "Perkins", src: "/img/brands/perkins.png" },
  { name: "Weichai", src: "/img/brands/weichai.png" },
  { name: "Fawde", src: "/img/brands/fawde.png" },
  { name: "Rehlko", src: "/img/brands/rehlko.png" }
];

export const ALTERNATORS_VENTAS = [
  { name: "Stamford", src: "/img/brands/stamford.png" },
  { name: "Leroy Somer", src: "/img/brands/leroy.png" },
  { name: "Marathon", src: "/img/brands/marathon.png" },
  { name: "Aosif", src: "/img/brands/aosif.png" }
];

export const CONTACTS_LINKS = {
  whatsapp: {
    label: "WhatsApp",
    value: "+57 317 778 8997",
    url: "https://api.whatsapp.com/send?phone=573177788997&text=Vengo%20desde%20el%20website",
  },
  email: {
    label: "info@grupokes.com",
    value: "mailto:info@grupokes.com",
  },
  phone: {
    label: "317 778 8997",
    value: "tel:+573177788997",
  },
} as const;

export const SERVICES = [
  {
    id: "venta-plantas",
    title: "Venta de plantas eléctricas",
    description: "Suministro de equipos según su necesidad y presupuesto.",
    image: "/img/servicios/planta.jpeg",
  },
  {
    id: "montaje",
    title: "Montaje y puesta en marcha",
    description: "Instalación, pruebas y arranque seguro de su planta eléctrica.",
    image: "/img/servicios/montaje_planta.jpeg",
  },
  {
    id: "mantenimiento-preventivo",
    title: "Mantenimiento preventivo",
    description: "Rutinas programadas para evitar fallas y prolongar vida útil.",
    image: "/img/servicios/preventivo.jpeg",
  },
  {
    id: "mantenimiento-correctivo",
    title: "Mantenimiento correctivo",
    description: "Diagnóstico y reparación para restablecer operación confiable.",
    image: "/img/servicios/mantenimiento correctivo.png",
  },
  {
    id: "contratos-mantenimiento",
    title: "Contratos de mantenimiento",
    description: "Planes con visitas mensuales, bimestrales con atención prioritaria.",
    image: "/img/servicios/mantenimiento.jpeg",
  },
  {
    id: "venta-insumos",
    title: "Venta de insumos",
    description: "Suministro de aceites y filtros compatibles con la marca y modelo del equipo.",
    image: "/img/servicios/filtros.jpeg",
  },
  {
    id: "venta-repuestos",
    title: "Venta de repuestos",
    description: "Repuestos confiables para mantener el desempeño del equipo.",
    image: "/img/servicios/repuestos.jpeg",
  },
  {
    id: "transferencias-automaticas",
    title: "Transferencias automáticas (ATS)",
    description: "Automatización para respaldo eléctrico rápido y seguro.",
    image: "/img/servicios/transferencia.jpg",
  },
  {
    id: "acometidas-electricas",
    title: "Acometidas eléctricas",
    description: "Seguras y normativas, cumpliendo RETIE y estándares exigidos en Colombia.",
    image: "/img/servicios/acometida.jpeg",
  },
  {
    id: "mantenimiento-subestaciones",
    title: "Mantenimiento de subestaciones eléctricas",
    description: "Inspección, pruebas y mantenimiento para operación estable.",
    image: "/img/servicios/subestacion.jpeg",
  },
  {
    id: "sistemas-sincronismo",
    title: "Sistemas de sincronismo",
    description: "Sincronización de múltiples generadores para cargas mayores.",
    image: "/img/servicios/sincronismo.png",
  },
];

// ✅ Servicios Complementarios
export const COMPLEMENTARY_SERVICES = [
  {
    id: "insonorizacion",
    title: "Insonorización de plantas y cuartos eléctricos",
    description: "Reducción de ruido con soluciones profesionales.",
    image: "/img/servicios/insonorizacion.jpeg",
  },
  {
    id: "ductos-escape",
    title: "Suministro e instalación de ductos y tuberías de escape",
    description: "Sistemas diseñados para cumplir normas ambientales y de seguridad.",
    image: "/img/servicios/tuberia_escape.jpeg",
  },
  {
    id: "sistemas-combustible",
    title: "Tanques y sistemas de combustible",
    description: "Instalación de tanques, tuberías de llenado y spill containers.",
    image: "/img/servicios/tanque1.png",
  },
];

// ✅ Servicios de Consultoría
export const CONSULTING_SERVICES = [
  {
    id: "asesoria-tecnica",
    title: "Asesoría técnica especializada",
    description: "Definimos la capacidad adecuada de su planta y la óptima ubicación del equipo.",
    image: "/img/servicios/asesoria_tecnica.png",
  },
  {
    id: "capacitacion-personal",
    title: "Capacitación a su personal",
    description: "Entrenamos a su equipo en operación básica, seguridad y primeros diagnósticos, asegurando un uso correcto y confiable de las plantas eléctricas.",
    image: "/img/servicios/capacitacion.png",
  },
];