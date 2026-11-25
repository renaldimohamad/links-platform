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

export interface ElementAppearance {
  background?: string;
  backgroundHover?: string;
  backgroundActive?: string;
  backgroundDisabled?: string;
  text?: string;
  textHover?: string;
  textActive?: string;
  textDisabled?: string;
  border?: string;
  borderHover?: string;
  borderActive?: string;
  borderDisabled?: string;
  iconBackground?: string;
  iconBackgroundHover?: string;
  iconColor?: string;
  iconColorHover?: string;
  iconColorDisabled?: string;
  focus?: string;
  borderRadius?: string;
  shadow?: string;
  shadowHover?: string;
  padding?: string;
}

export interface ProfileConfig {
  seo: { title: string; description: string; ogImage: string };
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
    theme?: string;
    mode?: "light" | "dark";
    colors: {
      background: string;
      surface: string;
      foreground: string;
      secondaryText: string;
      tertiaryText: string;
      border: string;
      accent: string;
      accentHover?: string;
      iconSurface: string;
      focus: string;
      primaryButtonText?: string;
    };
    typography?: { family?: string; headingFamily?: string };
    layout?: { maxWidth?: string; contentWidth?: string; spacingUnit?: string };
    background?: { image?: string; gradient?: string; position?: string; size?: string; repeat?: string };
    radius?: { global?: string; card?: string; button?: string; icon?: string };
    shadows?: { card?: string; button?: string; buttonHover?: string };
    elements?: {
      primaryButton?: ElementAppearance;
      shareButton?: ElementAppearance;
      saveContactButton?: ElementAppearance;
      socialLink?: ElementAppearance;
      availability?: ElementAppearance;
    };
  };
  actions: {
    primary?: { label: string; href?: string; enabled: boolean; appearance?: ElementAppearance };
    shareProfile?: { enabled: boolean; appearance?: ElementAppearance };
    saveContact?: { label: string; enabled: boolean; appearance?: ElementAppearance };
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
    appearance?: ElementAppearance;
  }>;
}
