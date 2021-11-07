import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appbar: {
      display: "flex",
      alignItems: "center",
    },
    title: {
      fontWeight: "bold",
    },
  })
);

export const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color="primary"
        elevation={0}
        className={classes.appbar}
      >
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" className={classes.title}>
            ManPost
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
