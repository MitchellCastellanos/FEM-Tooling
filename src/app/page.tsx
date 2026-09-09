import Image from "next/image";
import { CtaButton } from "@/components/CtaButton";
import { TrustStrip } from "@/components/TrustStrip";
import { ServiceCard } from "@/components/ServiceCard";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { images, services, site } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* Hero — "cortina de taller": la foto queda fija bajo el header mientras
          un panel claro sube por encima al hacer scroll, como una cortina
          metálica de nave industrial abriéndose. */}
      <section className="relative">
        <div className="sticky top-16 h-[calc(100dvh-4rem)] min-h-[460px] overflow-hidden">
          <Image
            src={images.heroInicio}
            alt="Taller de FEM TOOLING maquinando un herramental"
            fill
            preload
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/70 via-navy-dark/10 to-navy-dark/85" />
          <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-end px-5 pb-20 md:pb-28">
            <p className="text-[#8fd9de] text-sm font-semibold uppercase tracking-wide">
              Diseño, manufactura, instalación y mantenimiento de herramentales
            </p>
            <h1 className="mt-4 max-w-2xl font-heading font-extrabold text-4xl leading-[1.02] text-white md:text-6xl">
              Herramentales que se ajustan en tu piso de planta.
            </h1>
          </div>
        </div>

        <div className="relative z-10 -mt-20 rounded-t-[28px] bg-paper shadow-[0_-30px_60px_-30px_rgba(15,31,59,0.35)] md:-mt-24">
          <div className="mx-auto max-w-6xl px-5 pb-14 pt-9 md:pb-16 md:pt-11">
            <div className="mx-auto mb-8 h-1 w-10 rounded-full bg-line md:hidden" />
            <div className="grid items-end gap-8 md:grid-cols-[1.3fr_auto]">
              <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
                Desde {site.since}, diseñamos y fabricamos herramentales industriales en{" "}
                {site.city}, con capacidades propias de medición 3D (laser tracker, brazo de 7 ejes
                y escáner) para entregar piezas ajustadas donde tú las necesitas.
              </p>
              <div className="flex flex-wrap gap-3">
                <CtaButton href="/contacto">Solicitar cotización</CtaButton>
                <CtaButton href="/servicios" variant="secondary">
                  Ver capacidades
                </CtaButton>
              </div>
            </div>
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
