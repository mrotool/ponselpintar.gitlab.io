import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { getIcon } from "@/components/Icon";

interface Slide {
  title: string;
  description: string;
  icon: string;
  accent: string;
  items: { label: string; value: string }[];
}

const slides: Slide[] = [
  {
    title: "Pemantauan WhatsApp",
    description: "Lihat riwayat pesan, kontak, dan aktivitas WhatsApp pada perangkat yang terpantau.",
    icon: "whatsapp",
    accent: "primary",
    items: [
      { label: "Pesan teks masuk", value: "12:04" },
      { label: "Kontak baru ditambahkan", value: "11:30" },
      { label: "Pesan keluar", value: "10:15" },
    ],
  },
  {
    title: "Media Sosial & Facebook",
    description: "Pantau aktivitas Facebook Messenger, Instagram, dan platform media sosial lainnya.",
    icon: "facebook",
    accent: "secondary",
    items: [
      { label: "Facebook Messenger", value: "13:22" },
      { label: "Instagram DM", value: "12:48" },
      { label: "Snapchat aktivitas", value: "09:50" },
    ],
  },
  {
    title: "Informasi Panggilan Telepon",
    description: "Riwayat panggilan masuk, keluar, dan tidak terjawab dengan durasi lengkap.",
    icon: "phone",
    accent: "primary",
    items: [
      { label: "Panggilan keluar — 08:32", value: "5 mnt" },
      { label: "Panggilan masuk — 08:15", value: "12 mnt" },
      { label: "Tidak terjawab — 08:01", value: "—" },
    ],
  },
  {
    title: "Lokasi & Geolocation",
    description: "Pelacakan lokasi real-time dan riwayat tempat yang dikunjungi melalui peta interaktif.",
    icon: "map-pin",
    accent: "accent",
    items: [
      { label: "Lokasi saat ini", value: "Aktif" },
      { label: "Zona geofencing", value: "2 zona" },
      { label: "Riwayat lokasi", value: "5 titik" },
    ],
  },
  {
    title: "Rekam Layar & Tangkapan",
    description: "Rekam aktivitas layar perangkat dan ambil tangkapan secara berkala untuk konteks visual.",
    icon: "video",
    accent: "secondary",
    items: [
      { label: "Tangkapan layar terakhir", value: "14:02" },
      { label: "Video rekaman layar", value: "3 klip" },
      { label: "Frekuensi tangkapan", value: "5 menit" },
    ],
  },
  {
    title: "Riwayat Browser & Web",
    description: "Pantau situs web yang dikunjungi, bookmark, dan frekuensi kunjungan pada perangkat.",
    icon: "globe",
    accent: "primary",
    items: [
      { label: "Situs dikunjungi hari ini", value: "8 situs" },
      { label: "Bookmark tersimpan", value: "12" },
      { label: "Total waktu browsing", value: "2 jam" },
    ],
  },
];

export function Showcase() {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback((index: number) => {
    setCurrent((index + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) prev();
      else next();
    }
    touchStartX.current = null;
  };

  const accentMap: Record<string, string> = {
    primary: "bg-primary-100 text-primary-600 dark:bg-primary-950 dark:text-primary-400",
    secondary: "bg-secondary-100 text-secondary-600 dark:bg-secondary-950 dark:text-secondary-400",
    accent: "bg-accent-100 text-accent-600 dark:bg-accent-900/40 dark:text-accent-400",
  };

  const accentBarMap: Record<string, string> = {
    primary: "bg-primary-500",
    secondary: "bg-secondary-500",
    accent: "bg-accent-500",
  };

  return (
    <section className="py-20 bg-[var(--surface)] border-y border-[var(--border)]">
      <div className="container-page">
        <SectionHeading
          label="Showcase Fitur"
          title="Tampilan Dashboard & Fitur Unggulan"
          description="Pratinjau ilustratif dari tampilan dashboard untuk setiap fitur monitoring perangkat."
          center
        />

        <div
          className="relative mx-auto max-w-3xl"
          role="region"
          aria-roledescription="carousel"
          aria-label="Showcase fitur dashboard"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Slide container */}
          <div
            ref={trackRef}
            className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg)]"
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((slide, i) => {
                const Icon = getIcon(slide.icon);
                return (
                  <div
                    key={i}
                    className="w-full flex-shrink-0"
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${i + 1} dari ${slides.length}: ${slide.title}`}
                  >
                    <div className="aspect-[16/10] sm:aspect-[16/9] p-6 sm:p-10 flex flex-col items-center justify-center">
                      <div className="w-full max-w-md">
                        {/* Icon + title */}
                        <div
                          className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl ${accentMap[slide.accent]} animate-scale-in`}
                        >
                          <Icon className="h-8 w-8" />
                        </div>
                        <h3 className="mt-5 text-center text-xl font-bold text-[var(--fg)]">
                          {slide.title}
                        </h3>
                        <p className="mt-2 text-center text-sm text-[var(--muted)] leading-relaxed">
                          {slide.description}
                        </p>

                        {/* Feature-specific content rows */}
                        <div className="mt-6 space-y-2.5">
                          {slide.items.map((item, j) => (
                            <div
                              key={j}
                              className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3 animate-fade-up"
                              style={{ animationDelay: `${j * 0.1}s` }}
                            >
                              <div className={`h-1.5 w-1.5 flex-shrink-0 rounded-full ${accentBarMap[slide.accent]}`} />
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-[var(--fg)] truncate">
                                  {item.label}
                                </p>
                              </div>
                              <span className="flex-shrink-0 text-xs text-[var(--muted)] font-mono">
                                {item.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={prev}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--fg)] transition-all hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 active:scale-95"
              aria-label="Slide sebelumnya"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Indicators */}
            <div className="flex items-center gap-2" role="tablist" aria-label="Slide indicators">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current
                      ? "w-8 bg-primary-600 dark:bg-primary-400"
                      : "w-2 bg-[var(--border)] hover:bg-[var(--muted)]"
                  }`}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Ke slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--fg)] transition-all hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 active:scale-95"
              aria-label="Slide berikutnya"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <p className="mt-4 text-center text-xs text-[var(--muted)]">
            Gunakan tombol panah, geser pada layar sentuh, atau klik indikator untuk navigasi.
            Ilustrasi ini adalah representasi dashboard dan bukan screenshot transaksi nyata.
          </p>
        </div>
      </div>
    </section>
  );
}
