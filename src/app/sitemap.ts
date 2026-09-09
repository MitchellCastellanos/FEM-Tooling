import type { MetadataRoute } from "next";
import { nav, site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return nav.map((item) => ({
    url: `${site.siteUrl}${item.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.7,
  }));
}
