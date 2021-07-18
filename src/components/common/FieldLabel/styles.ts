import { makeStyles } from "@material-ui/core";

interface IStyleParams {
  isAligned: boolean;
  isDragging: boolean;
  x: number;
  y: number;
}

const commonStyle = ({
  isAligned,
  isDragging,
  x,
  y,
}: {
  isAligned: boolean;
  isDragging: boolean;
  x: number;
  y: number;
}) => ({
  background: isAligned ? "green" : "#FFDE8B",
  border: "1px solid #B98424",
  borderRadius: 2,
  opacity: isDragging ? 0 : 1,
  top: y,
  left: x,
  fontSize: 12,
  cursor: "pointer",
});

const useStyles = makeStyles((theme) => ({
  label: {
    "&:hover": {
      "& $deleteButton": {
        visibility: "initial",
      },
    },
  },
  deleteButton: {
    padding: 2,
    visibility: "hidden",
  },
  text: ({ isAligned, isDragging, x, y }: IStyleParams) => ({
    ...commonStyle({ isAligned, isDragging, x, y }),
    paddingLeft: 4,
    display: 'flex',
    alignItems: 'center',
    boxSizing: "border-box",
    position: "absolute",
  }),
  signature: ({ isAligned, isDragging, x, y }: IStyleParams) => ({
    ...commonStyle({ isAligned, isDragging, x, y }),
    boxSizing: "border-box",
    position: "absolute",
    height: 90,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 30,
    flexDirection: "column",
    width: 130,
  }),
}));

export { useStyles };
