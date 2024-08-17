import React, {
  createContext,
  useState,
  ReactNode,
  useCallback,
  useContext,
  Context,
  FC,
} from "react";

/**
 * ThemeContextProps interface defines the shape of the context value.
 *
 * @property {("light" | "dark")} theme - The current theme, either "light" or "dark".
 * @property {() => void} toggleTheme - Function to toggle between light and dark themes.
 */
export interface ThemeContextProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext: Context<ThemeContextProps | undefined>;
export const ThemeProvider: FC<ThemeProviderProps>;
