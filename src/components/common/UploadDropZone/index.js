import { useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { useDropzone } from "react-dropzone";
import { Button, Typography } from "@material-ui/core";
import CloudUpload from '../../../assets/cloud-upload-big.svg';

const useStyles = makeStyles((theme) => ({
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
    border: '1.5px dashed #E3E3E3'
  },
  inputBoxActive: {
    borderColor: "green",
  },
  inputTextContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  headerText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '24px',
    /* identical to box height */
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#3B98E3',
    marginBottom: 7
  },
  describeText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '18px',
    /* identical to box height */
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#747474',
    opacity: '0.6',
  },
  button: {
    backgroundColor: '#E8F4FF',
    marginTop: 15,
    textTransform: 'none',
    color: '#3B98E3',
    border: '1px solid #3B98E3',
    width: 160
  }
}));

export default function MyDropzone({ onSelectFile }) {
  const onDrop = useCallback((acceptedFiles) => {
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
