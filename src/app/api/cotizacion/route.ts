import { NextResponse } from "next/server";

// TODO (Fase 4, bloqueante): conectar un proveedor de correo transaccional real
// (p. ej. Resend o SendGrid) para reenviar esta solicitud a site.quoteEmail, y un
// almacenamiento de archivos (S3/R2) para el plano adjunto. Por ahora esta ruta
// valida la solicitud pero NO envía ningún correo — no usar en producción tal cual.
export async function POST(request: Request) {
  const formData = await request.formData();

  const nombre = formData.get("nombre");
  const correo = formData.get("correo");
  const mensaje = formData.get("mensaje");
  const archivo = formData.get("archivo");

  if (!nombre || !correo || !mensaje) {
    return NextResponse.json(
      { ok: false, error: "Faltan campos requeridos." },
      { status: 400 }
    );
  }

  console.log("[cotizacion] Nueva solicitud (sin enviar aún, falta integración de correo):", {
    nombre,
    correo,
    empresa: formData.get("empresa"),
    telefono: formData.get("telefono"),
    servicio: formData.get("servicio"),
    mensaje,
    archivo: archivo instanceof File ? archivo.name : null,
  });

  return NextResponse.json({ ok: true });
}
