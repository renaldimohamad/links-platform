import type { ProfileConfig } from "@/types/profile";

function escapeVCard(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\r?\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

export function createVCard(config: ProfileConfig): string {
  const { identity, contact } = config;
  const lines = ["BEGIN:VCARD", "VERSION:3.0", `FN:${escapeVCard(identity.name)}`];
  const [givenName, ...familyParts] = identity.name.trim().split(/\s+/);
  const familyName = familyParts.join(" ");
  if (givenName || familyName) lines.push(`N:${escapeVCard(familyName)};${escapeVCard(givenName ?? "")};;;`);
  if (identity.role) lines.push(`TITLE:${escapeVCard(identity.role)}`);
  if (contact.organization) lines.push(`ORG:${escapeVCard(contact.organization)}`);
  if (contact.phone) lines.push(`TEL;TYPE=CELL:${escapeVCard(contact.phone)}`);
  if (contact.email) lines.push(`EMAIL;TYPE=INTERNET:${escapeVCard(contact.email)}`);
  const website = contact.website || identity.canonicalUrl;
  if (website) lines.push(`URL:${escapeVCard(website)}`);
  lines.push("END:VCARD");
  return `${lines.join("\r\n")}\r\n`;
}
