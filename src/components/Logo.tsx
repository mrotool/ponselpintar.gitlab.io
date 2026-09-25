export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <img
        src="/logo.png"
        alt="Logo PonselPintar"
        width={96}
        height={96}
        className="h-10 w-10 object-contain"
        decoding="async"
        loading="eager"
      />
    </span>
  );
}
