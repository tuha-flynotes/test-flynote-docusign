import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  view: ({ x, y }: { x: number; y: number; }) => ({
    position: 'absolute',
    top: y,
    left: x,
    fontSize: 12,
    fontWeight: 500,
    fontFamily: "Poppins",
  }),
  signatureView: ({ x, y }: { x: number; y: number;}) => ({
    position: 'absolute',
    top: y,
    left: x,
    width: 130,
    fontFamily: "Poppins",
    textAlign: 'center',
  }),
  imgView: {
    width: 130,
  },
  signText: {
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: 500,
  }
}));

export { useStyles };
