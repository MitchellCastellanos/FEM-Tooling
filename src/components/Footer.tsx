import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white/80 mt-20">
      <div className="mx-auto max-w-6xl px-5 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-heading font-bold text-white text-lg">{site.name}</p>
          <p className="mt-3 text-sm leading-relaxed max-w-xs">{site.address}</p>
          <p className="mt-2 text-sm">{site.phone}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white transition-colors">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="text-sm">
          <p>{site.hours}</p>
          <Link href="/aviso-de-privacidad" className="inline-block mt-4 hover:text-white transition-colors">
            Aviso de privacidad
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {site.name} — Todos los derechos reservados.
      </div>

      <div className="border-t border-white/5 py-4 flex items-center justify-center gap-2">
        <a
          href="https://gabansolutions.ca"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs text-white/50 hover:text-white transition-colors"
        >
          <span>Sitio web creado por</span>
          <Image
            src="/images/gaban-logo.png"
            alt="GABAN Solutions"
            width={22}
            height={22}
            className="object-contain"
          />
          <span className="font-medium text-white/70">GABAN Solutions</span>
        </a>
      </div>
    </footer>
  );
}
