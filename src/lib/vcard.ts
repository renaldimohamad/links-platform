import type { ProfileConfig } from "@/types/profile";

function escapeVCard(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\r\n|\r|\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

export function createVCard(config: ProfileConfig): string {
  const { identity, contact } = config;
  const lines = ["BEGIN:VCARD", "VERSION:3.0", `FN:${escapeVCard(identity.name)}`];
  const [givenName, ...familyParts] = identity.name.trim().split(/\s+/);
  const familyName = familyParts.join(" ");
  if (identity.name.trim()) {
    lines.push(`N:${escapeVCard(familyName)};${escapeVCard(givenName ?? "")};;;`);
  }
  if (contact.organization?.trim()) lines.push(`ORG:${escapeVCard(contact.organization.trim())}`);
  if (identity.role.trim()) lines.push(`TITLE:${escapeVCard(identity.role.trim())}`);
  if (contact.phone?.trim()) lines.push(`TEL;TYPE=CELL:${escapeVCard(contact.phone.trim())}`);
  if (contact.email?.trim()) lines.push(`EMAIL;TYPE=INTERNET:${escapeVCard(contact.email.trim())}`);

  const urls = [contact.website, identity.canonicalUrl, ...config.links
    .filter((link) => link.enabled)
    .map((link) => link.url)]
    .filter((url): url is string => Boolean(url?.trim()))
    .map((url) => url.trim());
  for (const url of [...new Set(urls)]) {
    lines.push(`URL:${escapeVCard(url)}`);
  }

  lines.push("END:VCARD");
  return `${lines.join("\r\n")}\r\n`;
}
