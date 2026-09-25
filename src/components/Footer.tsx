import { Link } from "react-router-dom";
import { MessageCircle, Shield, Clock, Mail } from "lucide-react";
import { siteConfig, legalLinks } from "@/config/site";
import { Logo } from "@/components/Logo";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="container-page py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm leading-relaxed text-[var(--muted)] max-w-xs">
              {siteConfig.description}
            </p>
            <WhatsAppButton size="sm" variant="secondary" />
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-[var(--fg)]">Navigasi</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-[var(--muted)] hover:text-primary-600 dark:hover:text-primary-400">Beranda</Link></li>
              <li><Link to="/blog" className="text-[var(--muted)] hover:text-primary-600 dark:hover:text-primary-400">Blog</Link></li>
              <li><Link to="/#fitur" className="text-[var(--muted)] hover:text-primary-600 dark:hover:text-primary-400">Fitur</Link></li>
              <li><Link to="/#paket" className="text-[var(--muted)] hover:text-primary-600 dark:hover:text-primary-400">Paket</Link></li>
              <li><Link to="/#faq" className="text-[var(--muted)] hover:text-primary-600 dark:hover:text-primary-400">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-[var(--fg)]">Informasi</h3>
            <ul className="space-y-2 text-sm">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-[var(--muted)] hover:text-primary-600 dark:hover:text-primary-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-[var(--fg)]">Catatan</h3>
            <ul className="space-y-3 text-sm text-[var(--muted)]">
              <li className="flex items-start gap-2">
                <Shield className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary-600 dark:text-primary-400" />
                <span>Penggunaan dengan izin yang sah</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary-600 dark:text-primary-400" />
                <span>Konsultasi tersedia setiap hari</span>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary-600 dark:text-primary-400" />
                <span>Dukungan via WhatsApp</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--border)] pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-[var(--muted)] sm:flex-row">
            <p>&copy; {year} {siteConfig.brand}. Semua hak dilindungi.</p>
            <p className="flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5" />
              <span>[EMAIL KONTAK]</span>
            </p>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-[var(--muted)] max-w-3xl">
            Ponsel Pintar menyediakan informasi dan konsultasi seputar layanan monitoring perangkat berbasis aplikasi mSpy.
            Kami bukan pemilik, pengembang, atau distributor resmi mSpy. Ketersediaan fitur dapat berbeda berdasarkan
            perangkat, sistem operasi, versi aplikasi, paket, dan ketentuan layanan.
          </p>
        </div>
      </div>
    </footer>
  );
}
