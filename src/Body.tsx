import {
  Container,
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Theme,
} from "@material-ui/core";
import { Input } from "./components/input/Input";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginBottom: "10px",
    },
    paper: {
      padding: "20px",
    },
  })
);

export const Body = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.container}>
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item xs={12}>
            <Input />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};
