# LINKS

A configuration-driven personal links page built with Next.js App Router, React, TypeScript, and Tailwind-compatible CSS tokens.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Run `npm run typecheck`, `npm run lint`, and `npm run build` to validate the project.

## Customize

Edit [`src/config/profile.ts`](./src/config/profile.ts) to change profile details, appearance, actions, contact fields, and social links. Social links are ordered by their `order` value and omitted when `enabled` is false.

Add the profile image under `public/images/` and set `identity.avatar` to its public path. The image is contained without cropping inside a reserved frame; until an image is configured, the page shows a neutral icon fallback. For an HTTPS remote image, set `PROFILE_IMAGE_HOST` to its exact hostname so Next.js can optimize that allowed source. Set `contact.primaryContactUrl` (or a real email address) to enable Get in Touch; the action stays hidden until a usable destination exists. Email and phone are intentionally unset so the vCard does not invent personal data.

## Notes

The design follows the written visual brief. The Stitch screenshot mentioned in the original request was not present in the accessible attachment, so exact screenshot matching could not be performed.
