import { site } from "@/lib/content";

const items = [
  `Desde ${site.since}`,
  site.city,
  "Instalación y puesta a punto en sitio",
  "Medición 3D: laser tracker y brazo de 7 ejes",
];

export function TrustStrip() {
  return (
    <div className="border-y border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-5 flex flex-wrap gap-x-10 gap-y-2 justify-center text-sm font-medium text-muted">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}
