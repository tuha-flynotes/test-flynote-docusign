import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  box: {
    background: '#FBFBFB',
    border: '1px solid #CBCBCB',
    boxSizing: 'border-box',
    borderRadius: '10px',
    marginTop: 24,
    width: '45%',
    position: 'relative'
  },
  preview: {
    backgroundColor: "#E9E9E9",
    opacity: 0.5
  },
  fileName: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '10px',
    lineHeight: '15px',
    /* identical to box height */
    display: 'flex',
    alignItems: 'center',
    color: '#000000',
  },
  fileDate: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '10px',
    lineHeight: '15px',
    /* identical to box height */
    display: 'flex',
    alignItems: 'center',
    color: '#A4A4A4',
  },
  cancelButton: {
    position: 'absolute',
    top: '-12px',
    right: '-12px',
    background: 'white',
    padding: '0'
  },
  icon: {
    color: '#C6C6C6'
  }
}));

export { useStyles };
