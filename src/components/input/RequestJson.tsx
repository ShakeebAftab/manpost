import { Box } from "@material-ui/core";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import CodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";
import { ThemeContext } from "../../theme/ThemeContext";

export const RequestJson = () => {
  const [, , , , , reqJson, setReqJson] = useContext(AppContext);
  const [isDark] = useContext(ThemeContext);

  return (
    <Box>
      <CodeMirror
        value={reqJson}
        height="250px"
        extensions={[json()]}
        onChange={(value) => setReqJson(value)}
        theme={isDark ? "dark" : "light"}
      />
    </Box>
  );
};
