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
      {/* Hero — "hoja de medición": en vez de una foto grande, una hoja
          técnica (rejilla de puntos + coordenadas) como la de un software de
          brazo de medición. La foto real entra chica, como ficha de detalle
          con línea líder, no como fondo. */}
      <section
        className="relative overflow-hidden bg-navy-dark text-white"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.08) 1px, transparent 1.4px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="mx-auto max-w-6xl px-5 pb-20 pt-8 md:pb-28 md:pt-10">
          <div className="flex flex-wrap items-start justify-between gap-4 font-mono text-[11px] text-white/50">
            <span className="tracking-[0.08em]">FEM-TL-001 / HOJA DE PROCESO</span>
            <span className="text-right leading-relaxed">
              X <b className="text-[#ff9a5c]">128.402</b>
              <br />
              Y <b className="text-[#ff9a5c]">44.117</b>
              <br />
              Z <b className="text-[#ff9a5c]">-6.030</b>
            </span>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-[1.2fr_auto] md:items-end">
            <div className="max-w-xl">
              <p className="font-mono text-xs tracking-[0.08em] text-[#8fd9de]">
                {"// tolerancia real, no de catálogo"}
              </p>
              <h1 className="mt-3 border-b-2 border-dashed border-white/30 pb-5 font-heading font-extrabold text-3xl leading-[1.1] md:text-4xl">
                Herramentales verificados al milésimo, en tu planta.
              </h1>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-white/65 md:text-base">
                Laser tracker, brazo de medición de 7 ejes y escáner 3D propios: cada pieza se
                entrega con el dato de medición, no solo con el certificado. Desde {site.since},
                diseñamos y fabricamos herramentales industriales en {site.city}.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <CtaButton href="/contacto">Solicitar cotización</CtaButton>
                <Link
                  href="/servicios"
                  className="inline-flex items-center justify-center rounded-md border border-white/35 px-6 py-3 text-base font-semibold text-white transition-colors hover:border-white/70"
                >
                  Ver equipo de medición
                </Link>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="absolute -left-[92px] bottom-[148px] h-px w-[90px] origin-right -rotate-[14deg] bg-white/40">
                <span className="absolute -right-[3px] -top-[3px] h-1.5 w-1.5 rounded-full bg-[#ff9a5c]" />
              </div>
              <div className="w-[230px] overflow-hidden rounded-lg bg-surface text-ink shadow-2xl">
                <div className="relative h-[130px]">
                  <Image
                    src={images.proyectos[2]}
                    alt="Medición de un herramental con brazo de 7 ejes"
                    fill
                    sizes="230px"
                    className="object-cover"
                  />
                </div>
                <div className="px-3 py-2.5 font-mono text-[10.5px]">
                  <div className="text-muted">DETALLE — medición en sitio</div>
                  <div className="font-semibold text-[#d9530f]">±0.05 mm</div>
                </div>
              </div>
            </div>

            <PhotoPlaceholder
              label="Medición de un herramental con brazo de 7 ejes"
              src={images.proyectos[2]}
              alt="Medición de un herramental con brazo de 7 ejes"
              className="h-48 rounded-lg md:hidden"
            />
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
