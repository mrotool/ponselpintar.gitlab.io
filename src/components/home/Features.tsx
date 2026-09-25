import { features } from "@/config/site";
import { getIcon } from "@/components/Icon";
import { SectionHeading } from "@/components/SectionHeading";
import { Info, Check } from "lucide-react";

export function Features() {
  return (
    <section id="fitur" className="py-20 scroll-mt-20">
      <div className="container-page">
        <SectionHeading
          label="Fitur Layanan"
          title="Fitur Monitoring Perangkat yang Lengkap"
          description="Pemahaman mendalam tentang aktivitas perangkat melalui berbagai fitur monitoring yang transparan dan bertanggung jawab."
          center
        />

        <div className="space-y-16">
          {features.map((feature, i) => {
            const Icon = getIcon(feature.icon);
            const reversed = i % 2 === 1;
            return (
              <div
                key={feature.title}
                className={`grid items-center gap-8 lg:grid-cols-2 ${
                  reversed ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={reversed ? "lg:col-start-2" : ""}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-600 text-white dark:bg-primary-500 dark:text-primary-950">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-[var(--fg)]">{feature.title}</h3>
                  <p className="mt-3 text-lg text-[var(--muted)] leading-relaxed">{feature.desc}</p>
                  <p className="mt-4 text-base text-[var(--fg)] leading-relaxed">{feature.detail}</p>
                  <ul className="mt-5 space-y-2">
                    {feature.highlights.map((hl) => (
                      <li key={hl} className="flex items-center gap-2 text-sm text-[var(--fg)]">
                        <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-950 dark:text-primary-400">
                          <Check className="h-3 w-3" />
                        </span>
                        {hl}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5">
                    <Info className="h-3.5 w-3.5 text-accent-600 dark:text-accent-400" />
                    <span className="text-xs font-medium text-[var(--muted)]">{feature.label}</span>
                  </div>
                </div>

                {/* Visual side — feature-specific mockup */}
                <div className={reversed ? "lg:col-start-1" : ""}>
                  <FeatureVisual icon={feature.icon} title={feature.title} highlights={feature.highlights} index={i} />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-xl border border-accent-200 bg-accent-50 p-4 dark:border-accent-900/50 dark:bg-accent-950/20">
          <p className="text-sm text-[var(--muted)] leading-relaxed">
            <strong className="text-[var(--fg)]">Disclaimer:</strong> Ketersediaan fitur dapat
            berbeda berdasarkan perangkat, sistem operasi, versi aplikasi, paket, dan ketentuan
            layanan. Hubungi kami untuk informasi fitur yang relevan dengan perangkat Anda.
          </p>
        </div>
      </div>
    </section>
  );
}

function FeatureVisual({ icon, title, highlights, index }: { icon: string; title: string; highlights: readonly string[]; index: number }) {
  const Icon = getIcon(icon);

  return (
    <div className="relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 overflow-hidden">
      <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary-100/40 to-secondary-100/30 dark:from-primary-950/30 dark:to-secondary-950/20" />

      {/* Phone frame mockup */}
      <div className="mx-auto w-full max-w-sm">
        {/* Status bar */}
        <div className="flex items-center justify-between rounded-t-2xl bg-[var(--bg)] px-4 py-2 text-[10px] text-[var(--muted)]">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <span className="h-2 w-3 rounded-sm bg-primary-400/60" />
            <span className="h-2 w-4 rounded-sm bg-primary-400/40" />
          </div>
        </div>

        {/* App header */}
        <div className="flex items-center gap-3 border-x border-[var(--border)] bg-[var(--bg)] px-4 py-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-600 text-white dark:bg-primary-500">
            <Icon className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-semibold text-[var(--fg)]">{title}</p>
            <p className="text-[10px] text-[var(--muted)]">Dashboard monitoring</p>
          </div>
          <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
        </div>

        {/* Content rows — feature specific */}
        <div className="rounded-b-2xl border border-[var(--border)] bg-[var(--bg)] divide-y divide-[var(--border)]">
          {highlights.map((hl, j) => (
            <div key={j} className="flex items-center gap-3 p-3">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600 dark:bg-primary-950 dark:text-primary-400">
                <Icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-[var(--fg)] truncate">{hl}</p>
                <p className="text-[10px] text-[var(--muted)]">
                  {["Aktif", "Sinkron", "Terbaru", "Tersedia"][j % 4]}
                </p>
              </div>
              <span className="text-[10px] text-[var(--muted)]">
                {`${10 + j + index}:4${j}`}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
