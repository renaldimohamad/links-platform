import { ProfileActions } from "@/components/profile/profile-actions";
import { ProfileHeader } from "@/components/profile/profile-header";
import { ProfileHero } from "@/components/profile/profile-hero";
import { SocialLinks } from "@/components/links/social-links";
import { profile } from "@/config/profile";
import { getGlobalAppearanceStyle } from "@/lib/appearance";

export default function HomePage() {
  return (
    <main className="page-shell" style={getGlobalAppearanceStyle(profile)}>
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
