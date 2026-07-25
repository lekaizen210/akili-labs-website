import { MetadataRoute } from "next";
import { expertises, references, blogPosts } from "@/lib/data";
import { BASE_URL } from "@/lib/seo";

function entry(
  path: string,
  opts: Partial<MetadataRoute.Sitemap[number]> = {}
): MetadataRoute.Sitemap[number] {
  const fr = path === "" ? BASE_URL : `${BASE_URL}${path}`;
  const en = `${BASE_URL}/en${path}`;
  return {
    url: fr,
    lastModified: new Date(),
    alternates: { languages: { fr, en } },
    ...opts,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    entry("", { changeFrequency: "weekly", priority: 1 }),
    entry("/a-propos", { changeFrequency: "monthly", priority: 0.8 }),
    entry("/references", { changeFrequency: "weekly", priority: 0.9 }),
    entry("/blog", { changeFrequency: "daily", priority: 0.8 }),
    entry("/contact", { changeFrequency: "monthly", priority: 0.9 }),
    entry("/faq", { changeFrequency: "monthly", priority: 0.8 }),
    entry("/carrieres", { changeFrequency: "weekly", priority: 0.7 }),
  ];

  const expertiseRoutes: MetadataRoute.Sitemap = expertises.map((e) =>
    entry(e.href, { changeFrequency: "monthly", priority: 0.8 })
  );

  const referenceRoutes: MetadataRoute.Sitemap = references.map((r) =>
    entry(`/references/${r.slug}`, { changeFrequency: "monthly", priority: 0.7 })
  );

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((p) =>
    entry(`/blog/${p.slug}`, { lastModified: new Date(p.date), changeFrequency: "monthly", priority: 0.6 })
  );

  return [...staticRoutes, ...expertiseRoutes, ...referenceRoutes, ...blogRoutes];
}
