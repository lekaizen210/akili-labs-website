import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export const COLORS = {
  navy: "#1A2B3C",
  orange: "#FF5500",
  blueLight: "#E8F0FE",
  white: "#FFFFFF",
  grayText: "#374151",
  grayBorder: "#D9E2EC",
} as const;
