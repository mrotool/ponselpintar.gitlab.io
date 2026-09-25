import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";

interface WhatsAppButtonProps {
  message?: string;
  variant?: "primary" | "accent" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
}

export function WhatsAppButton({
  message,
  variant = "primary",
  size = "md",
  className = "",
  label = "Konsultasi via WhatsApp",
}: WhatsAppButtonProps) {
  if (!siteConfig.whatsapp.enabled) return null;

  const href = getWhatsAppLink(message);
  const sizeClass = {
    sm: "px-4 py-2 text-xs",
    md: "px-5 py-3 text-sm",
    lg: "px-6 py-3.5 text-base",
  }[size];

  const variantClass = {
    primary: "btn-primary",
    accent: "btn-accent",
    secondary: "btn-secondary",
    ghost: "btn-ghost",
  }[variant];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${variantClass} ${sizeClass} ${className}`}
      aria-label={label}
    >
      <MessageCircle className={size === "lg" ? "h-5 w-5" : "h-4 w-4"} />
      {label}
    </a>
  );
}
