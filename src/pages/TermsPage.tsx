import { useMemo } from "react";
import { marked } from "marked";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import termsRaw from "@/content/pages/Syarat-Ketentuan-PONSELPINTAR.md?raw";

export function TermsPage() {
  useSeo({
    title: "Syarat dan Ketentuan Layanan",
    description: "Syarat dan ketentuan layanan PONSELPINTAR. Harap baca dengan teliti sebelum menggunakan layanan.",
    canonical: "/ketentuan-penggunaan",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Syarat dan Ketentuan", item: `${siteConfig.url}/ketentuan-penggunaan` },
      ],
    },
  });

  const html = useMemo(() => marked.parse(termsRaw, { async: false }) as string, []);

  return (
    <div className="py-12">
      <div className="container-prose">
        <Breadcrumbs items={[{ label: "Syarat dan Ketentuan" }]} />

        <div
          className="prose-blog mt-8"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <div className="mt-12 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h3 className="text-lg font-bold text-[var(--fg)]">Punya Pertanyaan?</h3>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Hubungi kami jika Anda memiliki pertanyaan mengenai ketentuan ini.
          </p>
          <div className="mt-4">
            <WhatsAppButton message="Halo Ponsel Pintar, saya ingin bertanya mengenai ketentuan penggunaan." />
          </div>
        </div>
      </div>
    </div>
  );
}
