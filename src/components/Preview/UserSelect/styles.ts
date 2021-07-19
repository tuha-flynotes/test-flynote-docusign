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
    zIndex: 1301,
  },
  popper: {
    width: "396px",
    maxWidth: 436,
    padding: "20px",
    height: "275px",
    left: "157px",
    top: "75px",
    background: "#FFFFFF",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    borderRadius: "6px",
  },
  root: {
    padding: "0px",
    display: "flex",
    alignItems: "center",
    width: 396,
    boxShadow: "none",
    border: "1px solid #E3E3E3",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  fullName: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "21px",
    /* identical to box height */
    color: "#333333",
  },
  small: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "18px",
    /* identical to box height */
    color: "#333333",
  },

  dob: {
    marginLeft: 9,
    display: "flex",
    alignItems: "center",
  },
  code: {
    marginLeft: 20,
  },
  lower: {
    color: "#939393",
  },
  email: {
    display: "flex",
    alignItems: "center",
  },
  special: {
    color: "#939393",
  },
  userItem: {
    cursor: 'pointer',
    userSelect: 'none'
  }
}));

export { useStyles };
