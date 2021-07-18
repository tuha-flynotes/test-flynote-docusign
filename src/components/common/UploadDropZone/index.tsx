import { useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { useDropzone } from "react-dropzone";
import { Button, Typography } from "@material-ui/core";
import CloudUpload from '../../../assets/cloud-upload-big.svg';
import { useStyles } from './styles';

interface IProps {
  onSelectFile: (file: { file: File[] }) => void;
}

export default function MyDropzone({ onSelectFile }: IProps): JSX.Element {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onSelectFile?.({ file: acceptedFiles });
  }, [onSelectFile]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const classes = useStyles();

  return (
    <div
      {...getRootProps()}
      className={classNames(classes.inputBox, {
        [classes.inputBoxActive]: isDragActive,
      })}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <div className={classes.inputTextContainer}>
          <Typography className={classes.headerText}>Drag and drop files here</Typography>
          <Typography className={classes.describeText}>Maximum size: 10MB (files supported: docx, .pdf), 1 file at a time.</Typography>
          <img src={CloudUpload} alt="CloudUpload" />
          <Button variant="outlined" color="primary" className={classes.button}>
            Choose file
          </Button>
        </div>
      )}
    </div>
  );
}
