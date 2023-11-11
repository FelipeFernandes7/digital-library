/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useContext, useState } from "react";

interface ThemeContextType {
  theme: string;
  changeTheme: (theme: string) => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext({} as ThemeContextType);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState("");

  function changeTheme(theme: string) {
    setTheme(theme);
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  return useContext(ThemeContext);
};
