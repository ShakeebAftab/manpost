import { Box } from "@material-ui/core";
import CodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";
import { ThemeContext } from "../../theme/ThemeContext";
import { useContext } from "react";

interface Props {
  response: any;
}

export const ResponseBody = ({ response }: Props) => {
  const [isDark] = useContext(ThemeContext);

  return (
    <Box overflow="hidden">
      <CodeMirror
        value={JSON.stringify(response.data, null, 2)}
        style={{ maxHeight: "400px", overflow: "scroll" }}
        extensions={[json()]}
        editable={false}
        theme={isDark ? "dark" : "light"}
      />
    </Box>
  );
};
