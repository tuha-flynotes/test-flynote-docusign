import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  inputBox: {
    padding: "2rem",
    minWidth: 500,
    border: "1.5px dashed #E3E3E3",
  },
  inputBoxActive: {
    borderColor: "green",
  },
  inputTextContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  headerText: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "24px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#3B98E3",
    marginBottom: 7,
  },
  describeText: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "18px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#747474",
    opacity: "0.6",
  },
  button: {
    backgroundColor: "#E8F4FF",
    marginTop: 15,
    textTransform: "none",
    color: "#3B98E3",
    border: "1px solid #3B98E3",
    width: 160,
  },
}));

export { useStyles };
