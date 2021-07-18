import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  DialogContent: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#DFDFDF",
  },
  dialogTitle: {
    display: "flex",
    padding: "12px 24px",
    alignItems: "center",
    justifyContent: "space-between",
  },
  closeIcon: {
    padding: 6,
    backgroundColor: "#E9E9E9",
  },
  dialogTitleText: {
    display: "flex",
    alignItems: "center",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "24px",
    /* identical to box height */
    marginRight: 12,
    color: "#333333",
  },
}));

export { useStyles };
