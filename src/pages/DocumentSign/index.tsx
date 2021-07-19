import { DocumentDesign } from "@flynotes/fly-document";
import { Box, Breadcrumbs, Button, CircularProgress, Link, Typography } from "@material-ui/core";
import Cancel from '@material-ui/icons/Close';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import SaveIcon from '@material-ui/icons/Save';
import VisibilityIcon from '@material-ui/icons/Visibility';
import axios from "axios";
import { FC, useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { FieldLabelProps } from "../../../../flynotes-docusign/dist/lib/components/anchors";
import FieldLabel from "../../components/common/FieldLabel";
import StandardField from "../../components/common/StandardField";
import Preview from "../../components/Preview";
import { standardFields } from '../../constants/standard';
import { useStyles } from './styles';

const JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJhMTc0NGMxLWRiOTItNGM0Zi1iMDRiLTkxMjk5NjViMDI0ZSIsImlhdCI6MTYyNTgxMjI1OCwiZXhwIjoxNjMzNTg4MjU4fQ.P2N72xiJUnLCMSOQ-va1ql4V72htuhgT2cQBxRx78jc';

const attachmentClient = axios.create({
  baseURL: 'https://apiattachments.dev.myflynotes.com',
  headers: {
    Authorization: `JWT ${JWT}`
  }
})

const getAttachmentLink = async (file: any) => {
  const response = await attachmentClient.get('/attachment-link', {
    params: {
      key: file.attachment.s3FileKey,
      downloadName: file.attachment.distributionUrl
    }
  });
  return response.data;
}


function DocumentSign({ file }: any) {
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
    return (
      <Box display="flex" alignItems="center" justifyContent="center">
        <CircularProgress />
      </Box>
    );
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
            <Box height="calc(100vh - 185px - 65px - 140px)" overflow="auto">
              {standardFields.map((field) => (
                <StandardField key={field.displayName} {...field} />
              ))}
            </Box>
          </div>
          <Box width="calc(820px + 162px + 70px + 70px)">
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
              FieldLabel={FieldLabel as FC<FieldLabelProps>}
            />
          </Box>
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
              onClick={() => { setOpen(true) }}
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
        {open && <Preview anchors={anchors} open setOpen={setOpen} file={file} fileUrl={fileUrl} />}
      </div >
    </DndProvider>
  );
}

export default DocumentSign;
