// Bloque visual temporal mientras llegan las fotografías reales del cliente
// (ver CHECKLIST.md, fase "1. Contenido base"). Sustituir por <Image> real.
export function PhotoPlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
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
