import React, { useEffect, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { ResponseHeaders } from "./ResponseHeaders";
import { ResponseBody } from "./ResponseBody";

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

interface Props {
  response: any;
}

export const ResponseOptions = ({ response }: Props) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [headers, setHeaders] = useState<any>([]);

  useEffect(() => {
    const allHeaders: any = [];
    Object.keys(response.headers).forEach((key) =>
      allHeaders.push({
        key: key,
        value: response.headers[key],
      })
    );
    setHeaders(allHeaders);
  }, [response]);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) =>
    setValue(newValue);

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
        indicatorColor="primary"
      >
        <Tab label="Body" {...a11yProps(0)} />
        <Tab label="Headers" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ResponseBody response={response} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ResponseHeaders headers={headers} />
      </TabPanel>
    </div>
  );
};
