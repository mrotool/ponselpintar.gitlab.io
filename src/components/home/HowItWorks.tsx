import { howItWorks } from "@/config/site";
import { SectionHeading } from "@/components/SectionHeading";

export function HowItWorks() {
  return (
    <section id="cara-kerja" className="py-20 scroll-mt-20">
      <div className="container-page">
        <SectionHeading
          label="Cara Kerja"
          title="Lima Langkah Sederhana"
          description="Proses dimulai dari konsultasi hingga penggunaan layanan secara bertanggung jawab."
          center
        />

        <div className="mx-auto max-w-3xl">
          <ol className="relative space-y-8">
            {howItWorks.map((step, i) => (
              <li key={i} className="relative flex gap-6">
                {/* Timeline line */}
                {i < howItWorks.length - 1 && (
                  <span
                    className="absolute left-[27px] top-14 bottom-[-32px] w-0.5 bg-gradient-to-b from-primary-300 to-primary-200 dark:from-primary-800 dark:to-primary-900"
                    aria-hidden="true"
                  />
                )}

                {/* Number circle */}
                <div className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-white font-bold text-lg shadow-lg shadow-primary-600/20 dark:bg-primary-500 dark:text-primary-950">
                  {i + 1}
                </div>

                {/* Content */}
                <div className="flex-1 pb-4">
                  <h3 className="text-lg font-bold text-[var(--fg)]">{step.title}</h3>
                  <p className="mt-2 text-base text-[var(--muted)] leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
