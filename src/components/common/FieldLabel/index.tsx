import { useAnchor } from "@flynotes/fly-document";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import React from "react";
import DownloadIcon from '../../../assets/download.svg';
import { IAnchor } from '../../../types/Anchor';
import { IItem } from '../../../types/Item';
import { useStyles } from './styles';

interface IProps extends IItem, IAnchor {
  onDelete?: (id: number) => void;
}

const FieldLabel = (props: IProps) => {
  const { id, labelName, type, active, activeX, activeY, icon = '', onDelete, x, y } = props;
  const [{ isDragging }, drag] = useAnchor(props);
  const isAligned = active && (activeX === props.x || activeY === props.y);
  const classes = useStyles({ isDragging, isAligned, x, y });

  const handleDelete = () => onDelete?.(id);

  if (type === "signature") {
    return (
      <div ref={drag} className={`${classes.label} ${classes.signature}`}>
        {labelName}
        <img src={DownloadIcon} width={50} alt="field_icon" />
        <IconButton className={classes.deleteButton} onClick={handleDelete} style={{ position: 'absolute', right: 5, top: 5 }}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </div>);
  }

  return (
    <div ref={drag} className={`${classes.label} ${classes.text}`}>
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
