import React from "react";
import { makeStyles } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { useAnchor } from "@flynotes/fly-document";
import DownloadIcon from '../../../assets/download.svg';

const useStyles = makeStyles((theme) => ({
  label: {
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


const FieldLabel = (props) => {
  const classes = useStyles();
  const { id, labelName, type, active, activeX, activeY, icon, onDelete } = props;
  const [{ isDragging }, drag] = useAnchor(props);

  const isAligned = active && (activeX === props.x || activeY === props.y);

  const commonStyle = {
    background: isAligned ? 'green' : "#FFDE8B",
    border: "1px solid #B98424",
    borderRadius: 2,
    boxSizing: "border-box",
    opacity: isDragging ? 0 : 1,
    position: "absolute",
    top: props.y,
    left: props.x,
    fontSize: 12,
    cursor: "pointer"
  };

  const handleDelete = () => onDelete(id);

  if (type === "signature") {
    const signatureStyle = {
      ...commonStyle,
      width: 130,
      height: 90,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 30,
      flexDirection: 'column'
    };

    return (
      <div style={signatureStyle} ref={drag} className={classes.label}>
        {labelName}
        <img src={DownloadIcon} width={50} alt="field_icon" />
        <IconButton className={classes.deleteButton} onClick={handleDelete} style={{ position: 'absolute', right: 5, top: 5 }}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </div>);
  }

  const style = {
    ...commonStyle,
    padding: '0.5rem',
    display: 'flex',
    alignItems: 'center'
  };

  return (
    <div style={style} ref={drag} className={classes.label}>
      <img 
        src={icon} 
        alt="field_icon" 
        style={{
          width: 15,
          height: 15,
          paddingRight: 5,
          color: 'black'
        }} 
      />
      {labelName}
      <IconButton className={classes.deleteButton} onClick={handleDelete}>
        <DeleteIcon fontSize="small" />
      </IconButton>
    </div>
  );
};

export default FieldLabel;
