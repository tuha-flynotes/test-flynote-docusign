import { Box, Fade, Paper, Popper, Typography } from '@material-ui/core';
import React, { MouseEvent } from 'react';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';

import { useStyles } from './styles';

function UserSelect({ }) {
  const [anchorEl, setAnchorEl] = React.useState<EventTarget & HTMLElement | null>(null);
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setOpen(!open);
    setAnchorEl(event.currentTarget);
  };
  return (
    <div>
      <Box onClick={handleClick} className={classes.selectContainer}>
        <Box display="flex" alignItems="center">
          <Box className={classes.dot} />
          <Typography className={classes.selectText}>Kien Trung</Typography>
        </Box>
        <ArrowDropDownOutlinedIcon />
      </Box>
      <Popper className={classes.popperContainer} open={open} anchorEl={anchorEl} placement="bottom-start" transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper className={classes.popper}>
              <Box>123</Box>
            </Paper>
          </Fade>
        )}
      </Popper>
    </div>
  )
}

export default UserSelect

