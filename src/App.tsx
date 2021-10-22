import React from "react";
import logo from "./logo.svg";
import { SemesterTable } from "./components/SemesterTable";
import { Sidebar } from "./components/Sidebar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <Sidebar></Sidebar>
            <h1>UD CIS Scheduler</h1>
            <h4>Christopher Bao, Trent Littleton</h4>
            <SemesterTable></SemesterTable>
        </div>
    );
}

export default App;
