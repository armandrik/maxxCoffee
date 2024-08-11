import { createContext, useContext, useEffect, useState } from "react";

type ThemeProviderProp = {
  children: React.ReactNode;
};

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  changeTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);

export const ThemeProvider = ({ children }: ThemeProviderProp) => {
  const [theme, setTheme] = useState<Theme>("light");

  const changeTheme = () => {
    const root = document.querySelector("#htmlroot")!;
    let audio = new Audio('../audio/switchToLightSound.wav')
    if (theme === "dark") {
      setTheme("light");
      saveToLocalStorage("light");
      root.classList.remove("dark");
      audio.play()
    } else if (theme === "light") {
      setTheme("dark");
      saveToLocalStorage("dark");
      root.classList.add("dark");
      audio.play()
    }
  };

  const saveToLocalStorage = (value: Theme) => {
    localStorage.setItem("theme", value);
  };

  const getLocalStorage = () => {
    const root = document.querySelector("#htmlroot")!;
    if (localStorage.getItem("theme") === "dark") {
      setTheme("dark");
      saveToLocalStorage("dark");
      root.classList.add("dark");
    } else if (localStorage.getItem("theme") === "light") {
      setTheme("light");
      saveToLocalStorage("light");
      root.classList.remove("dark");
    } else {
      saveToLocalStorage(theme);
    }
  };

  useEffect(() => {
    getLocalStorage();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
