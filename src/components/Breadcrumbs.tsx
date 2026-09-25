import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[var(--muted)]">
        <li>
          <Link to="/" className="inline-flex items-center gap-1 hover:text-primary-600 dark:hover:text-primary-400">
            <Home className="h-3.5 w-3.5" />
            <span className="sr-only">Beranda</span>
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5 text-[var(--muted)] opacity-50" />
            {item.href ? (
              <Link to={item.href} className="hover:text-primary-600 dark:hover:text-primary-400">
                {item.label}
              </Link>
            ) : (
              <span className="text-[var(--fg)] font-medium" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
