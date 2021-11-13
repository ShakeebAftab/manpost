import { createTheme } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { ThemeProvider } from "@material-ui/styles";
import { createContext, Dispatch, ReactNode, useState } from "react";
import { AppContextProvider } from "../context/AppContext";

type ThemeState = {
  isDark: boolean;
  setIsDark: Dispatch<boolean>;
};

export const ThemeContext = createContext<ThemeState | any>([]);

interface Props {
  children: ReactNode;
}

export const ThemeContextProvider = ({ children }: Props) => {
  const [isDark, setIsDark] = useState(true);

  const lightTheme = createTheme({
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "*::-webkit-scrollbar": {
            display: "none",
          },
        },
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: red[600],
      },
      secondary: {
        main: "#fff",
      },
      background: {
        default: "#18191A",
        paper: "#242526",
      },
      text: {
        primary: "#fff",
        secondary: "#808080",
      },
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "*::-webkit-scrollbar": {
            display: "none",
          },
        },
      },
      MuiSwitch: {
        track: {
          "$checked$checked+&": {
            opacity: 0.3,
            backgroundColor: "#464646",
          },
        },
      },
    },
  });

  return (
    <ThemeContext.Provider value={[isDark, setIsDark]}>
      <AppContextProvider>
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
          {children}
        </ThemeProvider>
      </AppContextProvider>
    </ThemeContext.Provider>
  );
};
