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
    value: "+57 300 644 7179",
    url: "https://api.whatsapp.com/send?phone=573006447179&text=Vengo%20desde%20el%20website",
  },
  email: {
    label: "info@grupokes.com",
    value: "mailto:info@grupokes.com",
  },
  phone: {
    label: "300 644 7179",
    value: "tel:+573006447179",
  },
} as const;
