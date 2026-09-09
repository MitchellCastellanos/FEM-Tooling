import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  robots: { index: true, follow: true },
};

export default function AvisoDePrivacidadPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-14">
      <h1 className="font-heading font-extrabold text-3xl">Aviso de privacidad</h1>
      {/*
        TODO (Fase 1, bloqueante, fuera del alcance de desarrollo): el texto legal
        de este aviso lo debe redactar o aprobar FEM TOOLING o su asesor jurídico.
        Debe cubrir: responsable, finalidades del tratamiento, datos recabados
        (nombre/correo vía formulario de contacto, cookies/analytics), mecanismos
        ARCO, transferencias, conservación y datos de contacto. No se publica
        ningún texto legal generado sin esa aprobación.
      */}
      <p className="mt-6 text-muted leading-relaxed">
        Este aviso de privacidad está pendiente de redacción y aprobación por parte de FEM
        TOOLING o su asesor legal. Aquí se describirá qué datos se recaban (por ejemplo, a través
        del formulario de contacto), para qué se usan, y cómo ejercer tus derechos.
      </p>
    </div>
  );
}
