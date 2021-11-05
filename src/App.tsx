import React from "react";
import logo from "./logo.svg";
import { Sidebar } from "./components/Sidebar";
import { SemesterTable } from "./components/SemesterTable";
import { Row } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <Sidebar></Sidebar>
        </div>
    );
}

export default App;
