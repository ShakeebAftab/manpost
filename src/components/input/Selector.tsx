import { makeStyles, MenuItem, TextField } from "@material-ui/core";
import { Method } from "axios";
import { Dispatch, useContext } from "react";
import { options } from "../../helpers/options";
import { ThemeContext } from "../../theme/ThemeContext";

const useStyles = makeStyles({
  field: {
    border: "2px solid red",
    borderRadius: 5,
    "&:hover": {
      border: "2px solid red",
    },
  },
});

interface Props {
  value: Method;
  setValue: Dispatch<Method>;
}

export const Selector = ({ value, setValue }: Props) => {
  const classes = useStyles();
  const [isDark] = useContext(ThemeContext);
  return (
    <TextField
      select={true}
      variant="outlined"
      color="primary"
      fullWidth
      size="small"
      value={value}
      onChange={(e) => setValue(e.target.value as Method)}
      className={isDark ? classes.field : ""}
    >
      {options.map((opt: { method: string }) => (
        <MenuItem key={opt.method} value={opt.method}>
          {opt.method}
        </MenuItem>
      ))}
    </TextField>
  );
};
