import { Box } from "@material-ui/core";
import CodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";

interface Props {
  response: any;
}

export const ResponseBody = ({ response }: Props) => {
  return (
    <Box overflow="hidden">
      <CodeMirror
        value={JSON.stringify(response.data, null, 2)}
        style={{ maxHeight: "400px", overflow: "scroll" }}
        extensions={[json()]}
        editable={false}
      />
    </Box>
  );
};
