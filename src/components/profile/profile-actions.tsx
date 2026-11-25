"use client";

import { useState } from "react";
import { ArrowUpRight, Check, ContactRound, Send } from "lucide-react";
import { createVCard } from "@/lib/vcard";
import type { ProfileConfig } from "@/types/profile";
import { getActionAppearanceStyle } from "@/lib/appearance";

export function ProfileActions({ config }: { config: ProfileConfig }) {
  const [saved, setSaved] = useState(false);
  const primary = config.actions.primary;
  const contactHref =
    primary?.href ||
    config.contact.primaryContactUrl ||
    (config.contact.email ? `mailto:${config.contact.email}` : undefined);

  function saveContact() {
    const blob = new Blob([createVCard(config)], { type: "text/vcard;charset=utf-8" });
    const objectUrl = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = objectUrl;
    const filename =
      config.identity.name
        .normalize("NFKD")
        .replace(/[^a-zA-Z0-9]+/g, "-")
        .replace(/^-|-$/g, "")
        .toLowerCase() || "contact";
    anchor.download = `${filename}.vcf`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2400);
  }

  return (
    <div className="actions">
      {primary?.enabled && contactHref && (
        <a
          className="button button-primary"
          style={getActionAppearanceStyle(config, "primaryButton", primary.appearance)}
          href={contactHref}
          target={contactHref.startsWith("http") ? "_blank" : undefined}
          rel={contactHref.startsWith("http") ? "noopener noreferrer" : undefined}>
          <Send size={16} />
          {primary.label}
          <ArrowUpRight size={15} />
        </a>
      )}
      {config.actions.saveContact?.enabled && (
        <button
          className="button button-secondary"
          type="button"
          onClick={saveContact}
          style={getActionAppearanceStyle(config, "saveContactButton", config.actions.saveContact.appearance)}>
          {saved ? <Check size={16} /> : <ContactRound size={16} />}
          {saved ? "Contact saved" : config.actions.saveContact.label}
        </button>
      )}
    </div>
  );
}
