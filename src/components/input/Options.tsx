import React, { useContext } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Params } from "./Params";
import { AppContext } from "../../context/AppContext";
import { RequestJson } from "./RequestJson";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export const Options = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) =>
    setValue(newValue);

  const [queryParams, headerParams] = useContext(AppContext);

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
        indicatorColor="primary"
      >
        <Tab label="Query Params" {...a11yProps(0)} />
        <Tab label="Headers" {...a11yProps(1)} />
        <Tab label="JSON" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Params keyValPairs={queryParams} type="QUERYPARAMS" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Params keyValPairs={headerParams} type="HEADERPARAMS" />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <RequestJson />
      </TabPanel>
    </div>
  );
};
