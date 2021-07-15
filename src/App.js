
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";
import DocumentSign from "./pages/DocumentSign";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <DocumentSign />
    </DndProvider>
  );
}

export default App;
