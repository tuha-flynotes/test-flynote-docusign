import { Box, Divider, IconButton, InputBase, Popover, Typography, ClickAwayListener } from '@material-ui/core';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import SearchIcon from '@material-ui/icons/Search';
import React, { ChangeEvent, MouseEvent, useMemo } from 'react';
import { useStyles } from './styles';

interface IUser {
  id: string | number;
  fullName: string;
  dob: string;
  email: string;
  code: string;
}
interface IProps {
  userId: string | number;
  users: IUser[];
  onChangeUser: (searchValue: string | number) => void;
  onSearchUser: (searchValue: string) => void;
}

function UserSelect({ userId, users, onChangeUser, onSearchUser }: IProps): JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState<EventTarget & HTMLElement | null>(null);
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const inputRef = React.useRef<HTMLInputElement>();
  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);
  const currentUser = useMemo(() => users.find((user: IUser) => user.id === userId), [userId, users])
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setOpen(!open);
    setAnchorEl(event.currentTarget);
  };
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { value } = e.target;
    onSearchUser(value);
  };
  const handleClickUser = (id: string | number) => () => {
    onChangeUser(id);
    setOpen(false);
  };
  const handleClickAway = () => {
    setOpen(false);
  };
  return (
    <div>
      <Box onClick={handleClick} className={classes.selectContainer}>
        <Box display="flex" alignItems="center">
          <Box className={classes.dot} />
          <Typography className={classes.selectText}>{currentUser?.fullName}</Typography>
        </Box>
        <ArrowDropDownOutlinedIcon />
      </Box>
      <Popover className={classes.popperContainer} open={open} anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <ClickAwayListener onClickAway={handleClickAway}>
          <Box className={classes.popper}>
            <Box className={classes.root}>
              <IconButton className={classes.iconButton} aria-label="search">
                <SearchIcon />
              </IconButton>
              <InputBase
                className={classes.input}
                placeholder="Search for patient"
                onChange={handleChange}
                onClick={() => inputRef.current?.focus()}
                ref={inputRef}
              />
            </Box>
            <Box height="230px" overflow="auto" >
              {users.map(user => (
                <React.Fragment key={user.id}>
                  <Box padding="15px" className={classes.userItem} onClick={handleClickUser(user.id)}>
                    <Box display="flex" alignItems="center">
                      <Typography className={classes.fullName}>{user.fullName}</Typography>
                      <Box className={classes.dob}>
                        <Typography className={`${classes.small} ${classes.lower}`}>DOB: </Typography>
                        <Typography className={`${classes.small} ${classes.dob}`}>{user.dob}</Typography>
                      </Box>
                    </Box>
                    <Box display="flex" alignItems="center">
                      <Box className={classes.email}>
                        <Typography className={`${classes.small} ${classes.lower}`}>Email: </Typography>
                        <Typography className={`${classes.small} ${classes.dob}`}>{user.email}</Typography>
                      </Box>
                      <Typography className={`${classes.small} ${classes.code}`}>{user.code}</Typography>
                    </Box>
                  </Box>
                  <Divider />
                </React.Fragment>
              ))}
            </Box>
          </Box>
        </ClickAwayListener>
      </Popover>
    </div>
  )
}

export default UserSelect

