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
  | "x";

export interface ProfileConfig {
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
    accentColor: string;
    backgroundColor: string;
    typography: { heading: string; body: string };
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
