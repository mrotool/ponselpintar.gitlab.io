interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export function SectionHeading({ label, title, description, center }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${center ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}`}>
      {label && <span className="section-label mb-4">{label}</span>}
      <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[var(--fg)]">{title}</h2>
      {description && (
        <p className="mt-4 text-lg text-[var(--muted)] leading-relaxed">{description}</p>
      )}
    </div>
  );
}
