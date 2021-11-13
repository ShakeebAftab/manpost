import { Box } from "@material-ui/core";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import CodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";

export const RequestJson = () => {
  const [, , , , , reqJson, setReqJson] = useContext(AppContext);

  return (
    <Box>
      <CodeMirror
        value={reqJson}
        height="250px"
        extensions={[json()]}
        onChange={(value) => setReqJson(value)}
      />
    </Box>
  );
};
