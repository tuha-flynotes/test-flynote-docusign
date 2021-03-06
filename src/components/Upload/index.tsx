import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
import UploadDropZone from '../common/UploadDropZone';
import PendingItem from './PendingItem';
import { useStyles } from "./styles";
import { Typography } from '@material-ui/core';

interface IProps {
  open: boolean;
  setOpen: (param: boolean) => void;
  onUploadFile: (file: File) => void;
}

export default function Upload({ open = false, setOpen, onUploadFile }: IProps) {
  const classes = useStyles();
  const [file, setFile] = React.useState<File | undefined>();
  const handleClose = () => {
    setOpen?.(false);
  };

  const handleUpload = () => {
    onUploadFile?.(file!);
  }

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const handleDelete = () => {
    setFile(undefined);
  }

  const handleSelectFile = (file: {file: File[]} ) => {
    setFile(file?.file?.[0]);
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      scroll='paper'
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      fullWidth
      maxWidth="md"
    >
      <DialogTitle id="scroll-dialog-title" className={classes.dialogTitle}>
        <Typography className={classes.dialogTitle}>Select document to upload</Typography>
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <UploadDropZone onSelectFile={handleSelectFile} />
        {file && (
          <PendingItem file={file} onDelete={handleDelete} />
        )}
      </DialogContent>
      <DialogActions className={classes.dialogAction}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpload}
          className={classes.button}
          startIcon={<CloudUploadOutlinedIcon />}
        >
          Upload
        </Button>
      </DialogActions>
    </Dialog>
  );
}