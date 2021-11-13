import { Button, Grid } from "@material-ui/core";
import { useState } from "react";
import { InputField } from "./InputField";
import { Options } from "./Options";
import { Selector } from "./Selector";

export const Input = () => {
  const [uri, setUri] = useState("");
  const [method, setMethod] = useState("GET");

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  };

  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={4} sm={2}>
          <Selector value={method} setValue={setMethod} />
        </Grid>
        <Grid
          item
          xs={4}
          sm={8}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <InputField
            value={uri}
            setValue={setUri}
            placeholder="Please enter your url..."
          />
        </Grid>
        <Grid item xs={4} sm={2}>
          <Button
            color="primary"
            type="submit"
            variant="outlined"
            fullWidth
            style={{ height: "100%" }}
            onClick={(e) => handleSubmit(e)}
          >
            Send
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Options />
        </Grid>
      </Grid>
    </form>
  );
};
