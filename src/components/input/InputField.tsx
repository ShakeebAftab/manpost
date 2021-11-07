import { Box, InputBase } from "@material-ui/core";
import { Dispatch } from "react";

interface Props {
  value: string;
  setValue: Dispatch<string>;
}

export const InputField = ({ value, setValue }: Props) => {
  return (
    <Box
      style={{ border: "1px solid black", borderRadius: 5 }}
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
        placeholder="Please enter the url..."
        onFocus={() => {}}
      />
    </Box>
  );
};
