import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { navLinks, legalLinks } from "@/config/site";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useScrollPosition } from "@/lib/useScrollPosition";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrollPosition(10);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/#")) {
      const target = href.slice(2);
      if (location.pathname === "/") {
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = `/#${target}`;
      }
    }
  };

  return (
    <>
      <div className="h-1 w-full bg-gradient-to-r from-primary-800 via-primary-500 to-accent-400" />

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-[var(--border)] bg-[var(--bg)]/90 backdrop-blur-lg shadow-sm shadow-primary-900/5"
            : "border-b border-transparent bg-[var(--bg)]"
        }`}
      >
        <div className="container-page">
          <div className="flex h-16 items-center justify-between gap-4">
            <Link to="/" aria-label="Beranda Ponsel Pintar" className="flex-shrink-0">
              <Logo />
            </Link>

            <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Navigasi utama">
              {navLinks.map((link) =>
                link.href.startsWith("/#") ? (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="relative rounded-lg px-3.5 py-2 text-sm font-medium text-[var(--muted)] transition-colors hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="relative rounded-lg px-3.5 py-2 text-sm font-medium text-[var(--muted)] transition-colors hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="mx-1 h-5 w-px bg-[var(--border)]" />
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="rounded-lg px-3.5 py-2 text-sm font-medium text-[var(--muted)] transition-colors hover:text-primary-600 dark:hover:text-primary-400"
                >
                  {link.label === "Ketentuan Penggunaan" ? "Ketentuan" : "Privasi"}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle className="hidden sm:inline-flex" />
              <WhatsAppButton size="sm" className="hidden sm:inline-flex" />
              <button
                onClick={() => setMobileOpen(true)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--fg)] lg:hidden"
                aria-label="Buka menu"
                aria-expanded={mobileOpen}
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-primary-950/40 backdrop-blur-sm animate-fade-in"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85%] bg-[var(--bg)] border-l border-[var(--border)] shadow-2xl animate-slide-in-right flex flex-col">
            <div className="flex h-16 items-center justify-between border-b border-[var(--border)] px-4">
              <Logo />
              <button
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] text-[var(--fg)]"
                aria-label="Tutup menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav
              className="flex flex-col gap-0.5 p-4 overflow-y-auto flex-1"
              aria-label="Navigasi mobile"
            >
              {navLinks.map((link) =>
                link.href.startsWith("/#") ? (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium text-[var(--fg)] hover:bg-primary-50 dark:hover:bg-primary-950/30 transition-colors"
                  >
                    {link.label}
                    <ArrowRight className="h-4 w-4 text-[var(--muted)]" />
                  </button>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-[var(--fg)] hover:bg-primary-50 dark:hover:bg-primary-950/30 transition-colors"
                  >
                    {link.label}
                    <ArrowRight className="h-4 w-4 text-[var(--muted)]" />
                  </Link>
                )
              )}
              <div className="my-2 border-t border-[var(--border)]" />
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-[var(--fg)] hover:bg-primary-50 dark:hover:bg-primary-950/30 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="border-t border-[var(--border)] p-4 flex flex-col gap-3">
              <ThemeToggle className="w-full justify-center" />
              <WhatsAppButton size="md" className="w-full" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
