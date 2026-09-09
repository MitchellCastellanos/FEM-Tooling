# Prompts para generar imágenes temporales con IA — FEM Tooling

Estas fotos son **temporales**, solo para que el sitio se vea y se sienta real mientras
llega el material fotográfico definitivo del cliente (ver CHECKLIST.md, sección 1 —
bloqueante). Están divididas en dos partes de 7 imágenes cada una, pensadas para pegarse
completas en un chat de generación de imágenes (Midjourney, ChatGPT, etc.) y avanzar
imagen por imagen escribiendo "siguiente".

**Parte 1 — Sitio y Servicios** (hero + las 6 tarjetas de `/servicios`)
**Parte 2 — Empresa y Proyectos** (foto de equipo + las 6 tarjetas de `/proyectos`)

Cada imagen indica el nombre de archivo y la carpeta exacta dentro de `public/images/`
donde va — ya coinciden con las rutas que están cableadas en `src/lib/content.ts`, así
que en cuanto el archivo exista ahí con ese nombre, aparece solo en el sitio.

---

## PARTE 1 — Sitio y Servicios (7 imágenes)

Copia todo este bloque en tu generador de imágenes:

```
Vas a generar 7 fotografías para el sitio web de FEM TOOLING, un taller de manufactura
de precisión en Querétaro, México. Te voy a dar las 7 descripciones de una vez, pero
quiero que las generes de UNA EN UNA: genera solo la primera ahora y espera. Cuando yo
escriba "siguiente", genera la imagen 2, y así sucesivamente hasta terminar las 7. No
generes más de una imagen por turno.

Estilo visual que deben compartir las 7 (aplícalo a todas): fotografía industrial
realista, estilo documental/editorial (no render 3D, no ilustración), taller de
manufactura de precisión en México, luz natural de nave industrial mezclada con luz
artificial cálida, paleta de colores azul acero y grises metálicos con acentos
anaranjados de seguridad, poca profundidad de campo, cámara mirrorless full-frame, alta
resolución, sin texto ni logotipos visibles, sin personas mostrando el rostro completo
hacia cámara (perfil o de espaldas), composición horizontal 4:3 salvo que se indique lo
contrario.

IMAGEN 1 — archivo: hero-inicio.png (horizontal 16:9)
Toma amplia de un centro de maquinado CNC en operación, fabricando un herramental
metálico grande y complejo, refrigerante visible en la herramienta de corte, un técnico
de espaldas supervisando el proceso al fondo, sensación de precisión y escala industrial.

IMAGEN 2 — archivo: servicios/tooling-aeroespacial.png
Dispositivo de sujeción (fixture) metálico sosteniendo un componente aeroespacial curvo
de aluminio, clamps de precisión visibles, ambiente de ensamble aeroespacial.

IMAGEN 3 — archivo: servicios/barrenado-corte.png
Primer plano de un dispositivo de barrenado guiando una broca de precisión sobre una
placa metálica, virutas de metal visibles, enfoque en la precisión del corte.

IMAGEN 4 — archivo: servicios/cambios-de-ingenieria.png
Ingeniero ajustando manualmente un herramental metálico existente sobre una mesa de
trabajo, calibrador digital midiendo una tolerancia, plano técnico de referencia a un
costado.

IMAGEN 5 — archivo: servicios/volteadores-elevadores.png
Dispositivo volteador/elevador industrial (manual o neumático) sosteniendo y girando
una pieza metálica grande, mecanismo visible.

IMAGEN 6 — archivo: servicios/dummies-pruebas-de-fuga.png
Técnico realizando una prueba de fugas sobre una pieza metálica de prueba (dummy),
manómetro de presión visible, mangueras de prueba conectadas.

IMAGEN 7 — archivo: servicios/dispositivos-de-carga.png
Dispositivo de carga moviendo una pieza metálica pesada con ayuda de un polipasto/grúa
cenital dentro del taller, cadenas o eslingas visibles.

Empieza generando solo la IMAGEN 1 y espera mi "siguiente".
```

### Dónde guardar cada archivo de la Parte 1

