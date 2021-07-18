import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  view: ({ x, y }: { x: number; y: number; }) => ({
    position: 'absolute',
    top: y,
    left: x,
    fontSize: 12,
    fontWeight: 600,
    fontFamily: "Poppins",
  }),
  signatureView: ({ x, y }: { x: number; y: number;}) => ({
    position: 'absolute',
    top: y,
    left: x,
    width: 130,
    height: 86,
    fontFamily: "Poppins",
  })
}));

export { useStyles };
