import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#EFEFEF',
  },
  standardContainer: {
    width: 200,
    backgroundColor: '#EFEFEF',
    margin: '30px 10px'
  },
  breadcrumbs: {
    height: '65px',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '290px',
  },
  link: {
    color: '#3F95E7'
  },
  bottomAction: {
    position: 'absolute',
    bottom: 0,
    width: 'calc(100vw - 290px - 290px)',
    height: '80px',
    background: 'white',
    display: 'flex',
    alignItems: 'center',
    padding: '0 290px',
    justifyContent: 'space-between'
  },
  button: {
    marginRight: 25,
    textTransform: 'none'
  },
  fileName: {
    color: '#3F95E7'
  }
}));

export { useStyles };
