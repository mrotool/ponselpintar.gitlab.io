import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { Features } from "@/components/home/Features";
import { Showcase } from "@/components/home/Showcase";
import { HowItWorks } from "@/components/home/HowItWorks";
import { UseCases } from "@/components/home/UseCases";
import { Pricing } from "@/components/home/Pricing";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";
import { useSeo } from "@/lib/seo";
import { siteConfig, faqs } from "@/config/site";

export function HomePage() {
  useSeo({
    title: "Jasa Pemasangan Aplikasi Pengawas iOS iPhone/iPad Jarak Jauh",
    description: siteConfig.description,
    canonical: "/",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: siteConfig.brand,
        url: siteConfig.url,
        description: siteConfig.description,
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteConfig.brand,
        url: siteConfig.url,
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: `${siteConfig.brand} — Layanan Monitoring Perangkat`,
        serviceType: "Monitoring perangkat dan konsultasi",
        provider: { "@type": "Organization", name: siteConfig.brand },
        url: siteConfig.url,
        description: siteConfig.description,
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  });

  return (
    <>
      <Hero />
      <TrustStrip />
      <Features />
      <Showcase />
      <HowItWorks />
      <UseCases />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  );
}
