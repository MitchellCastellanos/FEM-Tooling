# Checklist de construcción — FEM Tooling

Referencia: `docs/Propuesta_FEM_Tooling.pdf` (lo que ve el cliente) y el artefacto interno "Plan FEM Tooling" (auditoría, arquitectura y cotización completas).

## 0. Base del proyecto
- [x] Elegir y confirmar stack (Next.js) y hosting (Vercel, ya importado desde GitHub)
- [x] Inicializar el proyecto en este repo (Next.js + TypeScript + Tailwind, build y lint limpios)
- [x] Tokens de marca iniciales: navy + teal, tipografía Archivo/Inter

## 1. Assets (todo lo visual/de marca pendiente, junto en un solo punto)
- [x] Código listo para recibir imágenes: `next/image` cableado a 14 rutas fijas en `public/images/` (`src/lib/content.ts`)
- [x] Documento de prompts de IA listo: `docs/PROMPTS_IMAGENES_IA.md`
- [x] Las 14 imágenes de IA generadas y colocadas en `public/images/` (temporal, mientras llega material real)
- [ ] **Bloqueante (cliente):** logo real en alta resolución (hoy es texto "FEM TOOLING")
- [ ] **Bloqueante (cliente):** fotos reales en alta resolución (planta, servicios, proyectos) para reemplazar las de IA
- [ ] **Bloqueante (cliente):** 3–6 casos de proyectos reales (qué se hizo, para qué pieza, qué resultado)
- [x] Certificación ISO 9001:2015 recibida y publicada en `/calidad` (STAREGISTER, vigente
  hasta 21 jun. 2027). **Falta:** confirmar con el cliente la dirección de planta — el
  certificado da una distinta a la que se usa en Contacto/Footer (ver nota en `content.ts`)

## 2. Contenido base (texto/decisiones, sin imágenes)

**Zona gris — Mitchell lo resuelve directamente:**
- [ ] Teléfono/WhatsApp correcto — Mitchell lo está confirmando (Google/Facebook/llamando)

**Bloqueante — solo lo puede responder FEM TOOLING:**
- [ ] Redactar/curar texto técnico de Servicios y Empresa
- [ ] Decidir si se mantiene, simplifica o elimina la venta de piezas sueltas
- [ ] Cobertura geográfica real (Querétaro / Bajío / nacional / internacional)

**Resuelto:**
- [x] Aviso de privacidad — texto real publicado. Se corrigió el teléfono y el correo de
  contacto ARCO del párrafo final (apuntaban a `contacto@cncmaquinados.com` y a un
  teléfono de otra empresa) por los datos de GABAN Solutions, para que ese contacto
  funcione mientras tanto. Marcado como temporal en `src/lib/content.ts`.

## 3. Componentes compartidos
- [x] Header + navegación (con CTA de cotización) + menú móvil (hamburguesa)
- [x] Footer (datos de contacto, año dinámico, enlaces legales)
- [x] Botón flotante de WhatsApp
- [x] Banner de consentimiento de cookies (aceptar/rechazar)
- [x] Botón/CTA de cotización reutilizable

## 4. Páginas
- [x] Inicio · Servicios · Proyectos · Calidad · Empresa · Contacto · Aviso de privacidad

## 5. Funcionalidad
- [x] Formulario de cotización con adjuntos, conectado a Resend (`hello@gabansolutions.ca`)
- [ ] **Pendiente para operación:** agregar `RESEND_API_KEY` en Vercel antes de lanzar
- [x] Analytics cableado (respeta el consentimiento de cookies) — **en espera** de un `NEXT_PUBLIC_GA_MEASUREMENT_ID` (el del cliente `G-BF2FDR6KMM` cuando dé acceso, o uno nuevo)
- [ ] Panel de indicadores (reporte curado sobre esos datos) — depende de lo anterior

## 6. SEO técnico
- [x] Un solo H1 por página, metadatos únicos, canonical en las 7 páginas
- [x] Sitemap.xml y robots.txt
- [x] Datos estructurados: LocalBusiness (sitio) + Service (Servicios)
- [ ] Alt text real en imágenes — depende de que lleguen las fotos (sección 1)

## 7. QA — corrido el 9 sept. 2026
- [x] 7 páginas responden 200, sin enlaces internos rotos, sin errores de consola reales
- [x] Responsivo revisado en 375/768/1440px — se encontró y corrigió falta de menú móvil
- [x] Formulario probado de punta a punta en la UI (falla con error claro sin `RESEND_API_KEY`)
- [ ] Prueba de envío real de correo (necesita la key de producción)
- [ ] Verificación manual en Safari/Firefox una vez en Vercel (aquí solo hay Chromium)

## 8. Entrega: migración + swap de datos temporales (todo junto, al final)
- [ ] Reemplazar el teléfono/WhatsApp de GABAN (`site.phone`, `site.whatsappNumber`) por
  los datos definitivos de FEM TOOLING en `src/lib/content.ts`
- [ ] Reemplazar el correo de contacto ARCO del aviso de privacidad (hoy `site.quoteEmail`
  de GABAN) por el correo definitivo del cliente
- [ ] Acceso/exportación de Analytics y Search Console actuales
- [ ] Redirecciones 301 desde las rutas actuales (ver tabla en el plan interno)
- [ ] Acceso al registrador del dominio (GoDaddy) para el corte final
- [ ] Verificar sitio nuevo en Search Console + enviar sitemap
- [ ] Apagar el sitio viejo una vez confirmado el nuevo

## 9. Cierre
- [ ] Sesión de capacitación (hasta 2 personas)
- [ ] Entrar a periodo de soporte de 6 meses
