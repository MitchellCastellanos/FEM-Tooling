import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/content";

// Requiere la variable de entorno RESEND_API_KEY (misma cuenta de Resend que ya
// tiene verificado gabansolutions.ca en otro proyecto). Configúrala en Vercel
// (Project Settings → Environment Variables) y, para probar en local, en un
// archivo .env.local (ya está en .gitignore, nunca se sube al repo).
// Se crea dentro del handler (no al cargar el módulo) para que el build no
// truene si la variable todavía no existe en ese entorno.

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.error("[cotizacion] Falta RESEND_API_KEY — no se puede enviar el correo.");
    return NextResponse.json(
      { ok: false, error: "El envío de correo no está configurado todavía." },
      { status: 500 }
    );
  }
  const resend = new Resend(process.env.RESEND_API_KEY);

  const formData = await request.formData();

  const nombre = formData.get("nombre");
  const correo = formData.get("correo");
  const mensaje = formData.get("mensaje");
  const empresa = formData.get("empresa");
  const telefono = formData.get("telefono");
  const servicio = formData.get("servicio");
  const archivo = formData.get("archivo");

  if (
    typeof nombre !== "string" ||
    typeof correo !== "string" ||
    typeof mensaje !== "string" ||
    !nombre ||
    !correo ||
    !mensaje
  ) {
    return NextResponse.json(
      { ok: false, error: "Faltan campos requeridos." },
      { status: 400 }
    );
  }

  const attachments = [];
  if (archivo instanceof File && archivo.size > 0) {
    const buffer = Buffer.from(await archivo.arrayBuffer());
    attachments.push({ filename: archivo.name, content: buffer });
  }

  const html = `
    <p><strong>Nombre:</strong> ${nombre}</p>
    <p><strong>Empresa:</strong> ${empresa || "—"}</p>
    <p><strong>Correo:</strong> ${correo}</p>
    <p><strong>Teléfono:</strong> ${telefono || "—"}</p>
    <p><strong>Servicio de interés:</strong> ${servicio || "—"}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${String(mensaje).replace(/\n/g, "<br>")}</p>
  `;

  const { error } = await resend.emails.send({
    from: `Sitio FEM TOOLING <${site.quoteEmail}>`,
    to: site.quoteEmail,
    replyTo: correo,
    subject: `Nueva solicitud de cotización — ${nombre}`,
    html,
    attachments: attachments.length ? attachments : undefined,
  });

  if (error) {
    console.error("[cotizacion] Resend devolvió un error:", error);
    return NextResponse.json(
      { ok: false, error: "No se pudo enviar el correo." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
