import { Box, Button, Grid } from "@material-ui/core";
import { useContext } from "react";
import { AppContext, ParamsType } from "../../context/AppContext";
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

  return (
    <Box overflow="hidden">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <InputField value={pair.key} setValue={updateKey} placeholder="Key" />
        </Grid>
        <Grid item xs={7}>
          <InputField
            value={pair.value}
            setValue={updateValue}
            placeholder="Value"
          />
        </Grid>
        <Grid
          item
          xs={1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            size="small"
            color="primary"
            fullWidth
            onClick={() => deleteParam(type, pair.id)}
          >
            X
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
