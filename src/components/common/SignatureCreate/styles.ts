import { makeStyles } from "@material-ui/core";
const commonText = {
  fontFamily: "Poppins",
};

const commonInput = {
  padding: "16px",
};
const useStyles = makeStyles((theme) => ({
  container: {
    padding: "41px 48px 37px !important",
  },
  paper: {
    borderRadius: '20px'
  },
  headerContainer: {
    textAlign: "center",
  },
  title: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "27px",
    textAlign: "center",
    color: "#333333",
    ...commonText,
  },
  subTitle: {
    ...commonText,
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "18px",
    textAlign: "center",
    color: "#000000",
    marginTop: 10,
  },
  requireText: {
    ...commonText,
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "18px",
    marginTop: 6,
  },
  infoContainer: {
    marginTop: 27,
  },
  label: {
    ...commonText,
  },
  nameInput: {
    marginRight: 23,
    width: "calc(100% - 23px)",
  },
  initialInput: {
    width: "100%",
  },
  divider: {
    margin: "30px 0",
  },
  drawText: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "27px",
    color: "#333333",
  },
  drawInfoText: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontHeight: "normal",
    fontSize: "12px",
    lineHeight: "18px",
    color: "#000000",
    marginTop: 10,
  },
  actionContainer: {
    marginTop: 30,
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    textTransform: "none",
    width: 200,
    height: 50,
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontSize: "14px",
    lineHeight: "21px",
  },
  signButton: {
    textTransform: "none",
    width: 200,
    height: 50,
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontSize: "14px",
    lineHeight: "21px",
    background: "#3F95E7",
  },
  sigPad: ({ sigPadError }: { sigPadError: boolean }) => ({
    background: "#ffffff",
    border: "1px solid",
    borderColor: sigPadError ? "#F44337" : "#d6d6d6",
    boxSizing: "border-box",
    borderRadius: "4px",
    marginTop: "17px",
  }),
}));

export { useStyles };
