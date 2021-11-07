import { Box, Grid } from "@material-ui/core";
import { Body } from "./Body";
import { Header } from "./components/Header";

export const App = () => (
  <Box overflow="hidden">
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <Body />
      </Grid>
    </Grid>
  </Box>
);
