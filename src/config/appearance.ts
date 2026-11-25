import type { ProfileConfig } from "@/types/profile";

export const defaultAppearance = {
  theme: "default",
  mode: "light" as const,
  colors: {
    background: "#ffffff",
    surface: "#FFFFFF",
    foreground: "#262722",
    secondaryText: "#62645D",
    tertiaryText: "#777970",
    border: "#E3E2DA",
    accent: "#66745F",
    accentHover: "#56634F",
    iconSurface: "#F0F0EA",
    focus: "#53684D",
    primaryButtonText: "#FFFFFF",
  },
  typography: { family: "var(--font-instrument-sans), sans-serif" },
  layout: { maxWidth: "1000px", contentWidth: "500px", spacingUnit: "8px" },
  background: { position: "center", size: "cover", repeat: "no-repeat" },
  radius: { global: "12px", icon: "10px" },
  shadows: {
    card: "0 1px 4px rgb(38 39 34 / 3%)",
    button: "0 1px 3px rgb(38 39 34 / 5%)",
    buttonHover: "0 3px 9px rgb(38 39 34 / 7%)",
  },
  elements: {
    primaryButton: {
      border: "transparent",
      borderHover: "transparent",
    },
    shareButton: {},
    saveContactButton: {},
    socialLink: {
      background: "#FFFFFF",
      backgroundHover: "#FAFAF8",
      text: "#262722",
      textHover: "#262722",
      border: "#EBEBE7",
      iconBackground: "#F7F7F5",
      iconColor: "#66745F",
    },
    availability: {},
  },
} satisfies Omit<ProfileConfig["appearance"], "colors"> & {
  colors: ProfileConfig["appearance"]["colors"];
};
