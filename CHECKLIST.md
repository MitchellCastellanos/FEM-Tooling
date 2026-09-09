# Checklist de construcción — FEM Tooling

Referencia: `docs/Propuesta_FEM_Tooling.pdf` (lo que ve el cliente) y el artefacto interno "Plan FEM Tooling" (auditoría, arquitectura y cotización completas).

## 0. Base del proyecto
- [x] Elegir y confirmar stack (Next.js) y hosting (Vercel, ya importado desde GitHub)
- [x] Inicializar el proyecto en este repo (Next.js + TypeScript + Tailwind, build y lint limpios)
- [x] Tokens de marca iniciales: navy + teal, tipografía Archivo/Inter

## 1. Assets (todo lo visual/de marca pendiente, junto en un solo punto)
- [x] Código listo para recibir imágenes: `next/image` cableado a 14 rutas fijas en `public/images/` (`src/lib/content.ts`) — en cuanto el archivo exista con el nombre correcto, aparece solo, sin tocar código
- [x] Documento de prompts de IA listo: `docs/PROMPTS_IMAGENES_IA.md`
- [ ] Generar las 14 imágenes de IA y colocarlas en `public/images/` (temporal, mientras llega material real)
- [ ] **Bloqueante (cliente):** logo real en alta resolución (hoy es texto "FEM TOOLING")
- [ ] **Bloqueante (cliente):** fotos reales en alta resolución (planta, servicios, proyectos) para reemplazar las de IA
- [ ] **Bloqueante (cliente):** 3–6 casos de proyectos reales (qué se hizo, para qué pieza, qué resultado)
- [ ] **Bloqueante (cliente):** certificaciones (AS9100/ISO), si existen, con documento de respaldo

## 2. Contenido base (texto/decisiones, sin imágenes)

**Zona gris — Mitchell lo resuelve directamente:**
- [ ] Teléfono/WhatsApp correcto — Mitchell lo está confirmando (Google/Facebook/llamando)

**Bloqueante — solo lo puede responder FEM TOOLING:**
- [ ] Redactar/curar texto técnico de Servicios y Empresa
- [ ] Decidir si se mantiene, simplifica o elimina la venta de piezas sueltas
- [ ] Cobertura geográfica real (Querétaro / Bajío / nacional / internacional)

**Resuelto:**
- [x] Aviso de privacidad — texto real recibido y publicado (9 sept. 2026). **Ojo:** trae dos
  inconsistencias que hay que aclarar con el cliente antes de lanzar — el correo de
  contacto ARCO es `contacto@cncmaquinados.com` (dominio de otra empresa, no
  femtooling.com — parece aviso reciclado sin actualizar) y el teléfono/horario ahí
  (+52 442 779 6991, 8am–5pm) no coincide con el de Contacto (+52 442 261 5052, 8am–4pm).
  Ver comentario en `src/lib/content.ts`.

## 3. Componentes compartidos
- [x] Header + navegación (con CTA de cotización)
- [x] Menú móvil (hamburguesa) — el QA detectó que faltaba y ya se corrigió
- [x] Footer (datos de contacto, año dinámico, enlaces legales)
- [x] Botón flotante de WhatsApp
- [x] Banner de consentimiento de cookies (aceptar/rechazar)
- [x] Botón/CTA de cotización reutilizable

## 4. Páginas
_Todas construidas con contenido real donde ya existía y placeholders donde falta
contenido del cliente — ver sección 1 y 2._
- [x] Inicio · Servicios · Proyectos · Calidad · Empresa · Contacto · Aviso de privacidad

## 5. Funcionalidad
- [x] Formulario de cotización con adjuntos, conectado a Resend (`hello@gabansolutions.ca`)
- [ ] **Pendiente para operación:** agregar `RESEND_API_KEY` en Vercel antes de lanzar
- [x] Analytics cableado (componente `Analytics`, respeta el consentimiento de cookies) — **en espera** de decidir/tener un `NEXT_PUBLIC_GA_MEASUREMENT_ID` (el del cliente `G-BF2FDR6KMM` cuando dé acceso, o uno nuevo de GABAN)
- [ ] Panel de indicadores (reporte curado sobre esos datos) — depende de lo anterior

## 6. SEO técnico
- [x] Un solo H1 por página, metadatos únicos, canonical en las 7 páginas
- [x] Sitemap.xml y robots.txt
- [x] Datos estructurados: LocalBusiness (sitio) + Service (Servicios)
- [ ] Alt text real en imágenes — depende de que lleguen las fotos (sección 1)

## 7. QA — ya corrido una vez (9 sept. 2026)
- [x] Las 7 páginas responden 200, sin enlaces internos rotos
- [x] Sin errores de consola reales (los únicos "error" son 400 esperados por las 14 imágenes que aún no existen)
- [x] Responsivo revisado en 375/768/1440px — se encontró y corrigió la falta de menú móvil
- [x] Formulario probado de punta a punta en la UI (falla con error claro sin `RESEND_API_KEY`, como se espera)
- [ ] Prueba de envío real de correo (necesita la key de producción)
- [ ] Verificación manual en un navegador real (Safari/Firefox) una vez desplegado en Vercel — este entorno solo tiene Chromium

## 8. Migración y lanzamiento (requiere accesos del cliente)
- [ ] Acceso/exportación de Analytics y Search Console actuales
- [ ] Redirecciones 301 desde las rutas actuales (ver tabla en el plan interno)
- [ ] Acceso al registrador del dominio (GoDaddy) para el corte final
- [ ] Verificar sitio nuevo en Search Console + enviar sitemap
- [ ] Apagar el sitio viejo una vez confirmado el nuevo

## 9. Cierre
- [ ] Sesión de capacitación (hasta 2 personas)
- [ ] Entrar a periodo de soporte de 6 meses
