import { Button, Grid } from "@material-ui/core";
import axios, { AxiosResponse, Method } from "axios";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { ThemeContext } from "../../theme/ThemeContext";
import { InputField } from "./InputField";
import { Options } from "./Options";
import { Response } from "./Response";
import { Selector } from "./Selector";

export const Input = () => {
  const [uri, setUri] = useState("");
  const [method, setMethod] = useState<Method>("GET");
  const [res, setRes] = useState<AxiosResponse<any, any> | undefined>(
    undefined
  );
  const [resTime, setResTime] = useState(0);
  const [json, setJson] = useState("");

  const [queryParams, headerParams, , , , reqJson] = useContext(AppContext);
  const [isDark] = useContext(ThemeContext);

  const getParams = (arrayParams: any[]) => {
    let params: any = {};
    arrayParams.forEach((param: any) => {
      const newParam: any = {};
      if (param.key !== "" && param.value !== "") {
        newParam[param.key] = param.value;
        params = { ...params, ...newParam };
      }
    });
    return params;
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    try {
      const jsonData = JSON.parse(reqJson || null);
      setJson(jsonData);
    } catch (error: any) {
      console.log(error.message);
      alert("JSON isn't parsed correctly");
      return;
    }

    const start = new Date().getTime();
    try {
      const data = await axios(uri, {
        method: method,
        params: getParams(queryParams),
        headers: getParams(headerParams),
        data: json,
      });
      setRes(data);
    } catch (error: any) {
      console.log(error.message);
      setRes(error.response);
    }
    const end = new Date().getTime();
    setResTime(end - start);
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
          style={{
            display: "flex",
            justifyContent: "center",
          }}
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
            variant={isDark ? "contained" : "outlined"}
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
        {res && (
          <Grid item xs={12}>
            <Response response={res} time={resTime} />
          </Grid>
        )}
      </Grid>
    </form>
  );
};
