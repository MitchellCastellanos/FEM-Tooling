// Contenido del sitio. Los campos marcados TODO están pendientes de confirmación
// del cliente — ver CHECKLIST.md, fase "1. Contenido base".

export const site = {
  name: "FEM TOOLING",
  legalScope: "Diseño, manufactura, instalación y mantenimiento de herramentales",
  since: 2018,
  city: "El Marqués, Querétaro",
  address: "Carretera Estatal 500 Km 8.3, El Marqués, Querétaro",
  // TODO: confirmar cuál teléfono es el vigente (el sitio actual muestra dos distintos).
  phone: "+52 442 261 5052",
  // TODO: confirmar si este número recibe WhatsApp.
  whatsappNumber: "5214422615052",
  // TODO: confirmar correo real del equipo comercial que debe recibir las cotizaciones.
  quoteEmail: "contacto@femtooling.com",
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
  },
  {
    slug: "barrenado-corte",
    title: "Dispositivos para barrenado y corte (drilling / trimming)",
    summary:
      "Herramentales de precisión para operaciones de barrenado y corte en línea de producción.",
  },
  {
    slug: "cambios-de-ingenieria",
    title: "Cambios de ingeniería y actualización de fixtures",
    summary:
      "Modificación y puesta al día de herramentales existentes ante cambios de diseño del cliente.",
  },
  {
    slug: "volteadores-elevadores",
    title: "Volteadores y elevadores manuales, neumáticos o eléctricos",
    summary:
      "Dispositivos de manejo de piezas adaptados al peso y geometría de cada componente.",
  },
  {
    slug: "dummies-pruebas-de-fuga",
    title: "Manufactura de dummies para pruebas de fugas",
    summary: "Piezas de prueba fabricadas a especificación para validar sellado y hermeticidad.",
  },
  {
    slug: "dispositivos-de-carga",
    title: "Dispositivos de carga",
    summary: "Soluciones a la medida para el manejo y carga segura de piezas en planta.",
  },
];

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
