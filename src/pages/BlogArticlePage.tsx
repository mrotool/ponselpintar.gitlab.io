import { useParams, Link, Navigate } from "react-router-dom";
import { Calendar, User, Clock, ArrowRight, ImageIcon } from "lucide-react";
import { getPostBySlug, getRelatedPosts, formatDate } from "@/lib/blog";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export function BlogArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  useSeo({
    title: post?.seoTitle || post?.title,
    description: post?.seoDescription || post?.description,
    canonical: post ? `/blog/${post.slug}` : "/blog",
    ogType: "article",
    ogImage: post?.featuredImage,
    jsonLd: post ? [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.description,
        author: { "@type": "Person", name: post.author },
        datePublished: post.date,
        dateModified: post.updated || post.date,
        url: `${siteConfig.url}/blog/${post.slug}`,
        image: post.featuredImage ? `${siteConfig.url}${post.featuredImage}` : undefined,
        publisher: { "@type": "Organization", name: siteConfig.brand },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Beranda", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: `${siteConfig.url}/blog/${post.slug}` },
        ],
      },
    ] : undefined,
  });

  if (!post) return <Navigate to="/blog" replace />;

  const related = getRelatedPosts(post.slug, 3);

  return (
    <article className="py-12">
      <div className="container-prose">
        <Breadcrumbs
          items={[
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]}
        />

        <header className="mt-8">
          <span className="section-label">{post.category}</span>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] text-[var(--fg)]">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-[var(--muted)] leading-relaxed">{post.description}</p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[var(--muted)]">
            <span className="inline-flex items-center gap-1.5">
              <User className="h-4 w-4" />
              {post.author}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {formatDate(post.date)}
            </span>
            {post.updated && post.updated !== post.date && (
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                Diperbarui {formatDate(post.updated)}
              </span>
            )}
          </div>
        </header>

        <div className="mt-8 aspect-[16/9] overflow-hidden rounded-2xl border border-[var(--border)] bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-950 dark:to-secondary-950 flex items-center justify-center">
          {post.featuredImage && !post.featuredImage.endsWith(".svg") ? (
            <img
              src={post.featuredImage}
              alt={post.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ) : (
            <ImageIcon className="h-16 w-16 text-primary-400 dark:text-primary-700" />
          )}
        </div>

        <div
          className="prose-blog mt-10"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        <div className="mt-12 rounded-2xl border border-primary-200 bg-primary-50/50 p-6 dark:border-primary-800 dark:bg-primary-950/20">
          <h3 className="text-lg font-bold text-[var(--fg)]">Butuh Bantuan?</h3>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Konsultasikan kebutuhan monitoring perangkat Anda dengan tim kami.
          </p>
          <div className="mt-4">
            <WhatsAppButton
              message={`Halo Ponsel Pintar, saya membaca artikel "${post.title}" dan ingin berkonsultasi.`}
            />
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="container-page mt-16">
          <h2 className="text-2xl font-bold text-[var(--fg)] mb-6">Artikel Terkait</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((relPost) => (
              <Link
                key={relPost.slug}
                to={`/blog/${relPost.slug}`}
                className="group card-hover flex flex-col"
              >
                <div className="relative aspect-[16/10] -mx-6 -mt-6 mb-4 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-950 dark:to-secondary-950 flex items-center justify-center">
                  {relPost.featuredImage && !relPost.featuredImage.endsWith(".svg") ? (
                    <img
                      src={relPost.featuredImage}
                      alt={relPost.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <ImageIcon className="h-10 w-10 text-primary-400 dark:text-primary-700" />
                  )}
                </div>
                <span className="section-label text-[10px]">{relPost.category}</span>
                <h3 className="mt-3 text-base font-bold text-[var(--fg)] group-hover:text-primary-600 dark:group-hover:text-primary-400">
                  {relPost.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-[var(--muted)] leading-relaxed line-clamp-2">
                  {relPost.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400">
                  Baca
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
