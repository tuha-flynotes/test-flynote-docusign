import Typography from "@material-ui/core/Typography";
import React from "react";
import { useDrag } from "react-dnd";
import { getEmptyImage } from 'react-dnd-html5-backend'
import { useStyles } from "./styles";

const StandardField = ({ icon, type, labelName, displayName }) => {
  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: type,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    item: {
      icon,
      type,
      labelName,
      displayName
    },
  }));
  const classes = useStyles({ isDragging });
  React.useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true })
  }, []);
  return (
    <div className={classes.box} ref={drag}>
      <img className={classes.img} src={icon} alt="field_icon" />
      <Typography className={classes.text}>{displayName}</Typography>
    </div>
  );
};

export default StandardField;
