import { Check, Star } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const pricingPlans = [
  {
    name: "1 Bulan",
    duration: "Tagihan bulanan",
    price: "$49.99",
    summary: "Akses monitoring satu perangkat dengan fitur inti.",
    highlighted: false,
    features: [
      "Pemantauan panggilan dan SMS",
      "Pelacakan lokasi GPS real-time",
      "Riwayat browser dan bookmark",
      "Pemantauan WhatsApp & media sosial",
      "Akses foto, video, dan audio",
      "Keylogger dan pemantauan aplikasi",
    ],
  },
  {
    name: "3 Bulan",
    duration: "Setara $27.99/bulan",
    price: "$83.97",
    summary: "Pilihan populer untuk pemantauan berkelanjutan dengan harga lebih hemat.",
    highlighted: true,
    features: [
      "Semua fitur paket 1 Bulan",
      "Pemulihan pesan dan panggilan terhapus",
      "Pemantauan aplikasi dan penggunaan perangkat",
      "Notifikasi perubahan SIM",
      "Pemblokiran aplikasi dan situs web",
      "Dukungan konsultasi prioritas",
    ],
  },
  {
    name: "12 Bulan",
    duration: "Setara $12.49/bulan",
    price: "$149.88",
    summary: "Nilai terbaik untuk kebutuhan pemantauan keluarga sepanjang tahun.",
    highlighted: false,
    features: [
      "Semua fitur paket 3 Bulan",
      "Riwayat lokasi dan geofence",
      "Kontrol jarak jauh perangkat yang didukung",
      "Laporan aktivitas dan dashboard monitoring",
      "Dukungan instalasi dan konfigurasi",
      "Pembaruan layanan selama masa aktif",
    ],
  },
] as const;

export function Pricing() {
  return (
    <section id="paket" className="py-20 scroll-mt-20">
      <div className="container-page">
        <SectionHeading
          label="Paket Layanan"
          title="Pilih Paket PonselPintar"
          description="Paket disusun berdasarkan struktur paket uMobix. Harga dapat berubah mengikuti kurs, promo, pajak, dan ketersediaan fitur pada sistem operasi perangkat."
          center
        />

        <div className="hidden lg:block">
          <div className="overflow-hidden rounded-2xl border border-[var(--border)]">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--border)] bg-[var(--surface)]">
                  <th className="w-1/4 p-6 text-left text-sm font-semibold text-[var(--fg)]">Perbandingan Paket</th>
                  {pricingPlans.map((plan) => (
                    <th key={plan.name} className={`p-6 text-center ${plan.highlighted ? "bg-primary-50 dark:bg-primary-950/30" : ""}`}>
                      <div className="flex flex-col items-center gap-1">
                        {plan.highlighted && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-primary-600 px-2 py-0.5 text-[10px] font-semibold text-white dark:bg-primary-500 dark:text-primary-950">
                            <Star className="h-3 w-3" /> Populer
                          </span>
                        )}
                        <span className="text-base font-bold text-[var(--fg)]">{plan.name}</span>
                        <span className="text-xs text-[var(--muted)]">{plan.duration}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--border)]">
                  <td className="p-6 text-sm text-[var(--muted)]">Harga</td>
                  {pricingPlans.map((plan) => (
                    <td key={plan.name} className={`p-6 text-center text-sm font-bold text-[var(--fg)] ${plan.highlighted ? "bg-primary-50/50 dark:bg-primary-950/20" : ""}`}>
                      {plan.price}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="p-6 text-sm text-[var(--muted)]">Ringkasan</td>
                  {pricingPlans.map((plan) => (
                    <td key={plan.name} className={`p-6 text-center text-xs leading-relaxed text-[var(--muted)] ${plan.highlighted ? "bg-primary-50/50 dark:bg-primary-950/20" : ""}`}>
                      {plan.summary}
                    </td>
                  ))}
                </tr>
                {pricingPlans.flatMap((plan) => plan.features).filter((feature, index, all) => all.indexOf(feature) === index).map((feature) => (
                  <tr key={feature} className="border-b border-[var(--border)] last:border-0">
                    <td className="p-6 text-sm text-[var(--fg)]">{feature}</td>
                    {pricingPlans.map((plan) => (
                      <td key={plan.name} className={`p-6 text-center ${plan.highlighted ? "bg-primary-50/50 dark:bg-primary-950/20" : ""}`}>
                        {plan.features.includes(feature) ? <Check className="mx-auto h-5 w-5 text-primary-600 dark:text-primary-400" /> : <span className="text-[var(--muted)]">—</span>}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td className="p-6" />
                  {pricingPlans.map((plan) => (
                    <td key={plan.name} className={`p-6 text-center ${plan.highlighted ? "bg-primary-50/50 dark:bg-primary-950/20" : ""}`}>
                      <WhatsAppButton size="sm" variant={plan.highlighted ? "primary" : "secondary"} message={`Halo PonselPintar, saya tertarik dengan paket ${plan.name}. Mohon informasi terbaru.`} label="Tanya via WhatsApp" className="w-full" />
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-4 lg:hidden">
          {pricingPlans.map((plan) => (
            <div key={plan.name} className={`card relative ${plan.highlighted ? "border-primary-400 ring-1 ring-primary-400 dark:border-primary-600 dark:ring-primary-600" : ""}`}>
              {plan.highlighted && <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-primary-600 px-3 py-1 text-xs font-semibold text-white dark:bg-primary-500 dark:text-primary-950"><Star className="h-3 w-3" /> Populer</span>}
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-bold text-[var(--fg)]">{plan.name}</h3>
                <span className="text-xs text-[var(--muted)]">{plan.duration}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{plan.summary}</p>
              <p className="mt-4 text-xl font-bold text-[var(--fg)]">{plan.price}</p>
              <ul className="mt-4 space-y-2">
                {plan.features.map((feature) => <li key={feature} className="flex items-start gap-2 text-sm text-[var(--fg)]"><Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-600 dark:text-primary-400" /><span>{feature}</span></li>)}
              </ul>
              <WhatsAppButton size="md" variant={plan.highlighted ? "primary" : "secondary"} message={`Halo PonselPintar, saya tertarik dengan paket ${plan.name}. Mohon informasi terbaru.`} label="Tanya via WhatsApp" className="mt-6 w-full" />
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-[var(--muted)]">Harga di atas adalah referensi USD berdasarkan struktur uMobix dan bukan harga resmi uMobix. Konfirmasi harga, fitur, dan izin penggunaan sebelum berlangganan.</p>
      </div>
    </section>
  );
}
