import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { DocumentEditor, DocumentView } from "@flynotes/fly-document";
import FieldInput from '../common/FieldInput';
import { useStyles } from './styles';

const FieldText = ({ value, x, y }) => (
  <div style={{ position: 'absolute', top: y, left: x, fontSize: 12, fontWeight: 600 }}>{value}</div>
)

export default function Preview({ anchors, open, setOpen, editing = false, file }) {
  const presetValues = {
    patientName: 'Chloe L Franklin',
    patientAddressLine1: '58',
    patientAddressLine2: 'Wenlock Terrace',
    patientAddressLine3: 'PEN-Y-GARN',
    patientAddressPostCode: 'SA32 7TW',
    clinicianName: 'UK Clinical Research Collaboration',
    practiceName: '8th tooth'
  }

  const presetAnchors = anchors.map((anchor) => ({
    ...anchor,
    value: presetValues[anchor.name]
  }));

  const [data, setData] = useState(presetAnchors);

  console.log(data)

  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll='paper'
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        fullWidth
        maxWidth="lg"
      >
        <DialogTitle id="scroll-dialog-title">Preview</DialogTitle>
        <DialogContent dividers className={classes.DialogContent}>
          {
            editing ? (
              <DocumentEditor
                anchors={data}
                onChangeAnchors={setData}
                fileUrl={file}
                classes={{
                  documentContainer: "documentContainer",
                  pagesWrapper: "pagesWrapper",
                  pageWrapper: "pageWrapper",
                  previewContainer: "previewContainer",
                  previewPageWrapper: "previewPageWrapper",
                  previewFooter: "previewFooter",
                }}
                FieldInput={FieldInput}
              />
            ) : (
              <DocumentView 
                anchors={data}
                fileUrl={file}
                classes={{
                  documentContainer: "documentContainer",
                  pagesWrapper: "pagesWrapper",
                  pageWrapper: "pageWrapper",
                  previewContainer: "previewContainer",
                  previewPageWrapper: "previewPageWrapper",
                  previewFooter: "previewFooter",
                }}
                FieldText={FieldText}
              />
            )
          }
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}