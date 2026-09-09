import type { Metadata } from "next";
import { quality } from "@/lib/content";

export const metadata: Metadata = {
  title: "Calidad en manufactura",
  description:
    "Política de calidad de FEM TOOLING: diseño, manufactura, instalación y mantenimiento de herramentales.",
  alternates: { canonical: "/calidad" },
};

export default function CalidadPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <h1 className="font-heading font-extrabold text-3xl md:text-4xl">Política de calidad</h1>
      <p className="mt-6 text-lg leading-relaxed text-ink">{quality.policy}</p>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="font-heading font-bold text-lg">Misión</h2>
          <p className="mt-2 text-muted leading-relaxed">{quality.mission}</p>
        </div>
        <div>
          <h2 className="font-heading font-bold text-lg">Visión</h2>
          <p className="mt-2 text-muted leading-relaxed">{quality.vision}</p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="font-heading font-bold text-lg">Valores</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {quality.values.map((value) => (
            <li key={value} className="rounded-full border border-line px-4 py-1.5 text-sm">
              {value}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <h2 className="font-heading font-bold text-lg">Certificaciones</h2>
        <div className="mt-4 flex flex-col gap-4">
          {quality.certifications.map((cert) => (
            <div key={cert.certificateNumber} className="border border-line bg-surface p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-heading font-bold text-xl text-navy">{cert.standard}</p>
                <span className="rounded-full bg-good-soft px-3 py-1 text-xs font-medium text-good">
                  Vigente hasta {cert.expiryDate}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted">{cert.title}</p>
              <p className="mt-4 text-sm leading-relaxed">
                <span className="font-medium">Alcance certificado:</span> {cert.scope}
              </p>
              <dl className="mt-4 grid gap-2 sm:grid-cols-3 text-xs text-muted">
                <div>
                  <dt className="uppercase tracking-wide">Certificado por</dt>
                  <dd className="mt-0.5 text-ink">{cert.certifyingBody}</dd>
                </div>
                <div>
                  <dt className="uppercase tracking-wide">No. de certificado</dt>
                  <dd className="mt-0.5 text-ink">{cert.certificateNumber}</dd>
                </div>
                <div>
                  <dt className="uppercase tracking-wide">Certificación inicial</dt>
                  <dd className="mt-0.5 text-ink">{cert.initialCertification}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
