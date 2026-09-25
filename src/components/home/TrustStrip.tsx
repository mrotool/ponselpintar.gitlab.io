import { trustPoints } from "@/config/site";
import { getIcon } from "@/components/Icon";

export function TrustStrip() {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--surface)]">
      <div className="container-page py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => {
            const Icon = getIcon(point.icon);
            return (
              <div key={point.title} className="flex items-start gap-3">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-950 dark:text-primary-400">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--fg)]">{point.title}</p>
                  <p className="mt-1 text-xs text-[var(--muted)] leading-relaxed">{point.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
