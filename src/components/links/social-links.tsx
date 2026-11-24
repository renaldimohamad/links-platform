import { ArrowUpRight, platformIcons } from "@/lib/icons";
import type { ProfileConfig } from "@/types/profile";

export function SocialLinks({ config }: { config: ProfileConfig }) {
  const links = config.links.filter((link) => link.enabled).sort((a, b) => a.order - b.order);
  return (
    <section className="links-section" id="connect" aria-labelledby="connect-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">FIND ME AROUND THE WEB</p>
          <h2 id="connect-title">
            Let&apos;s connect<span>.</span>
          </h2>
        </div>
      </div>
      <div className="link-list">
        {links.map((link) => {
          const Icon = platformIcons[link.platform];
          const supportingText = link.username || link.description;
          return (
            <a
              className="social-link"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              key={link.id}>
              <span className={`social-icon icon-${link.platform}`}>
                <Icon size={19} strokeWidth={1.8} />
              </span>
              <span className="social-copy">
                <span className="social-label">{link.label}</span>
                {supportingText && <span className="social-description">{supportingText}</span>}
              </span>
              <ArrowUpRight className="link-arrow" size={17} strokeWidth={1.7} />
            </a>
          );
        })}
      </div>
    </section>
  );
}
