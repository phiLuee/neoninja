import React, {
  useState,
  useCallback,
  createContext,
  useEffect,
  useMemo,
} from "react";
import { ThemeContextProps, ThemeProviderProps } from "./ThemeContext.d";

const defaultThemeContext: ThemeContextProps = {
  theme: "light",
  toggleTheme: () => {},
};

export const ThemeContext =
  createContext<ThemeContextProps>(defaultThemeContext);

/**
 * ThemeProvider component that wraps its children with ThemeContext.Provider.
 * It manages the theme state and provides a function to toggle the theme.
 * @param {ThemeProviderProps} props - The props for the ThemeProvider component.
 * @param {ReactNode} props.children - The child components that will have access to the theme context.
 * @returns {JSX.Element} The provider component that supplies the theme context to its children.
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
}: ThemeProviderProps): JSX.Element => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    try {
      const savedTheme = localStorage.getItem("theme");
      return savedTheme ? JSON.parse(savedTheme) : "light";
    } catch (error) {
      console.error("Failed to parse theme from localStorage", error);
      return "light";
    }
  });

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const contextValue = useMemo(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
