import type { Metadata } from "next";
import { CtaButton } from "@/components/CtaButton";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { images } from "@/lib/content";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Casos de diseño y fabricación de herramentales resueltos por FEM TOOLING.",
  alternates: { canonical: "/proyectos" },
};

// TODO (Fase 1, bloqueante): reemplazar el texto de cada tarjeta por 3-6 proyectos
// reales con tipo de pieza, sector (si se autoriza nombrarlo) y resultado.
// No se inventan casos, clientes ni resultados — ver CHECKLIST.md.
// Las fotos (images.proyectos) sí pueden ser genéricas mientras tanto — ver
// docs/PROMPTS_IMAGENES_IA.md.

export default function ProyectosPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <header className="max-w-2xl">
        <h1 className="font-heading font-extrabold text-3xl md:text-4xl">Proyectos</h1>
        <p className="mt-3 text-muted leading-relaxed">
          Esta sección se está armando con casos reales: qué se fabricó, para qué tipo de pieza y
          qué resultado se entregó.
        </p>
      </header>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {images.proyectos.map((src, i) => (
          <div key={src} className="border border-line bg-surface overflow-hidden">
            <PhotoPlaceholder
              label="Proyecto pendiente de contenido"
              src={src}
              alt={`Proyecto de FEM TOOLING ${i + 1}`}
              className="h-44"
            />
            <div className="p-4">
              <p className="text-sm text-muted">Caso en preparación — ver CHECKLIST.md</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <CtaButton href="/contacto">Solicitar un proyecto similar</CtaButton>
      </div>
    </div>
  );
}
