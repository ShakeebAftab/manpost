import { Box, InputBase, useTheme } from "@material-ui/core";
import { Dispatch, useState } from "react";

interface Props {
  value: string;
  setValue: Dispatch<string>;
  placeholder?: string;
}

export const InputField = ({ value, setValue, placeholder }: Props) => {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Box
      style={{
        border: isFocused
          ? `2px solid ${theme.palette.primary.main}`
          : "0.5px solid gray",
        borderRadius: 5,
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
      />
    </Box>
  );
};
