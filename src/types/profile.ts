export type SocialPlatform =
  | "instagram"
  | "tiktok"
  | "threads"
  | "github"
  | "linkedin"
  | "whatsapp"
  | "email"
  | "website"
  | "telegram"
  | "youtube"
  | "facebook"
  | "portfolio"
  | "blog"
  | "x";

export interface ProfileConfig {
  seo: {
    title: string;
    description: string;
    ogImage: string;
  };
  identity: {
    name: string;
    username: string;
    domain: string;
    canonicalUrl: string;
    role: string;
    bio: string;
    avatar?: string;
    availability?: { enabled: boolean; label: string };
  };
  appearance: {
    theme: "default";
    mode: "light";
    colors: {
      background: string;
      surface: string;
      foreground: string;
      secondaryText: string;
      tertiaryText: string;
      border: string;
      accent: string;
      accentHover: string;
      iconSurface: string;
      focus: string;
    };
  };
  actions: {
    primary?: { label: string; href?: string; enabled: boolean };
    shareProfile?: { enabled: boolean };
    saveContact?: { label: string; enabled: boolean };
  };
  contact: {
    email?: string;
    phone?: string;
    organization?: string;
    website?: string;
    primaryContactUrl?: string;
  };
  footer: { copyrightName: string; copyrightYear: number };
  links: Array<{
    id: string;
    platform: SocialPlatform;
    label: string;
    description?: string;
    username?: string;
    url: string;
    enabled: boolean;
    order: number;
  }>;
}
