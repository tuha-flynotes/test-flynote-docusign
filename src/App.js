import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"; 
import DocumentSign from "./pages/DocumentSign";
import Home from "./pages/Home";
import "./App.css";

function App() {
  const [file, setFile] = React.useState();
  const handleSelectFile = (file) => {
    setFile(file?.file?.[0]);
  }
  return (
    <Router>
      <Switch>
        <Route path="/edit">
          <DocumentSign file={file} />
        </Route>
        <Route path="/">
          <Home onSetFile={handleSelectFile} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
