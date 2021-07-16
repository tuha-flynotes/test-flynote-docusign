import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  box: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px'
  },
  button: {
    textTransform: 'none'
  }
}));

export { useStyles };
