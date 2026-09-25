import { useEffect, useState } from "react";
import { X, MessageCircle } from "lucide-react";
import { socialProofData } from "@/config/site";
import { maskName, maskPhone } from "@/lib/whatsapp";

const DISMISS_KEY = "pp-socialproof-dismissed";
const SHOW_DELAY = 8000;
const INTERVAL = 30000;

export function SocialProofPopup() {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem(DISMISS_KEY);
    if (stored) {
      setDismissed(true);
      return;
    }

    const showTimer = setTimeout(() => setVisible(true), SHOW_DELAY);
    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!visible || dismissed) return;
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % socialProofData.length);
    }, INTERVAL);
    return () => clearInterval(interval);
  }, [visible, dismissed]);

  const dismiss = () => {
    setVisible(false);
    setDismissed(true);
    sessionStorage.setItem(DISMISS_KEY, "1");
  };

  if (!visible || dismissed) return null;

  const item = socialProofData[index];

  return (
    <div
      className="fixed bottom-4 left-4 z-40 max-w-xs animate-slide-in-left"
      role="status"
      aria-live="polite"
    >
      <div className="relative rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-lg">
        <button
          onClick={dismiss}
          className="absolute right-2 top-2 inline-flex h-7 w-7 items-center justify-center rounded-lg text-[var(--muted)] hover:bg-[var(--border)] hover:text-[var(--fg)]"
          aria-label="Tutup notifikasi"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="flex items-start gap-3 pr-6">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-950 dark:text-primary-400">
            <MessageCircle className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-[var(--fg)]">
              {maskName(item.name)}
            </p>
            <p className="text-xs text-[var(--muted)]">{maskPhone(item.phone)}</p>
            <p className="mt-1 text-xs text-[var(--muted)]">
              {item.action}
            </p>
            <p className="mt-1 text-[10px] text-[var(--muted)] opacity-70">
              {item.time} &middot; data simulasi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
