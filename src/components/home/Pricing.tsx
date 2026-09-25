import { Check, Star } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";

type Feature = {
  name: string;
  detail: string;
};

const featureCatalog: Feature[] = [
  { name: "Pemantauan panggilan", detail: "Melihat panggilan masuk, keluar, tidak terjawab, serta informasi waktu dan durasinya pada perangkat yang diizinkan." },
  { name: "Pemantauan SMS", detail: "Menampilkan pesan SMS terkirim dan diterima, termasuk pengirim, penerima, isi pesan, dan waktu aktivitas." },
  { name: "Pelacakan lokasi GPS", detail: "Melihat lokasi perangkat pada peta, riwayat lokasi, dan pola perjalanan ketika GPS serta izin lokasi aktif." },
  { name: "Riwayat browser & bookmark", detail: "Meninjau situs yang dikunjungi, waktu kunjungan, frekuensi akses, dan bookmark pada browser yang didukung." },
  { name: "Pemantauan WhatsApp & media sosial", detail: "Meninjau aktivitas aplikasi sosial yang didukung. Ketersediaan dapat berbeda menurut sistem operasi dan versi aplikasi." },
  { name: "Akses foto, video & audio", detail: "Melihat media yang tersimpan pada perangkat sesuai izin akses penyimpanan yang diberikan." },
  { name: "Pemantauan aplikasi", detail: "Melihat daftar aplikasi terpasang dan informasi penggunaan aplikasi untuk memahami kebiasaan digital." },
  { name: "Keylogger", detail: "Mencatat input teks pada perangkat yang didukung. Fitur ini sangat sensitif dan hanya boleh digunakan dengan izin yang sah." },
  { name: "Pemulihan data terhapus", detail: "Membantu menampilkan pesan, panggilan, atau kontak yang terhapus apabila masih tersedia pada perangkat dan sistem yang didukung." },
  { name: "Notifikasi perubahan SIM", detail: "Memberikan pemberitahuan ketika kartu SIM pada perangkat mengalami perubahan, jika fitur tersedia pada sistem operasi." },
  { name: "Pemblokiran aplikasi & situs", detail: "Membantu membatasi aplikasi atau situs tertentu pada perangkat yang kompatibel untuk mendukung keamanan digital keluarga." },
  { name: "Riwayat lokasi & geofence", detail: "Menyimpan riwayat lokasi dan memberikan peringatan ketika perangkat memasuki atau meninggalkan area yang ditentukan." },
  { name: "Kontrol perangkat yang didukung", detail: "Menawarkan kontrol terbatas seperti pembatasan aplikasi atau koneksi pada perangkat yang mendukung dan telah mendapat izin." },
  { name: "Dashboard & laporan aktivitas", detail: "Menyajikan ringkasan aktivitas dalam dashboard agar informasi lebih mudah dipahami dan ditinjau." },
  { name: "Dukungan instalasi & konfigurasi", detail: "Mendapatkan panduan konfigurasi resmi, konsultasi kompatibilitas, dan bantuan penggunaan sesuai ketentuan layanan." },
];

const featureByName = Object.fromEntries(featureCatalog.map((feature) => [feature.name, feature]));

const pricingPlans = [
  {
    name: "1 Bulan",
    duration: "Tagihan bulanan",
    price: "$49.99",
    summary: "Akses monitoring satu perangkat dengan fitur inti.",
    highlighted: false,
    features: ["Pemantauan panggilan", "Pemantauan SMS", "Pelacakan lokasi GPS", "Riwayat browser & bookmark", "Pemantauan WhatsApp & media sosial", "Akses foto, video & audio", "Pemantauan aplikasi", "Keylogger"],
  },
  {
    name: "3 Bulan",
    duration: "Setara $27.99/bulan",
    price: "$83.97",
    summary: "Pilihan populer untuk pemantauan berkelanjutan dengan harga lebih hemat.",
    highlighted: true,
    features: ["Pemantauan panggilan", "Pemantauan SMS", "Pelacakan lokasi GPS", "Riwayat browser & bookmark", "Pemantauan WhatsApp & media sosial", "Akses foto, video & audio", "Pemantauan aplikasi", "Keylogger", "Pemulihan data terhapus", "Notifikasi perubahan SIM", "Pemblokiran aplikasi & situs", "Dukungan instalasi & konfigurasi"],
  },
  {
    name: "12 Bulan",
    duration: "Setara $12.49/bulan",
    price: "$149.88",
    summary: "Nilai terbaik untuk kebutuhan pemantauan keluarga sepanjang tahun.",
    highlighted: false,
    features: ["Pemantauan panggilan", "Pemantauan SMS", "Pelacakan lokasi GPS", "Riwayat browser & bookmark", "Pemantauan WhatsApp & media sosial", "Akses foto, video & audio", "Pemantauan aplikasi", "Keylogger", "Pemulihan data terhapus", "Notifikasi perubahan SIM", "Pemblokiran aplikasi & situs", "Riwayat lokasi & geofence", "Kontrol perangkat yang didukung", "Dashboard & laporan aktivitas", "Dukungan instalasi & konfigurasi"],
  },
] as const;

const allPlanFeatures = pricingPlans.flatMap((plan) => plan.features).filter((feature, index, all) => all.indexOf(feature) === index);

