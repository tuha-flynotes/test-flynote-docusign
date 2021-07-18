import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  selectContainer: {
    width: 417,
    display: "flex",
    border: "1px solid #B3B3B3",
    borderRadius: "4px",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "2px 6px 2px 12px",
    cursor: "pointer",
    userSelect: "none",
  },
  typography: {
    padding: theme.spacing(2),
  },
  dot: {
    backgroundColor: "#FFDF8E",
    borderRadius: "50%",
    width: 12,
    height: 12,
    marginRight: 12,
  },
  selectText: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#333333",
  },
  popperContainer: {
    zIndex: 10000,
  },
  popper: {
    width: "436px",
    height: "315px",
    left: "157px",
    top: "75px",
    background: "#FFFFFF",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    borderRadius: "6px",
  },
}));

export { useStyles };
