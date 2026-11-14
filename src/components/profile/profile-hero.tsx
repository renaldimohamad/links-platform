import { Globe2 } from "lucide-react";
import type { ProfileConfig } from "@/types/profile";
import { ProfileAvatar } from "@/components/profile/profile-avatar";

export function ProfileHero({ config }: { config: ProfileConfig }) {
  const { identity } = config;
  return (
    <section className="hero" id="home" aria-labelledby="profile-name">
      <div className="portrait-wrap">
        <ProfileAvatar src={identity.avatar} name={identity.name} />
      </div>
      <p className="eyebrow">A LITTLE INTRODUCTION</p>
      <h1 id="profile-name">{identity.name}</h1>
      <p className="role">{identity.role}</p>
      <div className="identity-meta">
        {identity.username && <span>{identity.username}</span>}
        {identity.username && (
          <span className="meta-divider" aria-hidden="true">
            ·
          </span>
        )}
        <span>
          <Globe2 size={13} />
          {identity.domain}
        </span>
      </div>
      <p className="bio">{identity.bio}</p>
    </section>
  );
}
