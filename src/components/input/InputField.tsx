import { Box, InputBase, useTheme } from "@material-ui/core";
import { Dispatch, useContext, useState } from "react";
import { ThemeContext } from "../../theme/ThemeContext";

interface Props {
  value: string;
  setValue: Dispatch<string>;
  placeholder?: string;
}

export const InputField = ({ value, setValue, placeholder }: Props) => {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const [isDark] = useContext(ThemeContext);

  return (
    <Box
      style={{
        border: isFocused
          ? `2px solid ${theme.palette.primary.main}`
          : "0.5px solid gray",
        borderRadius: 5,
        background: isDark ? "#4E4F50" : "#fff",
      }}
      p="5px"
      pt="0px"
      pb="0px"
      width="100%"
      display="flex"
      justifyContent="center"
    >
      <InputBase
        fullWidth
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        inputProps={isDark && { style: { color: "white" } }}
      />
    </Box>
  );
};
