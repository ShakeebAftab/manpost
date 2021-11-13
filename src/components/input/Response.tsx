import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import prettyBytes from "pretty-bytes";
import { ResponseOptions } from "./ResponseOptions";

const useStyles = makeStyles({
  gridItem: {
    display: "flex",
    color: "gray",
  },
  statusInfoTxt: {
    marginRight: "7px",
  },
});

interface Props {
  response: any;
  time: any;
}

export const Response = ({ response, time }: Props) => {
  const classes = useStyles();

  return (
    <Box overflow="hidden">
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h5">Response</Typography>
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          <Typography variant="body2" className={classes.statusInfoTxt}>
            Status: {response.status}
          </Typography>
          <Typography variant="body2" className={classes.statusInfoTxt}>
            Time: {time} ms
          </Typography>
          <Typography variant="body2" className={classes.statusInfoTxt}>
            Size: {prettyBytes(JSON.stringify(response).length)}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <ResponseOptions response={response} />
        </Grid>
      </Grid>
    </Box>
  );
};
