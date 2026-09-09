import Image from "next/image";

// Muestra la foto real si ya existe el archivo en /public; si no, muestra un
// bloque temporal. Ver docs/PROMPTS_IMAGENES_IA.md para dónde poner cada archivo.
export function PhotoPlaceholder({
  label,
  src,
  alt,
  className = "",
}: {
  label: string;
  src?: string;
  alt?: string;
  className?: string;
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt ?? label}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br from-navy to-navy-dark text-white/70 ${className}`}
    >
      <span className="px-4 text-center text-xs font-medium uppercase tracking-wide">
        {label}
      </span>
    </div>
  );
}
