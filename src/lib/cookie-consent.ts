"use client";

import { useSyncExternalStore } from "react";

const STORAGE_KEY = "femtooling-cookie-consent";

export type Consent = "accepted" | "rejected" | null;

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

export function useCookieConsent(): Consent {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function setCookieConsent(value: Exclude<Consent, null>) {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // localStorage no disponible (modo privado, etc.) — no bloquea el sitio.
  }
  listeners.forEach((notify) => notify());
}
