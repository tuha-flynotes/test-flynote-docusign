import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  box: ({ isDragging }) => ({
    marginTop: 20,
    background: "#FFFFFF",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
    borderRadius: "5px",
    width: 168,
    display: "flex",
    padding: "13px 18px",
    alignItems: "center",
    cursor: "move",
    userSelect: "none",
  }),
  img: {
    width: 15,
    height: 15,
    paddingRight: 10,
  },
  text: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "21px",
    alignItems: "center",
    color: "#333333",
    paddingRight: 10
  },
  label: {
    background: "#FFDE8B",
    border: "1px solid #B98424",
    boxSizing: "border-box",
    borderRadius: 2,
    padding: 4,
    position: "absolute",
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      '& $deleteButton': {
        visibility: 'initial'
      }
    }
  },
  deleteButton: {
    padding: 2,
    visibility: 'hidden'
  }
}));

export { useStyles };
