// themeUtils.ts
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext"; // Adjust the import path as necessary
import { ThemeContextProps } from "../context/ThemeContext.d"; // Adjust the import path as necessary

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
