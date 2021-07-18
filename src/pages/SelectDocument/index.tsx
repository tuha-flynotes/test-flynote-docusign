import { useState, useEffect } from "react";
import { Box, CircularProgress, List, ListItem, ListItemText } from '@material-ui/core';
import { useStyles } from './styles';

interface IProps {
  onSelect: (file: any) => void;
  file: any;
}
export default function SelectDocument({ onSelect }: any): JSX.Element {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState<any[]>([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch('http://localhost:5000/file-document');
      const responseJson = await response.json();
      const { rows } = responseJson;
      return rows;
    }
    setLoading(true);
    getData()
      .then(setFiles)
      .then(() => setLoading(false));
  }, []);

  if (loading) return <CircularProgress />
  return (
    <Box className={classes.container}>
      <List>
        {
          files.map((file, index) => (
            <ListItem button key={file.id} onClick={() => onSelect(files[index])}>
              <ListItemText>{file.attachment.name}</ListItemText>
            </ListItem>
          ))
        }
      </List>
    </Box>
  )
}