| # | Guardar como |
| --- | --- |
| 1 | `public/images/hero-inicio.png` |
| 2 | `public/images/servicios/tooling-aeroespacial.png` |
| 3 | `public/images/servicios/barrenado-corte.png` |
| 4 | `public/images/servicios/cambios-de-ingenieria.png` |
| 5 | `public/images/servicios/volteadores-elevadores.png` |
| 6 | `public/images/servicios/dummies-pruebas-de-fuga.png` |
| 7 | `public/images/servicios/dispositivos-de-carga.png` |

---

## PARTE 2 — Empresa y Proyectos (7 imágenes)

Copia todo este bloque (en un chat nuevo, o después de terminar la Parte 1):

```
Vas a generar 7 fotografías para el sitio web de FEM TOOLING, un taller de manufactura
de precisión en Querétaro, México. Te voy a dar las 7 descripciones de una vez, pero
quiero que las generes de UNA EN UNA: genera solo la primera ahora y espera. Cuando yo
escriba "siguiente", genera la imagen 2, y así sucesivamente hasta terminar las 7. No
generes más de una imagen por turno.

Estilo visual que deben compartir las 7 (aplícalo a todas): fotografía industrial
realista, estilo documental/editorial (no render 3D, no ilustración), taller de
manufactura de precisión en México, luz natural de nave industrial mezclada con luz
artificial cálida, paleta de colores azul acero y grises metálicos con acentos
anaranjados de seguridad, poca profundidad de campo, cámara mirrorless full-frame, alta
resolución, sin texto ni logotipos visibles, sin personas mostrando el rostro completo
hacia cámara (perfil o de espaldas), composición horizontal 4:3 salvo que se indique lo
contrario.

IMAGEN 1 — archivo: empresa-equipo.png
Tres o cuatro técnicos e ingenieros mexicanos revisando un plano técnico junto a un
herramental metálico grande sobre una mesa de trabajo, ambiente colaborativo, uniformes
de trabajo industriales, taller limpio y ordenado al fondo.

IMAGEN 2 — archivo: proyectos/proyecto-01.png
Herramental de aluminio terminado sobre una mesa de trabajo, acabado limpio, listo para
entrega.

IMAGEN 3 — archivo: proyectos/proyecto-02.png
Marco/estructura de acero soldada de gran tamaño, cordones de soldadura visibles,
taller de fondo.

IMAGEN 4 — archivo: proyectos/proyecto-03.png
Técnico usando un brazo articulado de medición 3D (tipo FARO) sobre una pieza metálica,
pantalla del equipo visible.

IMAGEN 5 — archivo: proyectos/proyecto-04.png
Varias piezas de herramental terminadas y organizadas en un área de embarque, listas
para envío.

IMAGEN 6 — archivo: proyectos/proyecto-05.png
Primer plano de un bloque de aluminio recién maquinado con acabado de precisión,
superficie brillante.

IMAGEN 7 — archivo: proyectos/proyecto-06.png
Herramental ya instalado dentro de una línea de producción, integrado a una estación
de trabajo.

Empieza generando solo la IMAGEN 1 y espera mi "siguiente".
```

### Dónde guardar cada archivo de la Parte 2

| # | Guardar como |
| --- | --- |
| 1 | `public/images/empresa-equipo.png` |
| 2 | `public/images/proyectos/proyecto-01.png` |
| 3 | `public/images/proyectos/proyecto-02.png` |
| 4 | `public/images/proyectos/proyecto-03.png` |
| 5 | `public/images/proyectos/proyecto-04.png` |
| 6 | `public/images/proyectos/proyecto-05.png` |
| 7 | `public/images/proyectos/proyecto-06.png` |

---

## Cómo usarlo

1. Pega el bloque de la Parte 1 completo en tu generador de imágenes.
2. Descarga la imagen 1, guárdala con el nombre exacto de la tabla, escribe "siguiente"
   y repite hasta la 7.
3. Haz lo mismo con la Parte 2.
4. Coloca los 14 archivos dentro de `public/images/` en este repo, respetando las
   subcarpetas `servicios/` y `proyectos/` — no hace falta tocar código.

## Nota de transparencia

Cuando el sitio esté en vivo, vale la pena considerar si estas fotos generadas por IA se
quedan como definitivas o se reemplazan por fotografía real del taller — una empresa
industrial B2B suele generar más confianza con fotos verificablemente reales. Esa decisión
queda para cuando FEM TOOLING entregue su material (ver CHECKLIST.md, sección 1).
