import React, {
  useState,
  ReactNode,
  useCallback,
  createContext,
  useEffect,
} from "react";
import { ThemeContextProps } from "./ThemeContext.d";

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

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
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
