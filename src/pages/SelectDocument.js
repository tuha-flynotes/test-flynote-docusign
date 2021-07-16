import { useState, useEffect } from "react";
import { CircularProgress, List, ListItem, ListItemText } from '@material-ui/core';

export default function SelectDocument({ onSelect }) {
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState([]);
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
    <List>
      {
        files.map((file, index) => (
          <ListItem key={file.id} onClick={() => onSelect(files[index])}>
            <ListItemText>{file.attachment.name}</ListItemText>
          </ListItem>
        ))
      }
    </List>
  )
}