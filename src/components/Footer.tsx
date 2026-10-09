import { Link } from "react-router-dom";
import { MessageCircle, Shield, Clock, Mail, Smartphone, Eye, Heart } from "lucide-react";
import { siteConfig, legalLinks, navLinks } from "@/config/site";
import { Logo } from "@/components/Logo";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto">
      <div className="bg-gradient-to-b from-primary-50 to-transparent dark:from-primary-950/20">
        <div className="container-page py-14">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
            <div className="space-y-5">
              <Logo />
              <p className="text-sm leading-relaxed text-[var(--muted)] max-w-xs">
                {siteConfig.description}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700 dark:border-primary-800 dark:bg-primary-950 dark:text-primary-300">
                  <Shield className="h-3.5 w-3.5" />
                  Izin Sah
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-200 bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-700 dark:border-accent-900/50 dark:bg-accent-950/30 dark:text-accent-300">
                  <Heart className="h-3.5 w-3.5" />
                  Parental Control
                </span>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-bold text-[var(--fg)] uppercase tracking-wider">Navigasi</h3>
              <ul className="space-y-2.5 text-sm">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    {link.href.startsWith("/#") ? (
                      <a
                        href={link.href}
                        className="text-[var(--muted)] hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-[var(--muted)] hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-bold text-[var(--fg)] uppercase tracking-wider">Informasi</h3>
              <ul className="space-y-2.5 text-sm">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-[var(--muted)] hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold text-[var(--fg)] uppercase tracking-wider">Hubungi Kami</h3>
              <ul className="space-y-3 text-sm text-[var(--muted)]">
                <li className="flex items-start gap-2.5">
                  <Smartphone className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary-600 dark:text-primary-400" />
                  <span>Android & iOS didukung</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Clock className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary-600 dark:text-primary-400" />
                  <span>Konsultasi tersedia setiap hari</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <MessageCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary-600 dark:text-primary-400" />
                  <span>Dukungan via WhatsApp</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Eye className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary-600 dark:text-primary-400" />
                  <span>Monitoring real-time</span>
                </li>
              </ul>
              <WhatsAppButton size="sm" variant="secondary" />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--border)] bg-[var(--surface)]">
        <div className="container-page py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-[var(--muted)] sm:flex-row">
            <p>&copy; {year} {siteConfig.brand}. Semua hak dilindungi.</p>
            <p className="flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5" />
              <span>[EMAIL KONTAK]</span>
            </p>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-[var(--muted)] max-w-3xl">
            Ponsel Pintar adalah aplikasi parental control untuk membantu orang tua memantau
            aktivitas perangkat anak. Layanan ini juga dapat digunakan sebagai penyadap HP iPhone
            jarak jauh dengan izin yang sah. Ketersediaan fitur dapat berbeda berdasarkan perangkat,
            sistem operasi, versi aplikasi, paket, dan ketentuan layanan.
          </p>
        </div>
      </div>
    </footer>
  );
}
