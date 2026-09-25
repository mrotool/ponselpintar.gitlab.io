import {
  Activity, Settings, FileText, Smartphone, UserCog,
  ShieldCheck, Eye, Headset, Users, Building, BookOpen,
  MessageCircle, Facebook, Phone, Mail, MapPin,
  Video, Globe, Image, Wifi, Bell, KeyRound,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  activity: Activity,
  settings: Settings,
  "file-text": FileText,
  smartphone: Smartphone,
  "user-cog": UserCog,
  "shield-check": ShieldCheck,
  eye: Eye,
  headset: Headset,
  users: Users,
  building: Building,
  "book-open": BookOpen,
  whatsapp: MessageCircle,
  facebook: Facebook,
  phone: Phone,
  mail: Mail,
  "map-pin": MapPin,
  video: Video,
  globe: Globe,
  image: Image,
  wifi: Wifi,
  bell: Bell,
  key: KeyRound,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] || Smartphone;
}
