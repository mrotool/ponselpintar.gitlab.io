import { siteConfig } from "@/config/site";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <img
        src={siteConfig.logo}
        alt="Ponsel Pintar"
        width={200}
        height={56}
        className="h-9 w-auto max-w-[200px] object-contain"
        decoding="async"
        loading="eager"
      />
    </span>
  );
}
