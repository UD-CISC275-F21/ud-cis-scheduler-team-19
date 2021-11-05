import React from "react";
import logo from "./logo.svg";
import { Sidebar } from "./components/Sidebar";
import { Box } from "./components/DragnDrop";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { SemesterTable } from "./components/SemesterTable";
import { Row } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App(): JSX.Element {
    return (
        /* what the dog doin */
        <DndProvider backend={HTML5Backend}>
            <div className="App">
                <Sidebar></Sidebar>
                <Box></Box>
            </div>
        </DndProvider>
    );
}

export default App;
