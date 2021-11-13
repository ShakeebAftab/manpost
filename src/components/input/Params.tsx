import { Box, Button, Grid } from "@material-ui/core";
import { useContext } from "react";
import { AppContext, ParamsType } from "../../context/AppContext";
import { KeyValuePair } from "./KeyValuePair";

interface Props {
  keyValPairs: ParamsType[];
  type: string;
}

export const Params = ({ keyValPairs, type }: Props) => {
  const [, , addNewParam] = useContext<any>(AppContext);

  return (
    <Box overflow="hidden">
      <Grid container spacing={2}>
        {keyValPairs.length > 0 &&
          keyValPairs.map((pair: ParamsType, idx: number) => (
            <Grid item xs={12} key={pair.id}>
              <KeyValuePair pair={pair} type={type} />
            </Grid>
          ))}
        <Grid item xs={12}>
          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={() => addNewParam(type)}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
