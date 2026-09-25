import { useMemo } from "react";
import { marked } from "marked";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import privacyRaw from "@/content/pages/Kebijakan-Privasi-PONSELPINTAR.md?raw";

export function PrivacyPage() {
  useSeo({
    title: "Kebijakan Privasi",
    description: "Kebijakan privasi PONSELPINTAR. Pelajari bagaimana kami mengumpulkan dan memproses data Anda.",
    canonical: "/kebijakan-privasi",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Kebijakan Privasi", item: `${siteConfig.url}/kebijakan-privasi` },
      ],
    },
  });

  const html = useMemo(() => marked.parse(privacyRaw, { async: false }) as string, []);

  return (
    <div className="py-12">
      <div className="container-prose">
        <Breadcrumbs items={[{ label: "Kebijakan Privasi" }]} />

        <div
          className="prose-blog mt-8"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <div className="mt-12 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h3 className="text-lg font-bold text-[var(--fg)]">Pertanyaan tentang Privasi?</h3>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Hubungi kami jika Anda memiliki pertanyaan mengenai kebijakan privasi ini.
          </p>
          <div className="mt-4">
            <WhatsAppButton message="Halo Ponsel Pintar, saya ingin bertanya mengenai kebijakan privasi." />
          </div>
        </div>
      </div>
    </div>
  );
}
