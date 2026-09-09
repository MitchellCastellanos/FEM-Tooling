"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/lib/content";

type Status = "idle" | "submitting" | "success" | "error";

export function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/cotizacion", { method: "POST", body: formData });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-line bg-surface p-6 text-sm">
        Gracias — recibimos tu solicitud. Te contactaremos pronto.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nombre" name="nombre" required />
        <Field label="Empresa" name="empresa" />
        <Field label="Correo electrónico" name="correo" type="email" required />
        <Field label="Teléfono" name="telefono" type="tel" />
      </div>

      <label className="flex flex-col gap-1 text-sm">
        <span className="font-medium">Servicio de interés</span>
        <select
          name="servicio"
          className="rounded-md border border-line bg-surface px-3 py-2 text-sm"
          defaultValue=""
        >
          <option value="">Selecciona una opción (opcional)</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-1 text-sm">
        <span className="font-medium">Mensaje</span>
        <textarea
          name="mensaje"
          required
          rows={4}
          className="rounded-md border border-line bg-surface px-3 py-2 text-sm"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        <span className="font-medium">Adjuntar plano o archivo (opcional)</span>
        <input
          type="file"
          name="archivo"
          className="text-sm file:mr-3 file:rounded-md file:border-0 file:bg-navy file:px-3 file:py-1.5 file:text-white"
        />
      </label>

      <label className="flex items-start gap-2 text-xs text-muted">
        <input type="checkbox" required className="mt-0.5" />
        <span>
          Acepto que mis datos se usen para responder esta solicitud, conforme al{" "}
          <a href="/aviso-de-privacidad" className="underline">
            aviso de privacidad
          </a>
          .
        </span>
      </label>

      {status === "error" && (
        <p className="text-sm text-red-600">
          No se pudo enviar la solicitud. Intenta de nuevo o escríbenos por WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 self-start rounded-md bg-teal px-6 py-3 text-sm font-semibold text-white hover:bg-teal-dark disabled:opacity-60"
      >
        {status === "submitting" ? "Enviando…" : "Enviar solicitud de cotización"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1 text-sm">
      <span className="font-medium">
        {label}
        {required && "*"}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="rounded-md border border-line bg-surface px-3 py-2 text-sm"
      />
    </label>
  );
}
