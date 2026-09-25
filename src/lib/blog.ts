import { marked } from "marked";

function parseFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const yamlBlock = match[1];
  const content = match[2];
  const data: Record<string, unknown> = {};

  for (const line of yamlBlock.split("\n")) {
    const m = line.match(/^(\w+):\s*(.*)$/);
    if (!m) continue;
    const key = m[1];
    let val: unknown = m[2];

    if ((val as string).startsWith("[") && (val as string).endsWith("]")) {
      val = (val as string)
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean);
    } else if ((val as string).startsWith('"') && (val as string).endsWith('"')) {
      val = (val as string).slice(1, -1);
    } else if (val === "true") {
      val = true;
    } else if (val === "false") {
      val = false;
    }

    data[key] = val;
  }

  return { data, content };
}

export interface BlogFrontmatter {
  id: string;
  title: string;
  description: string;
  slug: string;
  date: string;
  updated?: string;
  author: string;
  category: string;
  tags: string[];
  featuredImage?: string;
  draft: boolean;
  relatedPosts?: string[];
  seoTitle?: string;
  seoDescription?: string;
}

export interface BlogPost extends BlogFrontmatter {
  body: string;
  html: string;
  excerpt: string;
}

import jasaMelacakRaw from "@/content/blog/jasa-melacak-lokasi-no-hp-real-time.md?raw";

const rawPosts: string[] = [jasaMelacakRaw];

function extractFirstImage(html: string): string | null {
  const imgMatch = html.match(/<img[^>]+src="([^"]+)"/);
  return imgMatch ? imgMatch[1] : null;
}

function extractExcerpt(html: string, maxLen = 160): string {
  const text = html.replace(/<[^>]+>/g, "").trim();
  return text.length > maxLen ? text.slice(0, maxLen) + "…" : text;
}

function buildPost(raw: string): BlogPost {
  const { data, content } = parseFrontmatter(raw);
  const html = marked.parse(content, { async: false }) as string;
  const firstImage = extractFirstImage(html);
  const featuredImage =
    (data.featuredImage as string) || firstImage || "/images/blog-fallback.svg";

  return {
    id: data.id as string,
    title: data.title as string,
    description: data.description as string,
    slug: data.slug as string,
    date: data.date as string,
    updated: data.updated as string | undefined,
    author: data.author as string,
    category: data.category as string,
    tags: (data.tags as string[]) || [],
    featuredImage,
    draft: (data.draft as boolean) ?? false,
    relatedPosts: (data.relatedPosts as string[]) || [],
    seoTitle: data.seoTitle as string | undefined,
    seoDescription: data.seoDescription as string | undefined,
    body: content,
    html,
    excerpt: extractExcerpt(html),
  };
}

let _posts: BlogPost[] | null = null;

export function getAllPosts(): BlogPost[] {
  if (!_posts) {
    _posts = rawPosts
      .map(buildPost)
      .filter((p) => !p.draft)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }
  return _posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const all = getAllPosts();
  const current = all.find((p) => p.slug === currentSlug);
  if (!current) return all.slice(0, limit);

  if (current.relatedPosts && current.relatedPosts.length > 0) {
    const explicit = current.relatedPosts
      .map((id) => all.find((p) => p.id === id))
      .filter((p): p is BlogPost => !!p && p.slug !== currentSlug);
    if (explicit.length >= limit) return explicit.slice(0, limit);
    const remaining = all
      .filter((p) => p.slug !== currentSlug && !explicit.includes(p))
      .filter((p) => p.category === current.category)
      .slice(0, limit - explicit.length);
    return [...explicit, ...remaining].slice(0, limit);
  }

  const sameCategory = all
    .filter((p) => p.slug !== currentSlug && p.category === current.category)
    .slice(0, limit);
  if (sameCategory.length >= limit) return sameCategory;

  const sharedTags = all
    .filter((p) => p.slug !== currentSlug && !sameCategory.includes(p))
    .filter((p) => p.tags.some((t) => current.tags.includes(t)))
    .slice(0, limit - sameCategory.length);

  const combined = [...sameCategory, ...sharedTags];
  if (combined.length >= limit) return combined.slice(0, limit);

  const latest = all
    .filter((p) => p.slug !== currentSlug && !combined.includes(p))
    .slice(0, limit - combined.length);

  return [...combined, ...latest].slice(0, limit);
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
