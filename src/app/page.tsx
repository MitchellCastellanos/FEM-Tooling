import { CtaButton } from "@/components/CtaButton";
import { TrustStrip } from "@/components/TrustStrip";
import { ServiceCard } from "@/components/ServiceCard";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { images, services, site } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[#7fd4d9] text-sm font-semibold uppercase tracking-wide">
              Diseño, manufactura, instalación y mantenimiento de herramentales
            </p>
            <h1 className="mt-4 font-heading font-extrabold text-4xl md:text-5xl leading-[1.05]">
              Herramentales de precisión, puestos a punto en tus instalaciones
            </h1>
            <p className="mt-5 text-white/80 max-w-lg leading-relaxed">
              Desde {site.since}, diseñamos y fabricamos herramentales industriales en{" "}
              {site.city}, con capacidades propias de medición 3D (laser tracker, brazo de 7 ejes
              y escáner) para entregar piezas ajustadas donde tú las necesitas.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaButton href="/contacto">Solicitar cotización</CtaButton>
              <CtaButton href="/servicios" variant="secondary">
                Ver capacidades
              </CtaButton>
            </div>
          </div>
          <PhotoPlaceholder
            label="Foto real de planta / proceso pendiente"
            src={images.heroInicio}
            alt="Taller de FEM TOOLING trabajando un herramental"
            className="h-64 md:h-80 rounded-md"
          />
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
