import { Box, Typography } from "@material-ui/core";
import React, { FC } from "react";
import DownloadIcon from '../../../../assets/download.svg';
import SignatureInput, { ISignature } from "../../SignatureCreate";
import { useStyles } from './styles';

interface FieldInputProps {
  onChange: (params: ISignature) => void;
  value: ISignature
}

const FieldSignatureInput: FC<FieldInputProps> = ({ onChange, value }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  function handleCreateSignature(value: ISignature) {
    onChange(value);
    setOpen(false);
  }
  if (value.signatureValue) {
    return (
      <React.Fragment>
        <Box className={classes.signature} onClick={() => setOpen(true)}>
          <img src={value.signatureValue} width={130} alt="field_icon" />
          <Typography className={classes.resignText}>Resign</Typography>
        </Box>
        {open && (<SignatureInput open setOpen={setOpen} onCreateSignature={handleCreateSignature} value={value} />)}
      </React.Fragment>
    )
  }
  return (
    <React.Fragment>
      <Box className={classes.signature} onClick={() => setOpen(true)}>
        <div>Sign</div>
        <img src={DownloadIcon} width={50} alt="field_icon" />
      </Box>
      {open && (<SignatureInput open setOpen={setOpen} onCreateSignature={handleCreateSignature} value={value}/>)}
    </React.Fragment>
  )
};

export default FieldSignatureInput;
