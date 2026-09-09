import type { Metadata } from "next";
import { TrustStrip } from "@/components/TrustStrip";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { images, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Empresa",
  description: `Conoce a ${site.name}, taller de diseño y manufactura de herramentales en ${site.city} desde ${site.since}.`,
  alternates: { canonical: "/nosotros" },
};

export default function NosotrosPage() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-5 py-14 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="font-heading font-extrabold text-3xl md:text-4xl">Quiénes somos</h1>
          <p className="mt-4 text-muted leading-relaxed">
            Desde {site.since} diseñamos y fabricamos herramentales en {site.city}. Integramos
            capacidades propias de medición 3D — laser tracker, brazo de 7 ejes y escáner — para
            entregar piezas ajustadas y puestas a punto directamente en las instalaciones del
            cliente.
          </p>
        </div>
        <PhotoPlaceholder
          label="Foto de equipo / taller pendiente"
          src={images.empresaEquipo}
          alt="Equipo de FEM TOOLING en el taller"
          className="h-56 rounded-md"
        />
      </div>

      <TrustStrip />

      <div className="mx-auto max-w-3xl px-5 py-14 text-sm text-muted">
        {/* TODO (Fase 1): confirmar cobertura geográfica exacta (Querétaro / Bajío /
            nacional / internacional) para decidir prioridad del segundo idioma. */}
        Cobertura: pendiente de confirmación con el cliente.
      </div>
    </div>
  );
}
