import { MessageCircle, ShieldCheck } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function FinalCTA() {
  return (
    <section className="py-20">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl border border-primary-200 bg-gradient-to-br from-primary-50 to-secondary-50 p-8 sm:p-12 lg:p-16 dark:border-primary-800 dark:from-primary-950/40 dark:to-secondary-950/30">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary-200/30 blur-3xl dark:bg-primary-800/20" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-secondary-200/20 blur-3xl dark:bg-secondary-800/20" />

          <div className="relative mx-auto max-w-2xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-600 text-white dark:bg-primary-500 dark:text-primary-950">
              <MessageCircle className="h-7 w-7" />
            </div>
            <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-[var(--fg)]">
              Siap Berkonsultasi?
            </h2>
            <p className="mt-4 text-lg text-[var(--muted)] leading-relaxed">
              Tim kami siap membantu Anda memahami layanan, kompatibilitas perangkat, dan memilih
              paket yang sesuai — semuanya dengan transparansi penuh.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <WhatsAppButton size="lg" />
              <span className="inline-flex items-center gap-2 text-sm text-[var(--muted)]">
                <ShieldCheck className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                Konsultasi tanpa biaya
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
