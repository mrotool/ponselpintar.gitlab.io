import { Check, Star } from "lucide-react";
import { packages } from "@/config/site";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Pricing() {
  return (
    <section id="paket" className="py-20 scroll-mt-20">
      <div className="container-page">
        <SectionHeading
          label="Paket Layanan"
          title="Pilih Paket yang Sesuai"
          description="Paket layanan konsultasi dan informasi monitoring perangkat. Hubungi kami untuk informasi terkini."
          center
        />

        {/* Desktop: comparison table */}
        <div className="hidden lg:block">
          <div className="overflow-hidden rounded-2xl border border-[var(--border)]">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--border)] bg-[var(--surface)]">
                  <th className="p-6 text-left text-sm font-semibold text-[var(--fg)] w-1/4">
                    Perbandingan Paket
                  </th>
                  {packages.map((pkg) => (
                    <th
                      key={pkg.name}
                      className={`p-6 text-center ${
                        pkg.highlighted
                          ? "bg-primary-50 dark:bg-primary-950/30"
                          : ""
                      }`}
                    >
                      <div className="flex flex-col items-center gap-1">
                        {pkg.highlighted && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-primary-600 px-2 py-0.5 text-[10px] font-semibold text-white dark:bg-primary-500 dark:text-primary-950">
                            <Star className="h-3 w-3" />
                            Populer
                          </span>
                        )}
                        <span className="text-base font-bold text-[var(--fg)]">{pkg.name}</span>
                        <span className="text-xs text-[var(--muted)]">{pkg.duration}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--border)]">
                  <td className="p-6 text-sm text-[var(--muted)]">Harga</td>
                  {packages.map((pkg) => (
                    <td
                      key={pkg.name}
                      className={`p-6 text-center text-sm font-bold text-[var(--fg)] ${
                        pkg.highlighted ? "bg-primary-50/50 dark:bg-primary-950/20" : ""
                      }`}
                    >
                      {pkg.price}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="p-6 text-sm text-[var(--muted)]">Ringkasan</td>
                  {packages.map((pkg) => (
                    <td
                      key={pkg.name}
                      className={`p-6 text-center text-xs text-[var(--muted)] leading-relaxed ${
                        pkg.highlighted ? "bg-primary-50/50 dark:bg-primary-950/20" : ""
                      }`}
                    >
                      {pkg.summary}
                    </td>
                  ))}
                </tr>
                {packages[0].features.map((_, featureIdx) => (
                  <tr key={featureIdx} className="border-b border-[var(--border)] last:border-0">
                    <td className="p-6 text-sm text-[var(--fg)]">
                      {packages[0].features[featureIdx]}
                    </td>
                    {packages.map((pkg) => (
                      <td
                        key={pkg.name}
                        className={`p-6 text-center ${
                          pkg.highlighted ? "bg-primary-50/50 dark:bg-primary-950/20" : ""
                        }`}
                      >
                        {pkg.features[featureIdx] ? (
                          <Check className="mx-auto h-5 w-5 text-primary-600 dark:text-primary-400" />
                        ) : (
                          <span className="text-[var(--muted)]">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td className="p-6"></td>
                  {packages.map((pkg) => (
                    <td
                      key={pkg.name}
                      className={`p-6 text-center ${
                        pkg.highlighted ? "bg-primary-50/50 dark:bg-primary-950/20" : ""
                      }`}
                    >
                      <WhatsAppButton
                        size="sm"
                        variant={pkg.highlighted ? "primary" : "secondary"}
                        message={`Halo Ponsel Pintar, saya tertarik dengan ${pkg.name} (${pkg.duration}). Mohon informasinya.`}
                        label="Tanya via WhatsApp"
                        className="w-full"
                      />
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile: cards */}
        <div className="space-y-4 lg:hidden">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`card relative ${
                pkg.highlighted
                  ? "border-primary-400 dark:border-primary-600 ring-1 ring-primary-400 dark:ring-primary-600"
                  : ""
              }`}
            >
              {pkg.highlighted && (
                <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-primary-600 px-3 py-1 text-xs font-semibold text-white dark:bg-primary-500 dark:text-primary-950">
                  <Star className="h-3 w-3" />
                  Populer
                </span>
              )}
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-bold text-[var(--fg)]">{pkg.name}</h3>
                <span className="text-xs text-[var(--muted)]">{pkg.duration}</span>
              </div>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">{pkg.summary}</p>
              <p className="mt-4 text-xl font-bold text-[var(--fg)]">{pkg.price}</p>
              <ul className="mt-4 space-y-2">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[var(--fg)]">
                    <Check className="h-4 w-4 flex-shrink-0 text-primary-600 dark:text-primary-400 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <WhatsAppButton
                size="md"
                variant={pkg.highlighted ? "primary" : "secondary"}
                message={`Halo Ponsel Pintar, saya tertarik dengan ${pkg.name} (${pkg.duration}). Mohon informasinya.`}
                label="Tanya via WhatsApp"
                className="mt-6 w-full"
              />
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-[var(--muted)]">
          Harga dan fitur dapat berubah sesuai konfigurasi layanan. Hubungi kami untuk informasi terkini.
        </p>
      </div>
    </section>
  );
}
