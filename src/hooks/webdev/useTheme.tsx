import { useTheme as useNextTheme } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export const useTheme = () => {
  const { theme, setTheme } = useNextTheme();
  return {
    isDark: theme === "dark",
    toggle: () => setTheme(theme === "dark" ? "light" : "dark"),
  };
};
