import Image from "next/image";
import { Globe2, UserRound } from "lucide-react";
import type { ProfileConfig } from "@/types/profile";

export function ProfileHero({ config }: { config: ProfileConfig }) {
  const { identity } = config;
  const avatar = identity.avatar?.trim();
  return (
    <section className="hero" id="home" aria-labelledby="profile-name">
      <div className="portrait-wrap">
        {avatar ? (
          <div className="portrait-image-area">
            <Image
              className="portrait"
              src={avatar}
              alt={`${identity.name} profile portrait`}
              fill
              sizes="(max-width: 600px) 112px, 136px"
              priority
            />
          </div>
        ) : (
          <div
            className="portrait-fallback"
            role="img"
            aria-label={`${identity.name} profile image placeholder`}>
            <UserRound size={38} strokeWidth={1.25} />
          </div>
        )}
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
