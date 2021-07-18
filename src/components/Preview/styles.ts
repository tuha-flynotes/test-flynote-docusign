import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  DialogContent: {
    display: 'flex',
    justifyContent: 'center'
  },
  dialogTitle: {
    display: 'flex',
    padding: '12px 24px',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
}));

export { useStyles };
