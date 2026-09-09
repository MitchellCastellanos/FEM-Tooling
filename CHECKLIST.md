# Checklist de construcción — FEM Tooling

Referencia: `docs/Propuesta_FEM_Tooling.pdf` (lo que ve el cliente) y el artefacto interno "Plan FEM Tooling" (auditoría, arquitectura y cotización completas).

## 0. Base del proyecto
- [ ] Elegir y confirmar stack (Next.js o Astro) y hosting (Vercel/Netlify)
- [ ] Inicializar el proyecto en este repo (estructura de carpetas, config, lint)
- [ ] Definir tokens de marca: colores, tipografía, logo en alta resolución

## 1. Contenido base (bloqueante para diseño real)
- [ ] Confirmar teléfono/WhatsApp correcto
- [ ] Reunir fotos en alta resolución (servicios, planta, proyectos)
- [ ] Redactar/curar texto de Servicios, Empresa y 3–6 casos de Proyectos
- [ ] Confirmar certificaciones (si existen) con documento de respaldo
- [ ] Definir destino de correo para el formulario de cotización
- [ ] Decidir si se mantiene, simplifica o elimina la venta de piezas sueltas

## 2. Componentes compartidos
- [ ] Header + navegación (con CTA de cotización)
- [ ] Footer (datos de contacto consistentes, año dinámico, enlaces legales)
- [ ] Botón flotante de WhatsApp
- [ ] Banner de consentimiento de cookies (aceptar/rechazar/configurar)
- [ ] Botón/CTA de cotización reutilizable

## 3. Páginas
- [ ] Inicio
- [ ] Servicios y capacidades
- [ ] Proyectos (con contexto por caso)
- [ ] Calidad
- [ ] Empresa
- [ ] Contacto (formulario + carga de planos)
- [ ] Aviso de privacidad (texto final lo aprueba el cliente/asesor)

## 4. Funcionalidad
- [ ] Formulario de cotización con adjuntos + notificación automática por correo
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
