import { useState } from "react";

import { DocumentDesign } from "@flynotes/fly-document";
import StandardField from "../../components/common/StandardField";
import { standardFields } from '../../constants/standard';
import { Typography, Breadcrumbs, Link, Button, Box } from "@material-ui/core";
import { useStyles } from './styles';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Cancel from '@material-ui/icons/Close';
import VisibilityIcon from '@material-ui/icons/Visibility';
import SaveIcon from '@material-ui/icons/Save';
import Preview from "../../components/Preview";
import FieldLabel from "../../components/common/FieldLabel";

function DocumentSign() {
  const classes = useStyles();
  const [anchors, setAnchors] = useState([]);
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className={classes.breadcrumbs}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <Typography color="textPrimary">FlySend</Typography>
          <Link className={classes.link} color="textPrimary">Send Comms</Link>
          <Link className={classes.link} color="textPrimary">Editing document</Link>
        </Breadcrumbs>
      </div>
      <div className={classes.container}>
        <div className={classes.standardContainer}>
          <Typography>Document:</Typography>
          <Typography className={classes.fileName}>Charles Saunders - Bridge - 2021-03-12 (1).pdf</Typography>
          {standardFields.map((field) => (
            <StandardField key={field.displayName} {...field} />
          ))}
        </div>
        <DocumentDesign
          anchors={anchors}
          onChangeAnchors={setAnchors}
          fileUrl="/potrait_consent.pdf"
          classes={{
            documentContainer: "documentContainer",
            pagesWrapper: "pagesWrapper",
            pageWrapper: "pageWrapper",
            previewContainer: "previewContainer",
            previewPageWrapper: "previewPageWrapper",
            previewFooter: "previewFooter",
          }}
          FieldLabel={FieldLabel}
        />
      </div>
      <div className={classes.bottomAction}>
        <Button
          variant="outlined"
          className={classes.button}
          startIcon={<Cancel />}
        >
          Delete
        </Button>
        <Box>
          <Button
            variant="outlined"
            onClick={() => setOpen(true)}
            className={classes.button}
            startIcon={<VisibilityIcon />}
          >
            Preview
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
        </Box>
      </div>
      <Preview anchors={anchors} open={open} setOpen={setOpen} />
    </div >
  );
}

export default DocumentSign;
