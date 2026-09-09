"use client";

import { useSyncExternalStore } from "react";

const STORAGE_KEY = "femtooling-cookie-consent";

type Consent = "accepted" | "rejected" | null;

const listeners = new Set<() => void>();

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  return () => listeners.delete(onStoreChange);
}

function getSnapshot(): Consent {
  try {
    return window.localStorage.getItem(STORAGE_KEY) as Consent;
  } catch {
    return null;
  }
}

function getServerSnapshot(): Consent {
  return null;
}

function setConsent(value: Exclude<Consent, null>) {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // localStorage no disponible (modo privado, etc.) — no bloquea el sitio.
  }
  listeners.forEach((notify) => notify());
  // TODO (Fase 4): cuando se conecte Google Analytics (G-BF2FDR6KMM u otra
  // propiedad que confirme el cliente), inicializarlo aquí solo si value === "accepted".
}

export function CookieBanner() {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (consent) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-surface p-4 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
      <div className="mx-auto flex max-w-4xl flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          Usamos cookies para analizar el tráfico del sitio. Puedes aceptarlas o rechazarlas.
        </p>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={() => setConsent("rejected")}
            className="rounded-md border border-line px-4 py-2 text-sm font-medium hover:border-navy"
          >
            Rechazar
          </button>
          <button
            onClick={() => setConsent("accepted")}
            className="rounded-md bg-navy px-4 py-2 text-sm font-medium text-white hover:bg-navy-dark"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