export function Pricing() {
  return (
    <section id="paket" className="py-20 scroll-mt-20">
      <div className="container-page">
        <SectionHeading label="Paket Layanan" title="Pilih Paket PonselPintar" description="Setiap fitur dijelaskan secara rinci agar Anda dapat memilih paket berdasarkan kebutuhan. Harga dan ketersediaan fitur dapat berbeda menurut sistem operasi, kurs, promo, pajak, dan konfigurasi perangkat." center />

        <div className="hidden lg:block">
          <div className="overflow-x-auto rounded-2xl border border-[var(--border)]">
            <table className="w-full min-w-[960px]">
              <thead>
                <tr className="border-b border-[var(--border)] bg-[var(--surface)]">
                  <th className="w-[28%] p-6 text-left text-sm font-semibold text-[var(--fg)]">Daftar fitur</th>
                  {pricingPlans.map((plan) => <th key={plan.name} className={`p-6 text-center ${plan.highlighted ? "bg-primary-50 dark:bg-primary-950/30" : ""}`}><div className="flex flex-col items-center gap-1">{plan.highlighted && <span className="inline-flex items-center gap-1 rounded-full bg-primary-600 px-2 py-0.5 text-[10px] font-semibold text-white dark:bg-primary-500 dark:text-primary-950"><Star className="h-3 w-3" /> Populer</span>}<span className="text-base font-bold text-[var(--fg)]">{plan.name}</span><span className="text-xs text-[var(--muted)]">{plan.duration}</span></div></th>)}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--border)]"><td className="p-6 text-sm text-[var(--muted)]">Harga</td>{pricingPlans.map((plan) => <td key={plan.name} className={`p-6 text-center text-sm font-bold text-[var(--fg)] ${plan.highlighted ? "bg-primary-50/50 dark:bg-primary-950/20" : ""}`}>{plan.price}</td>)}</tr>
                <tr className="border-b border-[var(--border)]"><td className="p-6 text-sm text-[var(--muted)]">Ringkasan</td>{pricingPlans.map((plan) => <td key={plan.name} className={`p-6 text-center text-xs leading-relaxed text-[var(--muted)] ${plan.highlighted ? "bg-primary-50/50 dark:bg-primary-950/20" : ""}`}>{plan.summary}</td>)}</tr>
                {allPlanFeatures.map((featureName) => <tr key={featureName} className="border-b border-[var(--border)]"><td className="p-5 text-left"><p className="text-sm font-semibold text-[var(--fg)]">{featureName}</p><p className="mt-1 text-xs leading-relaxed text-[var(--muted)]">{featureByName[featureName].detail}</p></td>{pricingPlans.map((plan) => <td key={plan.name} className={`p-5 text-center ${plan.highlighted ? "bg-primary-50/50 dark:bg-primary-950/20" : ""}`}>{plan.features.includes(featureName) ? <Check className="mx-auto h-5 w-5 text-primary-600 dark:text-primary-400" aria-label={`${featureName} tersedia`} /> : <span className="text-[var(--muted)]">—</span>}</td>)}</tr>)}
                <tr><td className="p-6" />{pricingPlans.map((plan) => <td key={plan.name} className={`p-6 text-center ${plan.highlighted ? "bg-primary-50/50 dark:bg-primary-950/20" : ""}`}><WhatsAppButton size="sm" variant={plan.highlighted ? "primary" : "secondary"} message={`Halo PonselPintar, saya tertarik dengan paket ${plan.name}. Mohon informasi terbaru.`} label="Tanya via WhatsApp" className="w-full" /></td>)}</tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-4 lg:hidden">{pricingPlans.map((plan) => <div key={plan.name} className={`card relative ${plan.highlighted ? "border-primary-400 ring-1 ring-primary-400 dark:border-primary-600 dark:ring-primary-600" : ""}`}>{plan.highlighted && <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-primary-600 px-3 py-1 text-xs font-semibold text-white dark:bg-primary-500 dark:text-primary-950"><Star className="h-3 w-3" /> Populer</span>}<div className="flex items-baseline justify-between"><h3 className="text-lg font-bold text-[var(--fg)]">{plan.name}</h3><span className="text-xs text-[var(--muted)]">{plan.duration}</span></div><p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{plan.summary}</p><p className="mt-4 text-xl font-bold text-[var(--fg)]">{plan.price}</p><ul className="mt-4 space-y-4">{plan.features.map((featureName) => <li key={featureName} className="flex items-start gap-2 text-sm text-[var(--fg)]"><Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-600 dark:text-primary-400" /><span><strong>{featureName}</strong><span className="mt-1 block text-xs leading-relaxed text-[var(--muted)]">{featureByName[featureName].detail}</span></span></li>)}</ul><WhatsAppButton size="md" variant={plan.highlighted ? "primary" : "secondary"} message={`Halo PonselPintar, saya tertarik dengan paket ${plan.name}. Mohon informasi terbaru.`} label="Tanya via WhatsApp" className="mt-6 w-full" /></div>)}</div>

        <p className="mt-8 text-center text-sm text-[var(--muted)]">Harga di atas adalah referensi USD berdasarkan struktur uMobix dan bukan harga resmi uMobix. Pastikan penggunaan memiliki izin yang sah dan konfirmasi harga, fitur, serta kompatibilitas sebelum berlangganan.</p>
      </div>
    </section>
  );
}
