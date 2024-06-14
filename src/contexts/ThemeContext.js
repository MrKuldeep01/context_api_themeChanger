import React, { createContext,useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  setThemeMode: () => {},
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvidor = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}