import type { Metadata } from "next";
import { CtaButton } from "@/components/CtaButton";
import { ServiceCard } from "@/components/ServiceCard";
import { capabilities, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Servicios y capacidades",
  description:
    "Diseño y fabricación de herramentales: tooling aeroespacial, dispositivos de barrenado y corte, volteadores, elevadores y medición 3D.",
  alternates: { canonical: "/servicios" },
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((service, index) => ({
    "@type": "Service",
    position: index + 1,
    name: service.title,
    description: service.summary,
  })),
};

export default function ServiciosPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <header className="max-w-2xl">
        <h1 className="font-heading font-extrabold text-3xl md:text-4xl">Servicios y capacidades</h1>
        <p className="mt-3 text-muted leading-relaxed">
          Cada herramental se diseña y fabrica a la medida de la pieza y del proceso que necesitas
          resolver.
        </p>
      </header>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard
            key={service.slug}
            title={service.title}
            summary={service.summary}
            image={service.image}
          />
        ))}
      </div>

      <section className="mt-16 border border-line bg-surface p-8">
        <h2 className="font-heading font-bold text-xl">Maquinaria y capacidades</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-sm text-muted">
          {capabilities.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-10 flex justify-center">
        <CtaButton href="/contacto">Solicitar cotización</CtaButton>
      </div>
    </div>
  );
}
