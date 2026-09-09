import Image from "next/image";
import Link from "next/link";
import { CtaButton } from "@/components/CtaButton";
import { TrustStrip } from "@/components/TrustStrip";
import { ServiceCard } from "@/components/ServiceCard";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { images, services, site } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* Hero — "placa cortada": el puente entre lo de siempre y algo nuevo.
          Sigue habiendo texto de un lado y foto del otro, pero el corte es
          diagonal, como una lámina cortada con láser, con una línea que
          brilla justo en el corte. */}
      <section className="relative h-[560px] overflow-hidden bg-navy-dark text-white md:h-[620px]">
        <div className="hero-cut-photo">
          <Image
            src={images.proyectos[0]}
            alt="Molde de precisión terminado en FEM TOOLING"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="hero-cut-seam" />
        <div className="hero-cut-text bg-gradient-to-br from-navy to-navy-dark py-10 pl-6 pr-14 sm:pl-10 md:pl-16 lg:pl-24">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#8fd9de]">
            Diseño y manufactura de herramentales
          </p>
          <h1 className="mt-3 max-w-[12ch] font-heading font-extrabold text-3xl leading-[1.12] md:text-4xl">
            Cada herramental, cortado a tu medida.
          </h1>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70 md:text-base">
            Desde {site.since} fabricamos e instalamos herramentales industriales en{" "}
            {site.city}, con puesta a punto directo en tu línea.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contacto"
              className="hero-cut-btn inline-flex items-center bg-teal py-3 pl-6 pr-9 text-sm font-semibold text-white transition-colors hover:bg-teal-dark"
            >
              Solicitar cotización
            </Link>
            <Link
              href="/proyectos"
              className="hero-cut-btn inline-flex items-center border border-white/35 py-3 pl-6 pr-9 text-sm font-semibold text-white transition-colors hover:border-white/70"
            >
              Ver proyectos
            </Link>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="font-heading font-bold text-2xl md:text-3xl">Servicios principales</h2>
        <p className="mt-2 text-muted max-w-2xl">
          Herramental a la medida para cada etapa del ensamble y la manufactura.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((service) => (
            <ServiceCard
              key={service.slug}
              title={service.title}
              summary={service.summary}
              image={service.image}
            />
          ))}
        </div>
        <div className="mt-8">
          <CtaButton href="/servicios" variant="secondary">
            Ver todos los servicios
          </CtaButton>
        </div>
      </section>

      <section className="bg-surface border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 grid md:grid-cols-2 gap-10 items-center">
          <PhotoPlaceholder
            label="Foto de proyecto destacado pendiente"
            src={images.proyectos[0]}
            alt="Proyecto destacado de FEM TOOLING"
            className="h-56 rounded-md"
          />
          <div>
            <h2 className="font-heading font-bold text-2xl md:text-3xl">Proyectos con resultado, no solo fotos</h2>
            <p className="mt-3 text-muted leading-relaxed">
              Cada proyecto en nuestro portafolio explica qué se fabricó, para qué tipo de pieza y
              qué resultado se entregó.
            </p>
            <div className="mt-6">
              <CtaButton href="/proyectos" variant="secondary">
                Ver proyectos
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 text-center">
        <h2 className="font-heading font-bold text-2xl md:text-3xl">¿Tienes un proyecto en puerta?</h2>
        <p className="mt-3 text-muted max-w-xl mx-auto">
          Cuéntanos qué necesitas y, si ya tienes planos, adjúntalos directamente en el formulario.
        </p>
        <div className="mt-6 flex justify-center">
          <CtaButton href="/contacto">Solicitar cotización</CtaButton>
        </div>
      </section>
    </>
  );
}
