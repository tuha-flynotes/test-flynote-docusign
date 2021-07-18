import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  signature: {
    borderRadius: 2,
    cursor: "pointer",
    boxSizing: "border-box",
    position: "absolute",
    height: 90,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 30,
    flexDirection: "column",
    width: "100%",
    fontFamily: "Poppins",
  },
  resignText: {
    fontFamily: "Poppins",
    marginTop: 30
  }
}));

export { useStyles };
