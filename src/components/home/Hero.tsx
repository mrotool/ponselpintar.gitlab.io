import { ArrowRight, ShieldCheck, Smartphone, Monitor, Wifi } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary-200/30 blur-3xl dark:bg-primary-900/20" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-secondary-200/20 blur-3xl dark:bg-secondary-900/20" />
      </div>

      <div className="container-page py-16 sm:py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-up">
            <span className="section-label">
              <ShieldCheck className="h-3.5 w-3.5" />
              Monitoring Perangkat Secara Bertanggung Jawab
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-[var(--fg)]">
              Aplikasi Parental Control —{" "}
              <span className="text-primary-600 dark:text-primary-400">Pengawas iPhone Jarak Jauh</span>
            </h1>

            <p className="mt-6 text-lg text-[var(--muted)] leading-relaxed max-w-xl">
              Solusi pemantauan perangkat iOS untuk kebutuhan keluarga dan pengawas perangkat iOS
              jarak jauh, dengan mengutamakan transparansi, izin, dan penggunaan yang bertanggung
              jawab.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton size="lg" />
              <Link
                to="/#fitur"
                className="btn-secondary btn-lg px-6 py-3.5 text-base"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("fitur")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Lihat Fitur
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 flex items-start gap-3 rounded-xl border border-primary-200 bg-primary-50/50 p-4 dark:border-primary-800 dark:bg-primary-950/30">
              <ShieldCheck className="h-5 w-5 flex-shrink-0 text-primary-600 dark:text-primary-400 mt-0.5" />
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                <strong className="text-[var(--fg)]">Catatan transparansi:</strong> Layanan
                ini dimaksudkan untuk penggunaan dengan izin yang sah. Pemantauan tanpa izin
                tidak didukung dan dapat melanggar hukum yang berlaku.
              </p>
            </div>
          </div>

          {/* Visual illustration */}
          <div className="relative animate-scale-in">
            <div className="relative mx-auto max-w-md">
              {/* Dashboard card mockup */}
              <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-xl shadow-primary-900/10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-error/60" />
                    <div className="h-3 w-3 rounded-full bg-warning/60" />
                    <div className="h-3 w-3 rounded-full bg-success/60" />
                  </div>
                  <span className="text-xs text-[var(--muted)]">Dashboard</span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 rounded-xl border border-[var(--border)] p-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-950 dark:text-primary-400">
                      <Smartphone className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-[var(--fg)]">Perangkat Terhubung</p>
                      <p className="text-xs text-[var(--muted)]">Status: Aktif</p>
                    </div>
                    <span className="h-2 w-2 rounded-full bg-success" />
                  </div>

                  <div className="flex items-center gap-3 rounded-xl border border-[var(--border)] p-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary-100 text-secondary-600 dark:bg-secondary-950 dark:text-secondary-400">
                      <Monitor className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-[var(--fg)]">Ringkasan Aktivitas</p>
                      <p className="text-xs text-[var(--muted)]">Harian</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl border border-[var(--border)] p-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-100 text-accent-600 dark:bg-accent-900/40 dark:text-accent-400">
                      <Wifi className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-[var(--fg)]">Konektivitas</p>
                      <p className="text-xs text-[var(--muted)]">Sinkronisasi data</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="rounded-lg border border-[var(--border)] p-3 text-center">
                        <p className="text-lg font-bold text-primary-600 dark:text-primary-400">
                          {["24%", "18%", "12%"][i - 1]}
                        </p>
                        <p className="text-[10px] text-[var(--muted)] mt-1">
                          {["Aplikasi", "Pesan", "Aktivitas"][i - 1]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-lg animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  <div>
                    <p className="text-xs font-semibold text-[var(--fg)]">Izin Sah</p>
                    <p className="text-[10px] text-[var(--muted)]">Transparan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
