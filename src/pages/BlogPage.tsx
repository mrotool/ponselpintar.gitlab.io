import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, ImageIcon } from "lucide-react";
import { getAllPosts, formatDate } from "@/lib/blog";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export function BlogPage() {
  const posts = getAllPosts();

  useSeo({
    title: "Blog",
    description: "Artikel edukasi seputar monitoring perangkat, keamanan digital keluarga, dan penggunaan layanan secara bertanggung jawab.",
    canonical: "/blog",
    ogType: "website",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: `${siteConfig.brand} Blog`,
        url: `${siteConfig.url}/blog`,
        description: "Artikel edukasi seputar monitoring perangkat secara bertanggung jawab.",
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Beranda", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
        ],
      },
    ],
  });

  const [featured, ...rest] = posts;

  return (
    <div className="py-12">
      <div className="container-prose">
        <Breadcrumbs items={[{ label: "Blog" }]} />
      </div>

      <div className="container-page mt-8">
        <div className="mb-12 max-w-2xl">
          <span className="section-label">Blog & Edukasi</span>
          <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-[var(--fg)]">
            Edukasi Monitoring Perangkat
          </h1>
          <p className="mt-4 text-lg text-[var(--muted)] leading-relaxed">
            Artikel edukasi seputar monitoring perangkat, keamanan digital keluarga, dan
            penggunaan layanan secara bertanggung jawab.
          </p>
        </div>

        {/* Featured post */}
        {featured && (
          <Link
            to={`/blog/${featured.slug}`}
            className="group mb-12 block overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition-all hover:border-primary-300 hover:shadow-lg dark:hover:border-primary-700"
          >
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="relative aspect-[16/10] bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-950 dark:to-secondary-950 flex items-center justify-center">
                {featured.featuredImage && !featured.featuredImage.endsWith(".svg") ? (
                  <img
                    src={featured.featuredImage}
                    alt={featured.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <ImageIcon className="h-16 w-16 text-primary-400 dark:text-primary-700" />
                )}
              </div>
              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <span className="section-label">{featured.category}</span>
                <h2 className="mt-4 text-2xl font-bold text-[var(--fg)] group-hover:text-primary-600 dark:group-hover:text-primary-400">
                  {featured.title}
                </h2>
                <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed">
                  {featured.description}
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-[var(--muted)]">
                  <span className="inline-flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5" />
                    {featured.author}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {formatDate(featured.date)}
                  </span>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400">
                  Baca artikel
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        )}

        {/* Grid of remaining posts */}
        {rest.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group card-hover flex flex-col"
              >
                <div className="relative aspect-[16/10] -mx-6 -mt-6 mb-4 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-950 dark:to-secondary-950 flex items-center justify-center">
                  {post.featuredImage && !post.featuredImage.endsWith(".svg") ? (
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <ImageIcon className="h-10 w-10 text-primary-400 dark:text-primary-700" />
                  )}
                </div>
                <span className="section-label text-[10px]">{post.category}</span>
                <h3 className="mt-3 text-lg font-bold text-[var(--fg)] group-hover:text-primary-600 dark:group-hover:text-primary-400">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-[var(--muted)] leading-relaxed line-clamp-2">
                  {post.description}
                </p>
                <div className="mt-4 flex items-center gap-3 text-xs text-[var(--muted)]">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {formatDate(post.date)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center">
          <h3 className="text-xl font-bold text-[var(--fg)]">Punya Pertanyaan?</h3>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Konsultasikan kebutuhan monitoring perangkat Anda langsung via WhatsApp.
          </p>
          <div className="mt-6 flex justify-center">
            <WhatsAppButton />
          </div>
        </div>
      </div>
    </div>
  );
}
