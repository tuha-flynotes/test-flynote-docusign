import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { DocumentEditor, DocumentView } from "@flynotes/fly-document";
import FieldInput from '../common/FieldInput';
import { useStyles } from './styles';
import { Box, FormControlLabel, Typography } from '@material-ui/core';

const FieldText = ({ value, x, y }) => (
  <div style={{ position: 'absolute', top: y, left: x, fontSize: 12, fontWeight: 600 }}>{value}</div>
)

export default function Preview({ anchors, open, setOpen, file, fileUrl }) {
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
  const [enableEditing, setEnableEditing] = useState(true);
  console.log('dta', data);

  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };

  const onSave = () => {
    async function saveData() {
      const { id, ...fileWithoutId } = file;
      const response = await fetch(`http://localhost:5000/file-document/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...fileWithoutId,
          predefinedFields: {
            fields: data
          }
        })
      });
      const responseJson = await response.json();
      return responseJson;
    }
    saveData().then(() => handleClose())
  }

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const handleChange = () => {
    setEnableEditing(!enableEditing);
  }

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
        <Box className={classes.dialogTitle} id="scroll-dialog-title">
          <Typography>Preview</Typography>
          <FormControlLabel
            control={
              <Switch
                checked={enableEditing}
                onChange={handleChange}
                name="editingStatus"
                color="primary"
              />
            }
            label="Editable"
          />
        </Box>
        <DialogContent dividers className={classes.DialogContent}>
          {
            enableEditing ? (
              <DocumentEditor
                anchors={data}
                onChangeAnchors={setData}
                fileUrl={fileUrl}
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
                fileUrl={fileUrl}
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
          <Button onClick={onSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}