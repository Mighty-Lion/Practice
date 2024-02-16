import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

interface IThemeContextProps {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

export const themes = {
    dark: 'dark',
    light: 'light',
};

export const ThemeContext = createContext<IThemeContextProps>(null!);



function getTheme() {
  const theme = `${window?.localStorage?.getItem('theme')}`;

  if (Object.values(themes).includes(theme)) {
    return theme;
  }

  const userMedia = window.matchMedia('(prefers-color-scheme: light)');
  if (userMedia.matches) {
    return themes.light;
  }

  return themes.dark;
}

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<string>(getTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  console.log(document.documentElement.dataset.theme)

  console.log('theme', theme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
