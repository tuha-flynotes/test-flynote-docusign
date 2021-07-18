import { DocumentEditor, DocumentView, FieldInputProps } from "@flynotes/fly-document";
import { Box, FormControlLabel, IconButton } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Switch from '@material-ui/core/Switch';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import React, { useState } from 'react';
import { FieldTextProps } from '../../../../flynotes-docusign/dist/lib/components/anchors';
import { ILabel } from '../../types/Item';
import FieldInput from '../common/FieldInput';
import FieldView from '../common/FieldView';
import { useStyles } from './styles';
import UserSelect from './UserSelect';


interface IProps {
  anchors: ILabel[];
  open: boolean;
  setOpen: (value: boolean) => void;
  file: Record<string, string>,
  fileUrl: string;
}

export default function Preview({ anchors, open, setOpen, file, fileUrl }: IProps): JSX.Element {
  const presetValues = {
    patientName: 'Chloe L Franklin',
    patientAddressLine1: '58',
    patientAddressLine2: 'Wenlock Terrace',
    patientAddressLine3: 'PEN-Y-GARN',
    patientAddressPostCode: 'SA32 7TW',
    clinicianName: 'UK Clinical Research Collaboration',
    practiceName: '8th tooth'
  } as Record<string, string>;

  const presetAnchors = anchors.map((anchor) => ({
    ...anchor,
    value: presetValues[anchor.name] || ''
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

  const descriptionElementRef = React.useRef<HTMLElement>(null);
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
        fullScreen
        onClose={handleClose}
        scroll='paper'
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        fullWidth
      >
        <Box className={classes.dialogTitle} id="scroll-dialog-title">
          <Box display="flex">
            <Box className={classes.dialogTitleText}>Viewing as</Box>
            <UserSelect />
          </Box>
          <Box>
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
            <IconButton onClick={handleClose} className={classes.closeIcon}>
              <CloseOutlinedIcon />
            </IconButton>
          </Box>

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
                FieldInput={FieldInput as React.FC<FieldInputProps>}
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
                FieldText={FieldView as React.FC<FieldTextProps>}
              />
            )
          }

        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onSave} color="primary">
            Save
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}