"use client";

import Script from "next/script";
import { useCookieConsent } from "@/lib/cookie-consent";

// Requiere NEXT_PUBLIC_GA_MEASUREMENT_ID (formato "G-XXXXXXXXXX") como variable
// de entorno en Vercel. Sin ella, este componente no renderiza nada — no rompe
// el sitio. Solo carga el script si el visitante ya aceptó cookies.
// Pendiente: decidir si se usa la propiedad existente del cliente
// (G-BF2FDR6KMM, cuando dé acceso) o una nueva de GABAN — ver CHECKLIST.md.
export function Analytics() {
  const consent = useCookieConsent();
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!gaId || consent !== "accepted") return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
