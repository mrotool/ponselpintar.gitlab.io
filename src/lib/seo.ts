import { useEffect } from "react";
import { siteConfig } from "@/config/site";

interface SeoOptions {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  jsonLd?: object | object[];
}

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(data: object | object[]) {
  const existing = document.getElementById("json-ld-dynamic");
  if (existing) existing.remove();
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = "json-ld-dynamic";
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

export function useSeo(opts: SeoOptions = {}) {
  useEffect(() => {
    const title = opts.title
      ? `${opts.title} — ${siteConfig.brand}`
      : `${siteConfig.brand} — ${siteConfig.description}`;

    const desc = opts.description || siteConfig.description;
    const canonical = opts.canonical
      ? `${siteConfig.url}${opts.canonical}`
      : siteConfig.url;
    const ogImage = opts.ogImage || "/images/og-default.svg";

    document.title = title;
    upsertMeta("name", "description", desc);
    upsertLink("canonical", canonical);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", desc);
    upsertMeta("property", "og:type", opts.ogType || "website");
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:image", `${siteConfig.url}${ogImage}`);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", desc);
    upsertMeta("name", "twitter:image", `${siteConfig.url}${ogImage}`);

    if (opts.jsonLd) {
      upsertJsonLd(opts.jsonLd);
    } else {
      const existing = document.getElementById("json-ld-dynamic");
      if (existing) existing.remove();
    }
  }, [opts.title, opts.description, opts.canonical, opts.ogType, opts.ogImage, opts.jsonLd]);
}
