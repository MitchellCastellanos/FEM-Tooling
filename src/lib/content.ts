// Contenido del sitio. Los campos marcados TODO están pendientes de confirmación
// del cliente — ver CHECKLIST.md, fase "1. Contenido base".

export const site = {
  name: "FEM TOOLING",
  legalScope: "Diseño, manufactura, instalación y mantenimiento de herramentales",
  since: 2018,
  city: "El Marqués, Querétaro",
  address: "Carretera Estatal 500 Km 8.3, El Marqués, Querétaro",
  // TEMPORAL: número de GABAN Solutions mientras Mitchell confirma cuál de los
  // dos teléfonos de FEM TOOLING es el vigente. Reemplazar por el real del
  // cliente en la entrega — agrupado con la migración en CHECKLIST.md.
  phone: "+1 514-258-0648",
  // TEMPORAL: mismo número de arriba en formato wa.me. Ojo: no está confirmado
  // que este número reciba WhatsApp — verificar antes de que quede visible al público.
  whatsappNumber: "15142580648",
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

// Aviso de privacidad tal cual lo entregó Mitchell (9 sept. 2026), con un solo
// cambio: el teléfono y el correo de contacto ARCO del párrafo final apuntaban
// a otra empresa (contacto@cncmaquinados.com, un teléfono distinto al del
// resto del sitio) — probablemente un aviso reciclado de otro cliente sin
// actualizar. Mientras se confirma con FEM TOOLING, se sustituyeron por los
// datos de GABAN Solutions (site.phone / site.quoteEmail) para que alguien que
// ejerza sus derechos ARCO sí llegue a un contacto real. TEMPORAL — reemplazar
// por los datos definitivos del cliente en la entrega, junto con la migración
// (ver CHECKLIST.md). El resto del texto legal no se modificó.
export const privacyNoticeParagraphs = [
  "Pino Suárez 467-A15, Circuito la Carambada, Colonia Modelo, Querétaro, es responsable de recabar sus datos personales, del uso que se le dé a los mismos y de su protección.",
  "De conformidad con lo previsto en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (en lo sucesivo denominada como la “Ley”) y su Reglamento, nos permitimos solicitarle leer cuidadosamente los Términos y Condiciones contenidos en este Aviso de Privacidad (el “Aviso”), ya que el presente Aviso contiene los términos y condiciones aplicables a los Datos Personales que se recaban por parte de FEM TOOLING, en caso de que Usted otorgue su consentimiento. Su información personal será utilizada para proveer los servicios y productos que ha solicitado, informarle sobre cambios en los mismos y evaluar la calidad del servicio que le brindamos.",
  "Como parte normal de sus actividades, y de conformidad con su objeto social lícito, FEM TOOLING en algunos casos recaba y almacena información considerada como Datos Personales, en términos de la Ley y, por tanto, dicha Sociedad es un sujeto regulado por la misma. Los Datos Personales que Usted proporciona al Responsable, o los que se generen mediante las visitas al sitio de FEM TOOLING, variarán en cada caso en concreto dependiendo de sus actividades en el sitio, y serán los siguientes:",
  "A. En caso de ingresar comentarios a través del formulario de contacto: al utilizar esta funcionalidad, únicamente se recabarán y almacenarán los Datos Personales siguientes: a) Datos Generales: Nombre completo (el que Usted proporcione), su correo electrónico y cualquier otro que Usted ingrese en los comentarios. En todos los casos, la exactitud y veracidad de los Datos Personales recabados será de Usted, ya que es Usted quien tiene acceso a sus perfiles en Redes Sociales y quien ingresa su apodo. B. En todos los casos, al ingresar al Sitio de FEM TOOLING, se recabarán datos a través de Cookies y Web Beacons. Dichos elementos recaban la dirección IP, su tipo de navegador y sistema operativo, las páginas de Internet que visita, hábitos y patrones de navegación y consumo, los vínculos que sigue y el sitio que visitó antes de entrar al nuestro. De todos los Datos Personales mencionados anteriormente, se crea un perfil de usuario, que se utiliza para las finalidades descritas más adelante.",
  "Datos Personales Sensibles. FEM TOOLING no recaba Datos Personales Sensibles. Sus Datos Personales tendrán el uso y tratamiento para las finalidades que en forma taxativa se describen a continuación: A. Finalidades primarias. a) En caso de llenar el formulario de contacto, para contactarle, resolver sus dudas y plantear una propuesta o posible relación comercial, en base a sus necesidades o las de la empresa que Usted representa. B. Finalidades secundarias. a) Para identificarle, ubicarle, comunicarle, contactarle, enviarle información, así como su uso estadístico y científico (análisis de métricas); b) Para desarrollar, por sí o a través de sus afiliadas o cualquier tercero, estudios sobre los intereses, comportamientos y demografía de los Titulares, a efecto de comprender mejor sus necesidades e intereses, y ofrecer mejores servicios noticiosos; c) Para mejorar nuestras iniciativas y estrategias comerciales; d) Para analizar las páginas de Internet visitadas, las búsquedas efectuadas por los Titulares, así como para mejorar nuestra oferta de contenido y artículos, incluyendo su personalización, presentación, programación y servicios; e) Para enviar información vía correo electrónico respecto de noticias o eventos relevantes.",
  "FEM TOOLING no transferirá sus Datos Personales sin su consentimiento, aunque podrá utilizarlos para las finalidades que dependan de terceros, como estadísticas y el envío de boletines, sin que exista transferencia de dichos Datos. Si usted no consiente que sus datos personales sean transferidos en los términos que señala el presente aviso de privacidad puede solicitarlo en su cuenta de soporte.",
  "La temporalidad del manejo de los Datos Personales será indefinida a partir de la fecha en que Usted los proporcionó al Responsable, y desde luego Usted podrá oponerse en cualquier momento que lo considere oportuno, para efectos del bloqueo y cancelación de los mismos. Una vez que Usted entregue al Responsable sus Datos Personales por cualquier medio, le manifestamos que estos serán conservados en un sistema CRM del archivo del propio sitio, cuyo acceso estará limitado solamente al Responsable. Sus datos personales serán tratados en todo momento de manera lícita y observando los principios de Licitud, Consentimiento, Información, Calidad, Finalidad, Lealtad, Proporcionalidad y Responsabilidad, en cumplimiento a lo establecido por la Ley.",
  `Cualquier duda sobre el presente Aviso, sobre sus Datos Personales y su tratamiento, o sobre como ejercer los derechos descritos a continuación, la podremos atender en el teléfono ${site.phone}, de Lunes a Viernes, según corresponda. Usted tendrá en todo momento el acceso a sus Datos Personales y/o Datos Sensibles, ya sea para solicitar su rectificación, cancelación, oposición o revocar su consentimiento, de conformidad con lo dispuesto en la Ley (los “Derechos ARCO”), en forma escrita o electrónica, a través del procedimiento que encontrará aquí. Deberá dirigir su solicitud con atención FEM TOOLING o bien, a la dirección electrónica ${site.quoteEmail}. A dicha solicitud deberá acompañar lo siguiente: a. Fotografía o scan de su identificación oficial con fotografía y firma autógrafa o bien, si actúa en representación de alguien, adjuntar también copia del poder notarizado y/o registrado ante el Registro Público correspondiente y en su caso el acta constitutiva. b. Scan o fotografía de un comprobante de domicilio. En el escrito Usted deberá: i) Señalar su nombre o razón social y proporcionar un domicilio físico para el despacho de la respuesta, comunicaciones, documentación y respuestas; ii) Hacernos saber los Datos Personales a los que Usted desea acceder, o desea que sean rectificados, cancelados, revisados, así como para oponerse al tratamiento o revocar su consentimiento; iii) Manifestar si conoce o recuerda el propósito para el cual los aportó y el nombre del Responsable a quien se los entregó; y iv) Establecer de manera clara, respetuosa y concisa su petición, así como manifestar cualquier otra información o documento que facilite la localización de sus Datos Personales. El Responsable contará con un plazo de veinte días, contados a partir de recibida la solicitud, para resolverla o requerirle mayor información. En caso de que su petición resulte procedente, porque Usted acreditó su personalidad y sus Datos Personales pudieron encontrarse en nuestra base de datos, en un lapso no mayor a quince días se procederá a su ejecución. El Responsable le mantendrá informado del proceso en todo momento que Usted lo solicite. La respuesta y el acceso a sus Datos, así como los documentos de soporte, se le podrán entregar, previo acreditamiento de identidad y/o personalidad, a través de copias certificadas por la empresa y su representante legal, documentos electrónicos o copias simples. Siempre que la solicitud se haga a través de medios electrónicos, se dará preferencia a dichos medios para el envío de respuestas y resoluciones. En el caso de que el Responsable requiera usar sus Datos Personales con fines diferentes a los señalados en el presente Aviso de Privacidad, contactará con Usted ya sea en forma escrita, telefónica, electrónica, o por cualquier medio óptico, sonoro, visual u otro que la tecnología permita ahora o en lo futuro y le explicará los nuevos usos que pretenda darle a dicha información a fin de recabar su consentimiento.`,
];
