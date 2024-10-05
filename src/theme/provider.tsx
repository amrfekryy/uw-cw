import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import React, { createContext, useContext, useState } from "react";
import { darkTheme, lightTheme } from ".";
import { ITheme } from "./emotion";

interface ThemeContextProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
  themeObject: ITheme;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const themeObject = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeObject }}>
      <EmotionThemeProvider theme={themeObject}>
        {children}
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};
