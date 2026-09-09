// Contenido del sitio. Los campos marcados TODO están pendientes de confirmación
// del cliente — ver CHECKLIST.md, fase "1. Contenido base".

export const site = {
  name: "FEM TOOLING",
  legalScope: "Diseño, manufactura, instalación y mantenimiento de herramentales",
  since: 2018,
  city: "El Marqués, Querétaro",
  address: "Carretera Estatal 500 Km 8.3, El Marqués, Querétaro",
  // Mitchell lo está confirmando directamente (Google/Facebook/llamando) — no preguntar al cliente todavía.
  phone: "+52 442 261 5052",
  // Depende del teléfono de arriba — confirmar junto con él si recibe WhatsApp.
  whatsappNumber: "5214422615052",
  // Correo de GABAN mientras se confirma el correo comercial real del cliente.
  quoteEmail: "hello@gabansolutions.ca",
  hours: "Lunes a viernes, 8:00 a.m. a 4:00 p.m.",
  siteUrl: "https://femtooling.com",
};

export const nav = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/calidad", label: "Calidad" },
  { href: "/nosotros", label: "Empresa" },
  { href: "/contacto", label: "Contacto" },
];

export const services = [
  {
    slug: "tooling-aeroespacial",
    title: "Tooling / fixtures para ensamble de componentes aeroespaciales",
    // TODO: ampliar con detalle técnico real (tolerancias, tipo de ensamble, materiales).
    summary:
      "Dispositivos de sujeción y ensamble diseñados y fabricados a la medida de cada componente.",
    image: "/images/servicios/tooling-aeroespacial.jpg",
  },
  {
    slug: "barrenado-corte",
    title: "Dispositivos para barrenado y corte (drilling / trimming)",
    summary:
      "Herramentales de precisión para operaciones de barrenado y corte en línea de producción.",
    image: "/images/servicios/barrenado-corte.jpg",
  },
  {
    slug: "cambios-de-ingenieria",
    title: "Cambios de ingeniería y actualización de fixtures",
    summary:
      "Modificación y puesta al día de herramentales existentes ante cambios de diseño del cliente.",
    image: "/images/servicios/cambios-de-ingenieria.jpg",
  },
  {
    slug: "volteadores-elevadores",
    title: "Volteadores y elevadores manuales, neumáticos o eléctricos",
    summary:
      "Dispositivos de manejo de piezas adaptados al peso y geometría de cada componente.",
    image: "/images/servicios/volteadores-elevadores.jpg",
  },
  {
    slug: "dummies-pruebas-de-fuga",
    title: "Manufactura de dummies para pruebas de fugas",
    summary: "Piezas de prueba fabricadas a especificación para validar sellado y hermeticidad.",
    image: "/images/servicios/dummies-pruebas-de-fuga.jpg",
  },
  {
    slug: "dispositivos-de-carga",
    title: "Dispositivos de carga",
    summary: "Soluciones a la medida para el manejo y carga segura de piezas en planta.",
    image: "/images/servicios/dispositivos-de-carga.jpg",
  },
];

// Imágenes generales del sitio. Ver docs/PROMPTS_IMAGENES_IA.md para el prompt
// y la ruta exacta donde guardar cada archivo dentro de /public.
export const images = {
  heroInicio: "/images/hero-inicio.jpg",
  empresaEquipo: "/images/empresa-equipo.jpg",
  proyectos: [
    "/images/proyectos/proyecto-01.jpg",
    "/images/proyectos/proyecto-02.jpg",
    "/images/proyectos/proyecto-03.jpg",
    "/images/proyectos/proyecto-04.jpg",
    "/images/proyectos/proyecto-05.jpg",
    "/images/proyectos/proyecto-06.jpg",
  ],
};

export const capabilities = [
  "Centros de maquinado",
  "Tornos",
  "Soldadura",
  "Medición 3D: laser tracker, brazo de 7 ejes y escáner",
];

// Texto ya redactado y validado por el cliente (política de calidad actual).
export const quality = {
  policy:
    "Cumplir con los requerimientos del cliente, requisitos aplicables y objetivos de calidad en cuanto a servicios de Diseño, Manufactura, Instalación y Mantenimiento de Herramentales a través de un SGC, tomando en cuenta las partes interesadas, el análisis de los riesgos, el entorno y contexto organizacional, a través de la mejora continua y fortalecimiento humano.",
  mission:
    "Entregar productos y servicios que satisfagan plenamente los requerimientos de nuestros clientes en calidad, costo y tiempo de entrega, haciendo uso eficiente de los recursos.",
  // Reescrita para quitar el horizonte de "3 años" ya vencido del texto original.
  vision:
    "Ser una empresa líder en diseño y manufactura de herramentales, reconocida por la calidad y confiabilidad de su trabajo.",
  values: ["Honestidad", "Respeto", "Trabajo en equipo"],
  // TODO: agregar certificaciones (AS9100/ISO) solo si el cliente entrega el documento vigente.
  certifications: [] as { name: string; validUntil?: string }[],
};
