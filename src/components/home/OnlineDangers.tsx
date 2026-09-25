import { Globe2, MessageCircleWarning, Timer } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const onlineDangers = [
  {
    icon: MessageCircleWarning,
    number: "01",
    title: "Cyberbullying (Perundungan Digital)",
    description:
      "Cyberbullying bisa terjadi kapan saja, di mana saja, dan oleh siapa saja yang memiliki perangkat digital.",
    statistic:
      "36,5% anak pernah mengalami cyberbullying dalam berbagai bentuk, termasuk komentar kebencian, lelucon rasis, hingga ancaman fisik.",
    detail:
      "Sebagian besar anak memilih diam dan tidak melaporkan kejadian tersebut. Aplikasi pelacak ponsel membantu orang tua mendeteksi dan mencegah bahaya ini.",
  },
  {
    icon: Globe2,
    number: "02",
    title: "Mengakses Situs Dewasa",
    description:
      "53% anak usia 10–15 tahun pernah melihat konten dewasa, baik secara tidak sengaja maupun sengaja mencari.",
    statistic:
      "Meskipun dianggap sepele oleh sebagian orang, situs dewasa menempati peringkat ke-3 sebagai masalah kesehatan utama bagi anak.",
    detail:
      "Dengan memantau riwayat website, orang tua bisa mendeteksi situs yang tidak pantas yang dikunjungi anak.",
  },
  {
    icon: Timer,
    number: "03",
    title: "Kecanduan Internet",
    description:
      "Anak-anak menghabiskan waktu di depan layar hingga 74,5 jam per minggu.",
    statistic:
      "Hal ini membuat mereka semakin toleran dan membutuhkan waktu lebih lama untuk merasa puas, yang berujung pada sikap mudah marah dan agresif.",
    detail:
      "Aplikasi pelacak membantu orang tua mengetahui aktivitas apa yang paling menarik minat anak dan mengambil tindakan tepat waktu.",
  },
];

export function OnlineDangers() {
  return (
    <section
      id="bahaya-online"
      className="border-y border-[var(--border)] bg-[var(--bg)] py-20 scroll-mt-20"
    >
      <div className="container-page">
        <SectionHeading
          label="Waspada Bahaya Digital"
          title="Bahaya Online yang Tidak Diketahui 65% Orang Tua"
          description="Kenali risiko yang mungkin dihadapi anak saat beraktivitas di dunia digital dan dampingi mereka dengan lebih baik."
          center
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {onlineDangers.map(({ icon: Icon, number, title, description, statistic, detail }) => (
            <article key={title} className="card-hover flex h-full flex-col">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-950/50 dark:text-primary-300">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <span className="text-sm font-bold text-primary-500/60">{number}</span>
              </div>
              <h3 className="text-xl font-bold text-[var(--fg)]">{title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{description}</p>
              <p className="mt-4 rounded-xl bg-primary-50 p-4 text-sm font-medium leading-relaxed text-primary-900 dark:bg-primary-950/30 dark:text-primary-100">
                {statistic}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
