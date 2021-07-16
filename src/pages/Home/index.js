import { Box, Button } from '@material-ui/core';
import React from 'react';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { useHistory } from 'react-router-dom';
import UploadDialog from '../../components/Upload';
import { useStyles } from './styles';

function Home({ onSetFile }) {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const handleUploadFile = (file) => {
    onSetFile?.(file);
    history.push('/edit');
  }
  return (
    <Box className={classes.box}>
      <Button
        startIcon={<CloudUploadIcon />}
        variant="outlined"
        color="primary"
        className={classes.button}
        onClick={() => setOpen(true)}
      >
        Upload doc
      </Button>
      {open && (<UploadDialog open setOpen={setOpen} onUploadFile={handleUploadFile} />)}
    </Box>
  )
}

export default Home
