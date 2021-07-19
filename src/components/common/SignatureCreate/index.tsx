import { Box, Button, Divider, Grid, TextField, Typography } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import React, { ChangeEvent } from 'react';
import ReactSignatureCanvas from 'react-signature-canvas';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';

import { useStyles } from './styles';

export interface ISignature {
  fullName: string;
  // initials: string;
  signatureValue: string
}

interface ISignatureError {
  fullName: boolean;
  // initials: boolean;
  signatureValue: boolean
}

interface IProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  onCreateSignature: (params: ISignature) => void;
  value: ISignature;
}

export default function SignatureInput({ open = false, setOpen, onCreateSignature, value }: IProps) {
  const [signatureError, setSignatureError] = React.useState<ISignatureError>({} as ISignatureError);
  const classes = useStyles({ sigPadError: signatureError.signatureValue });
  const sigPad = React.useRef<ReactSignatureCanvas>();
  const [signature, setSignature] = React.useState<ISignature>(value || {} as ISignature);
  const handleClose = () => {
    setOpen(false);
  };
  const callbackRef = (instance: ReactSignatureCanvas) => {
    sigPad.current = instance;
  }

  const handleEndDrawSignature = (e: MouseEvent) => {
    const trimmedDataURL = sigPad.current?.getTrimmedCanvas().toDataURL('image/png');
    setSignature((current) => ({
      ...current,
      signatureValue: trimmedDataURL || ''
    }))
    setSignatureError((currentError) => ({
      ...currentError,
      signatureValue: false
    }))
  }

  const handleChange = (type: string) => (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { value } = e.target;
    setSignatureError((currentError) => ({
      ...currentError,
      [type]: false
    }))
    setSignature((current) => ({
      ...current,
      [type]: value
    }))
  }

  const handleSign = () => {
    if (!signature.fullName || !signature.signatureValue) {
      setSignatureError({
        fullName: !signature.fullName,
        // initials: !signature.initials,
        signatureValue: !signature.signatureValue,
      });
      return;
    }
    onCreateSignature(signature);
  }

  return (
    <React.Fragment>
      <Dialog
        className={classes.container}
        fullWidth
        maxWidth="md"
        open={open}
        onClose={handleClose}
        aria-labelledby="create signature dialog"
        classes={{
          paper: classes.paper
        }}
      >
        <DialogContent className={classes.container}>
          <Box className={classes.headerContainer}>
            <Typography className={classes.title}>Adopt your signature</Typography>
            <Typography className={classes.subTitle}>Confirm your name, initials and signature.</Typography>
          </Box>
          <Typography className={classes.requireText}>* Required</Typography>
          <Box className={classes.infoContainer}>
            <Grid container>
              <Grid xs={12} item>
                <TextField
                  InputLabelProps={{
                    classes: {
                      root: classes.label
                    }
                  }}
                  className={classes.nameInput}
                  onChange={handleChange('fullName')}
                  required
                  fullWidth
                  id="outlined-required"
                  label="Full name"
                  variant="outlined"
                  error={signatureError.fullName}
                  value={signature.fullName}
                />
              </Grid>
              {/* <Grid xs={4} item>
                <TextField
                  fullWidth
                  onChange={handleChange('initials')}
                  className={classes.initialInput}
                  required
                  id="outlined-required"
                  label="Initials"
                  variant="outlined"
                  error={signatureError.initials}
                  value={signature.initials}
                />
              </Grid> */}
            </Grid>
          </Box>
          <Divider className={classes.divider} />
          <Box>
            <Typography className={classes.drawText}>Draw your signature</Typography>
            <ReactSignatureCanvas
              penColor='black'
              canvasProps={{ width: 864, height: 136, className: classes.sigPad }}
              onEnd={handleEndDrawSignature}
              ref={callbackRef}
            />
            <Typography className={classes.drawInfoText}>
              By selecting Adopt and Sign, I agree that the signature and initials will be the electronic representation of my signature and initials for all purposes when I use them on documents, including legally binding contracts - just the same as a pen-and -paper signature or initial.
            </Typography>
          </Box>
          <Box className={classes.actionContainer}>
            <Button
              className={classes.button}
              variant="outlined"
              startIcon={<CloseOutlinedIcon />}
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button className={classes.signButton} variant="contained" color="primary" onClick={handleSign}>
              Adopt and Sign
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}