import { Box, Button, Grid } from "@material-ui/core";
import { useContext } from "react";
import { AppContext, ParamsType } from "../../context/AppContext";
import { ThemeContext } from "../../theme/ThemeContext";
import { InputField } from "./InputField";

interface Props {
  pair: ParamsType;
  type: string;
}

export const KeyValuePair = ({ pair, type }: Props) => {
  const [, , , updateParam, deleteParam] = useContext(AppContext);

  const updateKey = (valueToUpdate: string) =>
    updateParam(type, pair.id, valueToUpdate, "key");

  const updateValue = (valueToUpdate: string) =>
    updateParam(type, pair.id, valueToUpdate, "value");

  const [isDark] = useContext(ThemeContext);

  return (
    <Box overflow="hidden">
      <Grid container spacing={1}>
        <Grid item xs={3} sm={3}>
          <InputField value={pair.key} setValue={updateKey} placeholder="Key" />
        </Grid>
        <Grid item xs={6} sm={7}>
          <InputField
            value={pair.value}
            setValue={updateValue}
            placeholder="Value"
          />
        </Grid>
        <Grid item xs={3} sm={2}>
          <Button
            size="small"
            color="primary"
            onClick={() => deleteParam(type, pair.id)}
            variant={isDark ? "contained" : "outlined"}
            style={{ height: "100%" }}
          >
            Remove
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
