import type { Metadata } from "next";
import { quality } from "@/lib/content";

export const metadata: Metadata = {
  title: "Calidad en manufactura",
  description:
    "Política de calidad de FEM TOOLING: diseño, manufactura, instalación y mantenimiento de herramentales.",
  alternates: { canonical: "/calidad" },
};

export default function CalidadPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <h1 className="font-heading font-extrabold text-3xl md:text-4xl">Política de calidad</h1>
      <p className="mt-6 text-lg leading-relaxed text-ink">{quality.policy}</p>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="font-heading font-bold text-lg">Misión</h2>
          <p className="mt-2 text-muted leading-relaxed">{quality.mission}</p>
        </div>
        <div>
          <h2 className="font-heading font-bold text-lg">Visión</h2>
          <p className="mt-2 text-muted leading-relaxed">{quality.vision}</p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="font-heading font-bold text-lg">Valores</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {quality.values.map((value) => (
            <li key={value} className="rounded-full border border-line px-4 py-1.5 text-sm">
              {value}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 border border-dashed border-line p-6 text-sm text-muted">
        {/* TODO (Fase 1, bloqueante): agregar aquí certificaciones (AS9100/ISO) solo
            si el cliente entrega el documento vigente. No se publica ninguna sin evidencia. */}
        Certificaciones: pendientes de confirmación por el cliente. Ninguna certificación se
        publica sin el documento vigente correspondiente.
      </div>
    </div>
  );
}
