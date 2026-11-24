import { ProfileActions } from "@/components/profile/profile-actions";
import { ProfileHeader } from "@/components/profile/profile-header";
import { ProfileHero } from "@/components/profile/profile-hero";
import { SocialLinks } from "@/components/links/social-links";
import { profile } from "@/config/profile";

export default function HomePage() {
  return (
    <main
      className="page-shell"
      style={
        {
          "--background": profile.appearance.colors.background,
          "--surface": profile.appearance.colors.surface,
          "--foreground": profile.appearance.colors.foreground,
          "--secondary-text": profile.appearance.colors.secondaryText,
          "--tertiary-text": profile.appearance.colors.tertiaryText,
          "--border": profile.appearance.colors.border,
          "--accent": profile.appearance.colors.accent,
          "--accent-hover": profile.appearance.colors.accentHover,
          "--icon-surface": profile.appearance.colors.iconSurface,
          "--focus": profile.appearance.colors.focus,
        } as React.CSSProperties
      }>
      <div className="page-frame">
        <ProfileHeader config={profile} />
        <ProfileHero config={profile} />
        <ProfileActions config={profile} />
        <SocialLinks config={profile} />
        <footer className="footer">
          © {profile.footer.copyrightYear} {profile.footer.copyrightName}
        </footer>
      </div>
    </main>
  );
}
