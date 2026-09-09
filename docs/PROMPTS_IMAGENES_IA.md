# Prompts para generar imágenes temporales con IA — FEM Tooling

Estas fotos son **temporales**, solo para que el sitio se vea y se sienta real mientras
llega el material fotográfico definitivo del cliente (ver CHECKLIST.md, Fase 1 —
bloqueante). En cuanto FEM TOOLING entregue fotos reales, se reemplazan estos archivos
uno por uno, sin tocar código.

## Estilo visual común (pégalo al inicio de cada prompt)

Para que las 14 imágenes se vean como una sola sesión de fotos y no como piezas sueltas,
usa esta base de estilo en todas:

> Fotografía industrial realista, estilo documental/editorial (no render 3D, no ilustración),
> taller de manufactura de precisión en México, luz natural de nave industrial mezclada con
> luz artificial cálida, paleta de colores azul acero y grises metálicos con acentos
> anaranjados de seguridad, poca profundidad de campo, cámara mirrorless full-frame,
> alta resolución, sin texto ni logotipos visibles, sin personas mostrando el rostro
> completo hacia cámara (perfil o de espaldas), composición horizontal salvo que se indique
> lo contrario.

## Dónde guardar cada archivo

Todos van dentro de `public/images/` en este repo, con el nombre exacto indicado. En
cuanto el archivo exista ahí con ese nombre, aparece solo en el sitio — el código ya
apunta a esas rutas (`src/lib/content.ts`).

---

## 1. Hero de Inicio

**Archivo:** `public/images/hero-inicio.jpg`
**Proporción:** horizontal, 16:9 (ej. 1600×900 o más)

> [estilo común] + Toma amplia de un centro de maquinado CNC en operación, fabricando un
> herramental metálico grande y complejo, refrigerante visible en la herramienta de corte,
> un técnico de espaldas supervisando el proceso al fondo, sensación de precisión y escala
> industrial.

## 2. Empresa / equipo

**Archivo:** `public/images/empresa-equipo.jpg`
**Proporción:** horizontal, 4:3

> [estilo común] + Tres o cuatro técnicos e ingenieros mexicanos revisando un plano técnico
> junto a un herramental metálico grande sobre una mesa de trabajo, ambiente colaborativo,
> uniformes de trabajo industriales, taller limpio y ordenado al fondo.

## 3–8. Servicios (una por cada línea de servicio)

**Proporción:** horizontal, 4:3

| Archivo | Prompt (agregar después del estilo común) |
| --- | --- |
| `public/images/servicios/tooling-aeroespacial.jpg` | Dispositivo de sujeción (fixture) metálico sosteniendo un componente aeroespacial curvo de aluminio, clamps de precisión visibles, ambiente de ensamble aeroespacial. |
| `public/images/servicios/barrenado-corte.jpg` | Primer plano de un dispositivo de barrenado guiando una broca de precisión sobre una placa metálica, virutas de metal visibles, enfoque en la precisión del corte. |
| `public/images/servicios/cambios-de-ingenieria.jpg` | Ingeniero ajustando manualmente un herramental metálico existente sobre una mesa de trabajo, calibrador digital midiendo una tolerancia, plano técnico de referencia a un costado. |
| `public/images/servicios/volteadores-elevadores.jpg` | Dispositivo volteador/elevador industrial (manual o neumático) sosteniendo y girando una pieza metálica grande, mecanismo visible. |
| `public/images/servicios/dummies-pruebas-de-fuga.jpg` | Técnico realizando una prueba de fugas sobre una pieza metálica de prueba (dummy), manómetro de presión visible, mangueras de prueba conectadas. |
| `public/images/servicios/dispositivos-de-carga.jpg` | Dispositivo de carga moviendo una pieza metálica pesada con ayuda de un polipasto/grúa cenital dentro del taller, cadenas o eslingas visibles. |

## 9–14. Proyectos (galería genérica)

**Proporción:** horizontal, 4:3

| Archivo | Prompt (agregar después del estilo común) |
| --- | --- |
| `public/images/proyectos/proyecto-01.jpg` | Herramental de aluminio terminado sobre una mesa de trabajo, acabado limpio, listo para entrega. |
| `public/images/proyectos/proyecto-02.jpg` | Marco/estructura de acero soldada de gran tamaño, cordones de soldadura visibles, taller de fondo. |
| `public/images/proyectos/proyecto-03.jpg` | Técnico usando un brazo articulado de medición 3D (tipo FARO) sobre una pieza metálica, pantalla del equipo visible. |
| `public/images/proyectos/proyecto-04.jpg` | Varias piezas de herramental terminadas y organizadas en un área de embarque, listas para envío. |
| `public/images/proyectos/proyecto-05.jpg` | Primer plano de un bloque de aluminio recién maquinado con acabado de precisión, superficie brillante. |
| `public/images/proyectos/proyecto-06.jpg` | Herramental ya instalado dentro de una línea de producción, integrado a una estación de trabajo. |

---

## Cómo usarlo

1. Copia el bloque "estilo común" + el prompt específico de cada fila en tu generador de
   imágenes de preferencia (Midjourney, DALL·E, etc.).
2. Genera y descarga cada imagen con el **nombre de archivo exacto** de la tabla.
3. Colócala en la ruta indicada dentro de `public/images/` en este repo (respeta las
   subcarpetas `servicios/` y `proyectos/`).
4. Sube el cambio (o pídeme que lo haga si me pasas los archivos) — no se necesita ningún
   cambio de código adicional.

## Nota de transparencia

Cuando el sitio esté en vivo, vale la pena considerar si estas fotos generadas por IA se
quedan como definitivas o se reemplazan por fotografía real del taller — una empresa
industrial B2B suele generar más confianza con fotos verificablemente reales. Esa decisión
queda para cuando FEM TOOLING entregue su material (ver CHECKLIST.md, Fase 1).
