import { Box, IconButton, Typography } from '@material-ui/core';
import React from 'react';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

import { useStyles } from "./styles";

function PendingItem({ file, onDelete }) {
  const classes = useStyles();
  const fileInfo = React.useMemo(() => {
    const currentFile = file?.file?.[0];
    return {
      fileName: currentFile.name,
      lastModifyDate: currentFile.lastModifiedDate.toDateString()
    }
  }, [file]);
  return (
    <Box className={classes.box} display="flex">
      <Box className={classes.preview} width="90px" height="70px" opacity={0.5} borderRadius="10px" />
      <Box display="flex" flexDirection="column" padding="20px" justifyContent="center">
        <Typography className={classes.fileName}>{fileInfo.fileName}</Typography>
        <Typography className={classes.fileDate}>{fileInfo.lastModifyDate}</Typography>
      </Box>
      <IconButton className={classes.cancelButton} onClick={onDelete}>
        <CancelOutlinedIcon className={classes.icon}/>
      </IconButton>
    </Box>
  )
}

export default PendingItem

