import Link from "next/link";
import type { ReactNode } from "react";

export function CtaButton({
  href,
  children,
  variant = "primary",
  size = "md",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
}) {
  const base =
    "inline-flex items-center justify-center rounded-md font-semibold transition-colors whitespace-nowrap";
  const sizes = size === "sm" ? "px-4 py-2 text-sm" : "px-6 py-3 text-base";
  const variants =
    variant === "primary"
      ? "bg-teal text-white hover:bg-teal-dark"
      : "bg-transparent border border-line text-ink hover:border-navy";
  return (
    <Link href={href} className={`${base} ${sizes} ${variants}`}>
      {children}
    </Link>
  );
}
