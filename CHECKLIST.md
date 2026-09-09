# Checklist de construcción — FEM Tooling

Referencia: `docs/Propuesta_FEM_Tooling.pdf` (lo que ve el cliente) y el artefacto interno "Plan FEM Tooling" (auditoría, arquitectura y cotización completas).

## 0. Base del proyecto
- [x] Elegir y confirmar stack (Next.js) y hosting (Vercel, ya importado desde GitHub)
- [x] Inicializar el proyecto en este repo (Next.js + TypeScript + Tailwind, build y lint limpios)
- [x] Tokens de marca iniciales: navy + teal, tipografía Archivo/Inter — falta el logo real en alta resolución (hoy es texto "FEM TOOLING")

## 1. Contenido base (bloqueante para diseño real)
- [ ] Confirmar teléfono/WhatsApp correcto
- [ ] Reunir fotos en alta resolución (servicios, planta, proyectos)
- [ ] Redactar/curar texto de Servicios, Empresa y 3–6 casos de Proyectos
- [ ] Confirmar certificaciones (si existen) con documento de respaldo
- [ ] Definir destino de correo para el formulario de cotización
- [ ] Decidir si se mantiene, simplifica o elimina la venta de piezas sueltas

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
- [ ] **Bloqueante:** conectar proveedor de correo real (Resend/SendGrid) para que el formulario notifique de verdad — hoy es una ruta de prueba (`src/app/api/cotizacion/route.ts`)
- [ ] Panel de indicadores (reporte simple sobre Analytics)
- [ ] Conectar Google Analytics existente (`G-BF2FDR6KMM`) si el cliente da acceso

## 5. SEO técnico
- [ ] Un solo H1 por página, metadatos únicos, sin mezcla de idiomas sin criterio
- [ ] Sitemap.xml, robots.txt, canonical correcto
- [ ] Datos estructurados (Organization/LocalBusiness, Service)
- [ ] Imágenes optimizadas (WebP/AVIF) con alt text real

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
