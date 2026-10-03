// Design tokens for the Lingua design system.
// Keep these values in sync with the `@theme` block in `src/global.css` —
// NativeWind utility classes read from global.css, while these JS values
// are for the places NativeWind can't reach (StyleSheet exceptions like
// SafeAreaView, Modal, shadows, and dynamic style objects).

export const colors = {
  // Brand / primary palette
  purple: "#6C4EF5",
  deepPurple: "#5B3BF6",
  blue: "#4D8BFF",
  green: "#21C16B",

  // Semantic
  success: "#21C16B",
  warning: "#FFC800",
  streak: "#FF8A00",
  error: "#FF4D4F",
  info: "#4D8BFF",

  // Neutrals
  textPrimary: "#0D132B",
  textSecondary: "#6B7280",
  border: "#E5E7EB",
  surface: "#F6F7FB",
  background: "#FFFFFF",
} as const;

export const fonts = {
  regular: "Poppins-Regular",
  medium: "Poppins-Medium",
  semiBold: "Poppins-SemiBold",
  bold: "Poppins-Bold",
} as const;

export const fontAssets = {
  "Poppins-Regular": require("@/assets/fonts/Poppins-Regular.ttf"),
  "Poppins-Medium": require("@/assets/fonts/Poppins-Medium.ttf"),
  "Poppins-SemiBold": require("@/assets/fonts/Poppins-SemiBold.ttf"),
  "Poppins-Bold": require("@/assets/fonts/Poppins-Bold.ttf"),
};

type TextStyleToken = {
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
};

// Mirrors the H1-H4 / Body / Caption scale from the design system.
export const typography: Record<string, TextStyleToken> = {
  h1: { fontFamily: fonts.bold, fontSize: 32, lineHeight: 32 * 1.2 },
  h2: { fontFamily: fonts.semiBold, fontSize: 24, lineHeight: 24 * 1.3 },
  h3: { fontFamily: fonts.semiBold, fontSize: 20, lineHeight: 20 * 1.3 },
  h4: { fontFamily: fonts.medium, fontSize: 16, lineHeight: 16 * 1.4 },
  bodyLarge: { fontFamily: fonts.regular, fontSize: 16, lineHeight: 16 * 1.6 },
  bodyMedium: { fontFamily: fonts.regular, fontSize: 14, lineHeight: 14 * 1.6 },
  bodySmall: { fontFamily: fonts.regular, fontSize: 13, lineHeight: 13 * 1.6 },
  caption: { fontFamily: fonts.regular, fontSize: 11, lineHeight: 11 * 1.4 },
  btnLabel: { fontFamily: fonts.semiBold, fontSize: 16, lineHeight: 16 * 1.5 },
};
