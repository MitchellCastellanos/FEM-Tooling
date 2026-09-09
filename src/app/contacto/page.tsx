import type { Metadata } from "next";
import { QuoteForm } from "./QuoteForm";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Solicita una cotización a FEM TOOLING. Responde en menos de un minuto.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-14 grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
      <div>
        <h1 className="font-heading font-extrabold text-3xl md:text-4xl">Solicitar cotización</h1>
        <p className="mt-3 text-muted leading-relaxed max-w-md">
          Cuéntanos qué necesitas. Si ya tienes planos, puedes adjuntarlos directamente.
        </p>
        <div className="mt-8">
          <QuoteForm />
        </div>
      </div>

      <aside className="text-sm text-muted flex flex-col gap-6">
        <div>
          <h2 className="font-heading font-bold text-base text-ink">{site.name}</h2>
          <p className="mt-2">{site.address}</p>
        </div>
        <div>
          <p className="font-medium text-ink">Teléfono</p>
          <p className="mt-1">{site.phone}</p>
        </div>
        <div>
          <p className="font-medium text-ink">Horario</p>
          <p className="mt-1">{site.hours}</p>
        </div>
      </aside>
    </div>
  );
}
