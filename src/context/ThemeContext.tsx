import React, { createContext, useState, ReactNode, useCallback } from "react";

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

/**
 * ThemeContext provides the current theme and a function to toggle the theme.
 *
 * @type {React.Context<ThemeContextProps>}
 */
export const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  toggleTheme: () => {},
});

/**
 * ThemeProvider component that wraps its children with ThemeContext.Provider.
 * It manages the theme state and provides a function to toggle the theme.
 *
 * @param {ReactNode} children - The child components that will have access to the theme context.
 * @returns {JSX.Element} The provider component that supplies the theme context to its children.
 */
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      return newTheme;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
