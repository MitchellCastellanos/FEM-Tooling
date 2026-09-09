# Checklist de construcción — FEM Tooling

Referencia: `docs/Propuesta_FEM_Tooling.pdf` (lo que ve el cliente) y el artefacto interno "Plan FEM Tooling" (auditoría, arquitectura y cotización completas).

## -1. Imágenes temporales con IA (mientras llegan las fotos reales del cliente)
- [x] Código conectado: `next/image` ya está cableado a 14 rutas fijas en `public/images/` (ver `src/lib/content.ts`)
- [x] Documento de prompts listo: `docs/PROMPTS_IMAGENES_IA.md`
- [ ] Generar las 14 imágenes con una IA de imágenes y guardarlas con el nombre exacto de cada prompt
- [ ] Decidir, ya en vivo, si estas fotos de IA se quedan o se reemplazan por fotografía real (mejor para credibilidad B2B)

## 0. Base del proyecto
- [x] Elegir y confirmar stack (Next.js) y hosting (Vercel, ya importado desde GitHub)
- [x] Inicializar el proyecto en este repo (Next.js + TypeScript + Tailwind, build y lint limpios)
- [x] Tokens de marca iniciales: navy + teal, tipografía Archivo/Inter — falta el logo real en alta resolución (hoy es texto "FEM TOOLING")

## 1. Contenido base (bloqueante para diseño real)

**Zona gris — Mitchell lo resuelve directamente, sin pasar por el cliente todavía:**
- [ ] Teléfono/WhatsApp correcto — Mitchell lo está confirmando (Google/Facebook/llamando)
- [ ] Correo de GABAN para pruebas del formulario — falta que Mitchell lo comparta para conectar el envío real (ver sección 4)
- Analytics: se decidió **esperar** el acceso al GA4 existente del cliente (`G-BF2FDR6KMM`) en vez de crear uno nuevo — no crear nada aparte.

**Bloqueante — solo lo puede responder FEM TOOLING:**
- [ ] Reunir fotos en alta resolución (servicios, planta, proyectos)
- [ ] Redactar/curar texto de Servicios, Empresa y 3–6 casos de Proyectos
- [ ] Confirmar certificaciones (si existen) con documento de respaldo
- [ ] Decidir si se mantiene, simplifica o elimina la venta de piezas sueltas
- [ ] Cobertura geográfica real (Querétaro / Bajío / nacional / internacional)
- [ ] Aprobar/redactar el aviso de privacidad (o su asesor legal)

_Confirmado con Mitchell: ninguna de las de arriba se sabía de antemano — las 4 quedan
como preguntas directas para FEM TOOLING cuando se agende la sesión de descubrimiento._

## 2. Componentes compartidos
- [x] Header + navegación (con CTA de cotización)
- [x] Footer (datos de contacto, año dinámico, enlaces legales)
- [x] Botón flotante de WhatsApp
- [x] Banner de consentimiento de cookies (aceptar/rechazar, sin analytics conectado aún)
- [x] Botón/CTA de cotización reutilizable

## 3. Páginas
_Todas construidas con contenido real donde ya existía (política de calidad, servicios,
dirección) y placeholders visibles donde falta contenido del cliente (fotos, proyectos,
certificaciones) — ver comentarios `TODO` en el código._
- [x] Inicio
- [x] Servicios y capacidades
- [x] Proyectos (placeholders — faltan los 3–6 casos reales, bloqueante de Fase 1)
- [x] Calidad
- [x] Empresa
- [x] Contacto (formulario + carga de archivo funcionando en la UI)
- [x] Aviso de privacidad (placeholder — texto final lo aprueba el cliente/asesor)

## 4. Funcionalidad
- [x] Formulario de cotización con adjuntos — UI lista, guarda en consola
- [x] Conectar Resend para el envío real, usando `hello@gabansolutions.ca` (dominio ya verificado en la cuenta de Resend de Mitchell)
- [ ] **Pendiente para operación** (no bloquea seguir construyendo): agregar `RESEND_API_KEY` en Vercel antes de lanzar — sin ella el formulario responde error 500 en vez de fallar en silencio
- [ ] Panel de indicadores (reporte simple sobre Analytics)
- [ ] Conectar Google Analytics: **en espera** del acceso del cliente a `G-BF2FDR6KMM` (decisión tomada: no crear una propiedad nueva aparte)

## 5. SEO técnico
- [x] Un solo H1 por página, metadatos únicos por ruta, todo en español consistente
- [x] Sitemap.xml y robots.txt generados automáticamente
- [x] Canonical explícito en las 7 páginas
- [x] Datos estructurados: LocalBusiness (todo el sitio) + Service (Servicios)
- [ ] Imágenes optimizadas con alt text real — el código ya usa `next/image` (WebP/AVIF automático); solo faltan los archivos (ver punto siguiente)

## 6. QA
- [ ] Pruebas responsivas (celular, tablet, escritorio)
- [ ] Pruebas cruzadas de navegador
- [ ] Formulario probado de punta a punta (incluye adjuntos)
- [ ] Consola sin errores, sin enlaces rotos

## 7. Migración y lanzamiento (requiere accesos del cliente)
- [ ] Acceso/exportación de Analytics y Search Console actuales
- [ ] Redirecciones 301 desde las rutas actuales (ver tabla en el plan interno)
- [ ] Acceso al registrador del dominio (GoDaddy) para el corte final
- [ ] Verificar sitio nuevo en Search Console + enviar sitemap
- [ ] Apagar el sitio viejo una vez confirmado el nuevo

## 8. Cierre
- [ ] Sesión de capacitación (hasta 2 personas)
- [ ] Entrar a periodo de soporte de 6 meses
