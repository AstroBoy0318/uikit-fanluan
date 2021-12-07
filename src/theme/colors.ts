import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#fb2141",
  primaryBright: "#fb2141",
  primaryDark: "#FFFFFF",
  secondary: "#fb2141",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#061740",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#3360a6",
  input: "#000000",
  tertiary: "#383940",
  text: "#FFFFFF",
  textDisabled: "#BDC2C4",
  textSubtle: "#FFFFFF",
  borderColor: "#E9EAEB",
  card: "#122146",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#ffdd00",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#26262c",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#FFFFFF",
  tertiary: "#353547",
  text: "#FFFFFF",
  textDisabled: "#666171",
  textSubtle: "#d8e3e7",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
