import Image from "next/image";
import { CtaButton } from "@/components/CtaButton";
import { TrustStrip } from "@/components/TrustStrip";
import { ServiceCard } from "@/components/ServiceCard";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { images, services, site } from "@/lib/content";

const heroFilmstrip = [
  { src: images.heroInicio, alt: "Maquinado de un herramental en el taller de FEM TOOLING" },
  { src: images.proyectos[2], alt: "Medición de un herramental con brazo de 7 ejes" },
  { src: services[0].image, alt: "Fixture de ensamble aeroespacial fabricado por FEM TOOLING" },
  { src: images.proyectos[0], alt: "Molde de precisión terminado en FEM TOOLING" },
];

export default function Home() {
  return (
    <>
      {/* Hero — "franja industrial": una tira horizontal de fotos del taller
          se mueve como banda transportadora; encima, un panel fijo con el
          titular, y abajo, un ticker con las capacidades del taller. */}
      <section className="relative overflow-hidden bg-navy-dark text-white">
        <div className="relative h-[320px] overflow-hidden md:h-[380px]">
          <div className="hero-marquee-strip flex h-full w-max">
            {[...heroFilmstrip, ...heroFilmstrip].map((photo, i) => (
              <div key={i} className="relative h-full w-[260px] shrink-0 md:w-[340px]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="340px"
                  className="object-cover grayscale contrast-125"
                />
              </div>
            ))}
          </div>

          <div className="absolute left-5 right-5 top-6 max-w-lg rounded-xl border border-white/15 bg-navy-dark/65 p-5 backdrop-blur-sm md:left-8 md:top-8 md:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#8fd9de]">
              Taller propio · {site.city}
            </p>
            <h1 className="mt-2.5 font-heading font-extrabold text-2xl leading-tight md:text-3xl">
              Un taller que se mueve contigo.
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Diseño, manufactura, instalación y mantenimiento de herramentales — todo bajo un
              mismo techo, desde {site.since}.
            </p>
            <div className="mt-4">
              <CtaButton href="/contacto">Solicitar cotización</CtaButton>
            </div>
          </div>
        </div>

        <div className="flex items-center overflow-hidden border-t border-white/10 py-3">
          <div className="hero-marquee-ticker flex w-max gap-10 whitespace-nowrap font-mono text-xs tracking-[0.05em] text-white/55">
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i}>
                <b className="text-[#ff9a5c]">LASER TRACKER</b> · BRAZO DE 7 EJES · ESCÁNER 3D ·
                DESDE {site.since} · {site.city.toUpperCase()} · <b className="text-[#ff9a5c]">LASER TRACKER</b> ·
                BRAZO DE 7 EJES · ESCÁNER 3D · DESDE {site.since} · {site.city.toUpperCase()} ·
              </span>
            ))}
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
