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
            width: "0.4em",
            height: "0.4em",
          },
          "*::-webkit-scrollbar-track": {
            "-webkit-box-shadow": "inset 0 0 6px #828282",
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "#808080",
            borderRadius: 5,
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
            width: "0.4em",
            height: "0.4em",
          },
          "*::-webkit-scrollbar-track": {
            "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.7)",
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "#707070",
            borderRadius: 5,
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
