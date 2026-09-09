import type { Metadata } from "next";
import { privacyNoticeParagraphs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  robots: { index: true, follow: true },
  alternates: { canonical: "/aviso-de-privacidad" },
};

export default function AvisoDePrivacidadPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-14">
      <h1 className="font-heading font-extrabold text-3xl">Aviso de privacidad</h1>
      <div className="mt-6 flex flex-col gap-4 text-sm leading-relaxed text-ink">
        {privacyNoticeParagraphs.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
