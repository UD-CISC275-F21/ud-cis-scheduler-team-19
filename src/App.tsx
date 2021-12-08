import React from "react";
//import logo from "./logo.svg";
import { ControlPanel } from "./components/ControlPanel";
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
    const [schedule] = useState<Course[]>([]);
    const [allSchedules, setAllSchedules] = useState<Course[][]>([schedule]);
    const [visible, setVisible] = useState(false);
    const [courseList] = useState<Course[]>([]);
    for(let i = 0; i<COURSELIST["CISC"].length; i++){
        const [tempList] = useState<Course[]>(Object.values(COURSELIST["CISC"][i]));
        if(courseList.length < COURSELIST["CISC"].length){
            courseList.push(tempList[0]);
        }
    }
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="App">
                <ControlPanel courseList={courseList} allSchedules={allSchedules} setAllSchedules={setAllSchedules} visible={visible} setVisible={setVisible}></ControlPanel>
                <Box></Box>
            </div>
        </DndProvider>
    ); 
}

export default App;
