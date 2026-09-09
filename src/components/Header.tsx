import Link from "next/link";
import { nav } from "@/lib/content";
import { CtaButton } from "@/components/CtaButton";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur border-b border-line">
      <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between gap-6">
        <Link href="/" className="font-heading font-extrabold text-lg tracking-tight text-navy">
          FEM <span className="text-teal">TOOLING</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-ink/80">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-navy transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>
        <CtaButton href="/contacto" size="sm">
          Solicitar cotización
        </CtaButton>
      </div>
    </header>
  );
}
