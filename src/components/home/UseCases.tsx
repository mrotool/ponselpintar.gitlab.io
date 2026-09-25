import { useCases } from "@/config/site";
import { getIcon } from "@/components/Icon";
import { SectionHeading } from "@/components/SectionHeading";
import { AlertTriangle } from "lucide-react";

export function UseCases() {
  return (
    <section className="py-20 bg-[var(--surface)] border-y border-[var(--border)]">
      <div className="container-page">
        <SectionHeading
          label="Use Cases"
          title="Penggunaan yang Sah dan Bertanggung Jawab"
          description="Layanan ini dirancang untuk kebutuhan yang sah, dengan izin dan transparansi."
          center
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {useCases.map((useCase) => {
            const Icon = getIcon(useCase.icon);
            return (
              <div
                key={useCase.title}
                className="card-hover group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white dark:bg-primary-950 dark:text-primary-400 dark:group-hover:bg-primary-500 dark:group-hover:text-primary-950">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-[var(--fg)]">{useCase.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">{useCase.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-xl border border-error/20 bg-error/5 p-4">
          <AlertTriangle className="h-5 w-5 flex-shrink-0 text-error mt-0.5" />
          <p className="text-sm text-[var(--muted)] leading-relaxed">
            <strong className="text-[var(--fg)]">Batasan penggunaan:</strong> Kami tidak
            mendukung stalking, pengintaian pasangan tanpa persetujuan, atau akses ke perangkat
            tanpa izin. Penggunaan harus sesuai hukum dan ketentuan yang berlaku.
          </p>
        </div>
      </div>
    </section>
  );
}
