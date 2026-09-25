import { siteConfig } from "@/config/site";

export function getWhatsAppLink(message?: string): string {
  const number = siteConfig.whatsapp.number.replace(/\D/g, "");
  const defaultMsg =
    "Halo Ponsel Pintar, saya ingin berkonsultasi mengenai layanan monitoring perangkat dan kompatilitasnya.";
  const text = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${number}?text=${text}`;
}

export function maskName(name: string): string {
  if (name.length <= 3) return name[0] + "***";
  return name.slice(0, 3) + "***";
}

export function maskPhone(phone: string): string {
  // Keep prefix and last 2 digits
  const parts = phone.split("-");
  if (parts.length < 3) return phone;
  const last = parts[parts.length - 1];
  return (
    parts.slice(0, -1).join("-") +
    "-***-**" +
    last.slice(-2)
  );
}
