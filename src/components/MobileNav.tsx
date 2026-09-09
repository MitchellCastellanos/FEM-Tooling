"use client";

import { useState } from "react";
import Link from "next/link";
import { nav } from "@/lib/content";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        className="flex h-9 w-9 items-center justify-center rounded-md border border-line"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
        </svg>
      </button>

      {open && (
        <nav className="absolute inset-x-0 top-16 z-30 border-b border-line bg-surface p-4 flex flex-col gap-1 shadow-lg">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-paper"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
