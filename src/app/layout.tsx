import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CookieBanner } from "@/components/CookieBanner";
import { Analytics } from "@/components/Analytics";
import { site } from "@/lib/content";

const heading = Archivo({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: `${site.name} — Diseño y fabricación de herramentales`,
    template: `%s | ${site.name}`,
  },
  description:
    "Diseño, manufactura, instalación y mantenimiento de herramentales industriales en Querétaro, con capacidades de medición 3D.",
  alternates: { canonical: "/" },
};

// Datos estructurados básicos de la empresa. Ver docs/PROMPTS_IMAGENES_IA.md
// y CHECKLIST.md — el logo real y el sameAs (redes sociales) siguen pendientes.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  legalName: site.legalName,
  description:
    "Diseño, manufactura, instalación y mantenimiento de herramentales industriales, con capacidades de medición 3D.",
  url: site.siteUrl,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
    addressLocality: "El Marqués",
    addressRegion: "Querétaro",
    addressCountry: "MX",
  },
  foundingDate: String(site.since),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-MX"
      className={`${heading.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
