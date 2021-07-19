import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  input: ({ x, y, type }: { x: number; y: number; type: string }) => ({
    position: "absolute",
    top: y,
    left: x,
    outline: "none",
    borderRadius: 4,
    fontSize: 12,
    height: type === "signature" ? 93 : 22,
    width: 133,
    fontFamily: "Poppins",
  }),
}));

export { useStyles };
