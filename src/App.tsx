
import Box from '@material-ui/core/Box';
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Stepper from "@material-ui/core/Stepper";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from 'react';
import DocumentSign from "./pages/DocumentSign";
import SelectDocument from './pages/SelectDocument';

import "./App.css";


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function App() {
  const STEPS = [
    "Select document",
    "Create template"
  ];
  const CONTENT_COMPONENTS = [SelectDocument, DocumentSign];
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState<any>(0);
  const [file, setFile] = useState({});
  const ContentComponent = CONTENT_COMPONENTS[activeStep];
  const handleSelect = (selectedFile: any) => {
    setFile(selectedFile);
    setActiveStep(1);
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {STEPS.map((label, index) => (
          <Step
            key={label}
            onClick={() => setActiveStep(index)}
            style={{ cursor: "pointer" }}
          >
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box height="90vh" width="100%">
        <ContentComponent file={file} onSelect={handleSelect} />
      </Box>
    </div>
  );
}

export default App;
