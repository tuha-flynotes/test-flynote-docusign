import { useState, useEffect } from "react";
import axios from "axios";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DocumentDesign } from "@flynotes/fly-document";
import StandardField from "../../components/common/StandardField";
import { standardFields } from '../../constants/standard';
import { Typography, Breadcrumbs, Link, Button, Box, CircularProgress } from "@material-ui/core";
import { useStyles } from './styles';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Cancel from '@material-ui/icons/Close';
import PenIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import SaveIcon from '@material-ui/icons/Save';
import Preview from "../../components/Preview";
import FieldLabel from "../../components/common/FieldLabel";

const JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJhMTc0NGMxLWRiOTItNGM0Zi1iMDRiLTkxMjk5NjViMDI0ZSIsImlhdCI6MTYyNTgxMjI1OCwiZXhwIjoxNjMzNTg4MjU4fQ.P2N72xiJUnLCMSOQ-va1ql4V72htuhgT2cQBxRx78jc';

const attachmentClient = axios.create({
  baseURL: 'https://apiattachments.dev.myflynotes.com',
  headers: {
    Authorization: `JWT ${JWT}`
  }
})

const getAttachmentLink = async (file) => {
  const response = await attachmentClient.get('/attachment-link', {
    params: {
      key: file.attachment.s3FileKey,
      downloadName: file.attachment.distributionUrl
    }
  });
  return response.data;
}


function DocumentSign({ file }) {
  const classes = useStyles();
  const [fileUrl, setFileUrl] = useState('');
  const [anchors, setAnchors] = useState(file.predefinedFields.fields || []);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAttachmentLink(file)
      .then(setFileUrl)
      .then(() => {
        setLoading(false);
      });
  }, [file.id]);

  if (loading) {
    return <CircularProgress />
  }


  const onSave = () => {
    async function setData() { 
      const { id, ...fileWithoutId } = file;
      const response = await fetch(`http://localhost:5000/file-document/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...fileWithoutId,
          predefinedFields: {
            fields: anchors
          }
        })
      });
      const responseJson = await response.json();
      return responseJson;
    }
    setData().then(console.log)
  }

  return (
    <DndProvider backend={HTML5Backend}>
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
          <Typography className={classes.fileName}>
            {file.attachment.name}
          </Typography>
          {standardFields.map((field) => (
            <StandardField key={field.displayName} {...field} />
          ))}
        </div>
          <DocumentDesign
            anchors={anchors}
            onChangeAnchors={setAnchors}
            fileUrl={fileUrl}
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
            onClick={() =>{ setOpen(true)}}
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
            onClick={onSave}
          >
            Save
          </Button>
        </Box>
      </div>
      {open && <Preview anchors={anchors} open setOpen={setOpen} />}
    </div >
    </DndProvider>
  );
}

export default DocumentSign;
