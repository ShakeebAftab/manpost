import { createTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { createContext, Dispatch, ReactNode, useState } from "react";

type ThemeState = {
  isDark: boolean;
  setIsDark: Dispatch<boolean>;
};

export const ThemeContext = createContext<ThemeState | any>([]);

interface Props {
  children: ReactNode;
}

export const ThemeContextProvider = ({ children }: Props) => {
  const [isDark, setIsDark] = useState(false);

  const lightTheme = createTheme({});

  const darkTheme = createTheme({
    palette: {
      background: {
        default: "#000",
      },
    },
  });

  return (
    <ThemeContext.Provider value={[isDark, setIsDark]}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
