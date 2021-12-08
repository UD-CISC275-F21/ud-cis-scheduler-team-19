import Dropdown from "react-bootstrap/Dropdown";
import FormControl from "react-bootstrap/FormControl";
import React, { useState } from "react";
import { Row,/* Col, */Button } from "react-bootstrap";
import { SemesterTable } from "./SemesterTable";
import { Course } from "../interfaces/course";
import { CourseModal } from "./CourseModal";
//import { findRenderedComponentWithType } from "react-dom/test-utils";

export function ControlPanel({ courseList, allSchedules, setAllSchedules, visible, setVisible }: 
{
    courseList: Course[],
    allSchedules: Course[][],
    setAllSchedules: (c: Course[][]) => void,
    visible: boolean,
    setVisible: (b: boolean) => void
}): JSX.Element {
    type CustomToggleProps = {
        children?: React.ReactNode;
        onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => unknown;
    };
    type CustomMenuProps = {
        children?: React.ReactNode;
        style?: React.CSSProperties;
        className?: string;
        labeledBy?: string;
    };
    const [isSidebarActive, setIsSidebarActive] = useState(true);
    const [semesterAdded, setSemesterAdded] = useState(1);
    const [currentCourse, setCurrentCourse] = useState<Course>(courseList[0]);
    const CustomToggle = React.forwardRef((props: CustomToggleProps, ref: React.Ref<HTMLAnchorElement>) => {
        return <a
            href=""
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                if (props.onClick){
                    props.onClick(e);
                }
            }}
        >
            {props.children}
            &#x25bc;
        </a>;
    });
    CustomToggle.displayName = "CustomToggle";
    const CustomMenu = React.forwardRef<HTMLInputElement>((props: CustomMenuProps, ref: React.Ref<HTMLDivElement>) => {
        const [value, setValue] = useState("");
        return (
            <div
                ref={ref}
                style={props.style}
                className={props.className}
                aria-labelledby={props.labeledBy}
            >
                <FormControl
                    autoFocus
                    className="mx-3 my-2 w-auto"
                    placeholder="Type to filter..."
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <ul className="list-unstyled">
                    {React.Children.toArray(props.children)}
                </ul>
            </div>
        );
    },
    );
    CustomMenu.displayName = "CustomMenu"; 

    function onClick(course: Course) {
        setCurrentCourse(course);
        setVisible(true);
    }
    
    function coursePrinter(): JSX.Element[] {
        const courses = [];
        let key: string;
        for(let i = 0; i < courseList.length; i++){
            key = (i+1).toString();
            courses.push(<Dropdown.Item onClick={() => onClick(courseList[i])} eventKey={key}>{courseList[i].prefix}</Dropdown.Item>);
        }
        return courses;
    }

    const TheSidebar = () => 
        <nav id="sidebar">
            <div className="sidebar-header">
                <h3>UD CISC Scheduler</h3>
            </div>
            <ul className="list-unstyled components">
                <p>Classes</p>
                <Dropdown>
                    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                        <div className="selection-title">
                            CISC
                        </div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu as={CustomMenu}>
                        {coursePrinter()}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components2">
                        <div className="selection-title">
                            MATH
                        </div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu as={CustomMenu}>
                        <Dropdown.Item eventKey="1">eee</Dropdown.Item>
                        <Dropdown.Item eventKey="2">fff</Dropdown.Item>
                        <Dropdown.Item eventKey="3" active>
                            ggg
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="1">hhh</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </ul>
        </nav>
    ;
    function sidebarHandler() {
        if(isSidebarActive){
            setIsSidebarActive(false);
        }else{
            setIsSidebarActive(true);
        }
    }

    function semesterHandler() {
        const semesters = [];
        let key: string;
        for(let i = 0; i < semesterAdded-1; i++){
            key = (i+1).toString();
            semesters.push(<SemesterTable schedule={allSchedules[i]} key={key}></SemesterTable>);
        }
        return semesters;
    }

    function modalHandler() {
        if(visible){
            return <CourseModal course={currentCourse} visible={visible} setVisible={setVisible} semesterAdded={semesterAdded} allSchedules={allSchedules}></CourseModal>;
        }
    }

    function addSemester(){
        setSemesterAdded(semesterAdded+1);
        allSchedules.push([]);
    }

    function removeSemester(){
        const newSchedules = [];
        setSemesterAdded(semesterAdded-1);
        for(let i = 0; i < semesterAdded-2; i++){
            newSchedules.push(allSchedules[i]);
        }
        setAllSchedules(newSchedules);
    }
    
    return (
        <Row>
            <div className="wrapper">
                { isSidebarActive ? <TheSidebar /> : null }
                <div id="content">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <Row>
                                <Button onClick={sidebarHandler} type="button" id="sidebarCollapse" className="btn btn-info">
                                    <i className="fas fa-align-left"></i>
                                    <span>Toggle Sidebar</span>
                                </Button>
                            </Row>
                        </div>
                    </nav>
                </div>
                <Row>
                    <div className="main">
                        <h1>UD CIS Scheduler</h1>
                        <h4>Christopher Bao, Trent Littleton, Alex Daley</h4>
                        <p>Welcome to the UD CIS Scheduler! Click on the add semester button to add your first semester and get started!</p> 
                        <p>-Select classes from the Sidebar; You can change the course name and choose which semester to add the course to a semester (Press Save Changes to apply)</p>
                        <p>-Keep clicking add semester to add more semester tables.</p>
                        <p>-Click remove semester to remove a table</p>
                        <p>-Course information is viewable when you click on one</p>
                        { semesterAdded ? semesterHandler() : null }
                        <Button onClick={addSemester} type="button" id="addsemesterbtn">
                            Add Semester
                        </Button>
                        <Button onClick={removeSemester} type="button" id="addsemesterbtn">
                            Remove Semester
                        </Button>
                        { visible ? modalHandler() : null}
                    </div>
                </Row>
            </div>
        </Row>
    );
}
