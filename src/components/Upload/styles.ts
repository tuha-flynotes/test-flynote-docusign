import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  dialogTitle: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '24px',
    textAlign: 'center',
    color: '#333333',
  },
  dialogContent: {
    padding: '8px 50px'
  },
  dialogAction: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 35
  },
  button: {
    background: '#3F95E7',
    textTransform: 'none',
    width: 200,
    height: 47
  }
}));

export { useStyles };
