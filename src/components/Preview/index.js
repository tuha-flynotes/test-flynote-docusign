import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { DocumentDesign } from "@flynotes/fly-document";

export default function Preview({ anchors, open, setOpen }) {

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
        <DialogContent dividers>
          <DocumentDesign
            anchors={anchors}
            onChangeAnchors={() => { }}
            fileUrl="/potrait_consent.pdf"
            classes={{
              documentContainer: "documentContainer",
              pagesWrapper: "pagesWrapper",
              pageWrapper: "pageWrapper",
              previewContainer: "previewContainer",
              previewPageWrapper: "previewPageWrapper",
              previewFooter: "previewFooter",
            }}
          />
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