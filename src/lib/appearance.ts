import type { CSSProperties } from "react";
import { defaultAppearance } from "@/config/appearance";
import type { ElementAppearance, ProfileConfig } from "@/types/profile";

type TokenStyle = CSSProperties & Record<`--${string}`, string | undefined>;

function appearanceDefaults(config: ProfileConfig) {
  return {
    ...defaultAppearance,
    ...config.appearance,
    colors: { ...defaultAppearance.colors, ...config.appearance.colors },
    typography: { ...defaultAppearance.typography, ...config.appearance.typography },
    layout: { ...defaultAppearance.layout, ...config.appearance.layout },
    background: { ...defaultAppearance.background, ...config.appearance.background },
    radius: { ...defaultAppearance.radius, ...config.appearance.radius },
    shadows: { ...defaultAppearance.shadows, ...config.appearance.shadows },
    elements: {
      ...defaultAppearance.elements,
      ...config.appearance.elements,
      primaryButton: { ...defaultAppearance.elements.primaryButton, ...config.appearance.elements?.primaryButton },
      shareButton: { ...defaultAppearance.elements.shareButton, ...config.appearance.elements?.shareButton },
      saveContactButton: { ...defaultAppearance.elements.saveContactButton, ...config.appearance.elements?.saveContactButton },
      socialLink: { ...defaultAppearance.elements.socialLink, ...config.appearance.elements?.socialLink },
      availability: { ...defaultAppearance.elements.availability, ...config.appearance.elements?.availability },
    },
  };
}

function toElementTokens(appearance: ElementAppearance): TokenStyle {
  return {
    "--element-bg": appearance.background,
    "--element-bg-hover": appearance.backgroundHover,
    "--element-bg-active": appearance.backgroundActive,
    "--element-bg-disabled": appearance.backgroundDisabled,
    "--element-text": appearance.text,
    "--element-text-hover": appearance.textHover,
    "--element-text-active": appearance.textActive,
    "--element-text-disabled": appearance.textDisabled,
    "--element-border": appearance.border,
    "--element-border-hover": appearance.borderHover,
    "--element-border-active": appearance.borderActive,
    "--element-border-disabled": appearance.borderDisabled,
    "--element-icon-bg": appearance.iconBackground,
    "--element-icon-bg-hover": appearance.iconBackgroundHover,
    "--element-icon-color": appearance.iconColor,
    "--element-icon-color-hover": appearance.iconColorHover,
    "--element-icon-color-disabled": appearance.iconColorDisabled,
    "--element-focus": appearance.focus,
    "--element-radius": appearance.borderRadius,
    "--element-shadow": appearance.shadow,
    "--element-shadow-hover": appearance.shadowHover,
    "--element-padding": appearance.padding,
  };
}

export function getGlobalAppearanceStyle(config: ProfileConfig): TokenStyle {
  const appearance = appearanceDefaults(config);
  const { colors, typography, layout, background, radius, shadows, elements } = appearance;
  return {
    "--background": colors.background,
    "--surface": colors.surface,
    "--foreground": colors.foreground,
    "--secondary-text": colors.secondaryText,
    "--tertiary-text": colors.tertiaryText,
    "--border": colors.border,
    "--accent": colors.accent,
    "--accent-hover": colors.accentHover,
    "--icon-surface": colors.iconSurface,
    "--focus": colors.focus,
    "--primary-button-text": colors.primaryButtonText,
    "--font-family": typography.family,
    "--heading-font-family": typography.headingFamily ?? typography.family,
    "--layout-width": layout.maxWidth,
    "--content-width": layout.contentWidth,
    "--spacing-unit": layout.spacingUnit,
    "--background-image": background.gradient ?? (background.image ? `url("${background.image}")` : "none"),
    "--background-position": background.position,
    "--background-size": background.size,
    "--background-repeat": background.repeat,
    "--radius": radius.global,
    "--card-radius": radius.card,
    "--button-radius": radius.button,
    "--icon-radius": radius.icon,
    "--shadow-card": shadows.card,
    "--shadow-button": shadows.button,
    "--shadow-button-hover": shadows.buttonHover,
    "--availability-text": elements.availability?.text,
    "--availability-dot": elements.availability?.iconColor,
    "--availability-dot-glow": elements.availability?.iconBackground,
  };
}

export function getActionAppearanceStyle(
  config: ProfileConfig,
  kind: "primaryButton" | "shareButton" | "saveContactButton",
  override?: ElementAppearance,
): TokenStyle {
  const appearance = appearanceDefaults(config);
  return toElementTokens({ ...appearance.elements[kind], ...override });
}

export function getLinkAppearanceStyle(config: ProfileConfig, link: ProfileConfig["links"][number]): TokenStyle {
  const appearance = appearanceDefaults(config);
  const fallback = appearance.elements.socialLink ?? {};
  return toElementTokens({ ...fallback, ...link.appearance });
}
