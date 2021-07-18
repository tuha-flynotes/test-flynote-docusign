import { Box, IconButton, Typography } from '@material-ui/core';
import React from 'react';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

import { useStyles } from "./styles";

function PendingItem({ file, onDelete }: { file: File, onDelete: () => void }): JSX.Element {
  const classes = useStyles();
  const fileInfo = React.useMemo(() => {
    return {
      fileName: file.name,
      lastModifyDate: new Date(file.lastModified).toDateString()
    }
  }, [file]);
  return (
    <Box className={classes.box} display="flex">
      <Box className={classes.preview} width="90px" height="70px" borderRadius="10px" />
      <Box display="flex" flexDirection="column" padding="20px" justifyContent="center">
        <Typography className={classes.fileName}>{fileInfo.fileName}</Typography>
        <Typography className={classes.fileDate}>{fileInfo.lastModifyDate}</Typography>
      </Box>
      <IconButton className={classes.cancelButton} onClick={onDelete}>
        <CancelOutlinedIcon className={classes.icon} />
      </IconButton>
    </Box>
  )
}

export default PendingItem

