import { MenuItem, TextField } from "@material-ui/core";
import { Method } from "axios";
import { Dispatch } from "react";
import { options } from "../../helpers/options";

interface Props {
  value: Method;
  setValue: Dispatch<Method>;
}

export const Selector = ({ value, setValue }: Props) => {
  return (
    <TextField
      select={true}
      variant="outlined"
      color="primary"
      fullWidth
      size="small"
      value={value}
      onChange={(e) => setValue(e.target.value as Method)}
    >
      {options.map((opt: { method: string }) => (
        <MenuItem key={opt.method} value={opt.method}>
          {opt.method}
        </MenuItem>
      ))}
    </TextField>
  );
};
