import React from "react";
import { ControlPanel } from "./components/ControlPanel";
import { Box } from "./components/DragnDrop";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import COURSELIST from "./components/courselist.json";
import { useState } from "react";
import { Course } from "./interfaces/course";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App(): JSX.Element {
    const [schedule] = useState<Course[]>([]);
    const [allSchedules, setAllSchedules] = useState<Course[][]>([schedule]);
    const [visible, setVisible] = useState(false);
    const [ciscCourseList] = useState<Course[]>([]);
    const [mathCourseList] = useState<Course[]>([]);
    const [englCourseList] = useState<Course[]>([]);
    for(let i = 0; i<COURSELIST["CISC"].length; i++){
        const [tempList] = useState<Course[]>(Object.values(COURSELIST["CISC"][i]));
        if(ciscCourseList.length < COURSELIST["CISC"].length){
            ciscCourseList.push(tempList[0]);
        }
    }
    for(let i = 0; i<COURSELIST["MATH"].length; i++){
        const [tempList] = useState<Course[]>(Object.values(COURSELIST["MATH"][i]));
        if(mathCourseList.length < COURSELIST["MATH"].length){
            mathCourseList.push(tempList[0]);
        }
    }
    for(let i = 0; i<COURSELIST["ENGL"].length; i++){
        const [tempList] = useState<Course[]>(Object.values(COURSELIST["ENGL"][i]));
        if(englCourseList.length < COURSELIST["ENGL"].length){
            englCourseList.push(tempList[0]);
        }
    }
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="App">
                <ControlPanel ciscCourseList={ciscCourseList} mathCourseList={mathCourseList} englCourseList={englCourseList} allSchedules={allSchedules} setAllSchedules={setAllSchedules} visible={visible} setVisible={setVisible}></ControlPanel>
                <Box></Box>
            </div>
        </DndProvider>
    ); 
}

export default App;
