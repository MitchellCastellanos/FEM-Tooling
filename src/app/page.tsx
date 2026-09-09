import Image from "next/image";
import { CtaButton } from "@/components/CtaButton";
import { TrustStrip } from "@/components/TrustStrip";
import { ServiceCard } from "@/components/ServiceCard";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { images, services, site } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* Hero — "título monumental": una sola foto a pantalla completa, sin
          columnas, con el titular a escala de cartel encima. Sin párrafo
          largo aquí a propósito; la descripción vive en la franja de abajo. */}
      <section className="relative flex h-[78vh] min-h-[560px] flex-col justify-between overflow-hidden bg-navy-dark text-white md:h-[88vh] md:min-h-[600px]">
        <Image
          src={services[0].image}
          alt="Fixture de ensamble aeroespacial fabricado por FEM TOOLING"
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-navy-dark/25 to-navy-dark/10" />

        <div className="relative mx-auto flex w-full max-w-6xl items-start justify-between px-5 pt-7 font-mono text-[11px] tracking-[0.05em] text-white/70">
          <span>FEM TOOLING</span>
          <span>
            DESDE {site.since} · {site.city.toUpperCase()}
          </span>
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-5 pb-12 md:pb-16">
          <h1 className="font-heading font-extrabold uppercase leading-[0.95] text-white text-[clamp(2.6rem,8vw,5.2rem)]">
            Precisión
            <br />
            que se instala.
          </h1>
          <div className="mt-7 flex flex-wrap items-end justify-between gap-6">
            <CtaButton href="/contacto">Solicitar cotización →</CtaButton>
            <span className="font-mono text-[10px] tracking-[0.08em] text-white/60">
              ↓ desplázate
            </span>
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
