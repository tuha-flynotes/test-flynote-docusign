import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  input: ({ x, y, type }: { x: number; y: number; type: string }) => ({
    position: "absolute",
    top: y,
    left: x,
    outline: "none",
    border: "1px solid #3F95E7",
    borderRadius: 4,
    fontSize: 12,
    height: type === "signature" ? 86 : 22,
    fontFamily: "Poppins",
  }),
}));

export { useStyles };
