import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";

export function ServiceCard({ title, summary }: { title: string; summary: string }) {
  return (
    <div className="border border-line bg-surface overflow-hidden flex flex-col">
      <PhotoPlaceholder label="Foto pendiente" className="h-40" />
      <div className="p-5 flex flex-col gap-2">
        <h3 className="font-heading font-bold text-base leading-snug">{title}</h3>
        <p className="text-sm text-muted leading-relaxed">{summary}</p>
      </div>
    </div>
  );
}
