import React from "react";
//import logo from "./logo.svg";
import { Sidebar } from "./components/Sidebar";
import { Box } from "./components/DragnDrop";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import COURSELIST from "./components/courselist.json";
import { useState } from "react";
import { Course } from "./interfaces/course";
//import { SemesterTable } from "./components/SemesterTable";
//import { Row } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App(): JSX.Element {
    //const [schedule, setSchedule] = useState<Course[]>();
    const [courseList, setCourseList] = useState<Course[]>(Object.values(COURSELIST["CISC"][0]));
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="App">
                <Sidebar courseList={courseList} setCourseList={setCourseList}></Sidebar>
                <Box></Box>
            </div>
        </DndProvider>
    ); 
}

export default App;
