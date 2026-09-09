"use client";

import { useCookieConsent, setCookieConsent } from "@/lib/cookie-consent";

export function CookieBanner() {
  const consent = useCookieConsent();

  if (consent) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-surface p-4 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
      <div className="mx-auto flex max-w-4xl flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          Usamos cookies para analizar el tráfico del sitio. Puedes aceptarlas o rechazarlas.
        </p>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={() => setCookieConsent("rejected")}
            className="rounded-md border border-line px-4 py-2 text-sm font-medium hover:border-navy"
          >
            Rechazar
          </button>
          <button
            onClick={() => setCookieConsent("accepted")}
            className="rounded-md bg-navy px-4 py-2 text-sm font-medium text-white hover:bg-navy-dark"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
