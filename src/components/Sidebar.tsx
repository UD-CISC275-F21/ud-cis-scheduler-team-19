import Dropdown from "react-bootstrap/Dropdown";
import FormControl from "react-bootstrap/FormControl";
import React, { useState } from "react";
import { Row,/* Col, */Button } from "react-bootstrap";
import { SemesterTable } from "./SemesterTable";
import { Course } from "../interfaces/course";
//import { findRenderedComponentWithType } from "react-dom/test-utils";

export function Sidebar(/*{ courseList, setCourseList }:*/ 
{
    courseList: Course[], setCourseList: (c: Course[]) => void
}): JSX.Element {
    //let index = 0;
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
                        <Dropdown.Item eventKey="1">aaa</Dropdown.Item>
                        <Dropdown.Item eventKey="2">bbb</Dropdown.Item>
                        <Dropdown.Item eventKey="3" active>
                            ccc
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="1">ddd</Dropdown.Item>
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
    function buttonHandler() {
        if(isSidebarActive){
            setIsSidebarActive(false);
        }else{
            setIsSidebarActive(true);
        }
    }
    return (
        <Row>
            <div className="wrapper">
                { isSidebarActive ? <TheSidebar /> : null }
                <div id="content">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <Row>
                                <Button onClick={buttonHandler} type="button" id="sidebarCollapse" className="btn btn-info">
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
                        <SemesterTable></SemesterTable>
                    </div>
                </Row>
            </div>
        </Row>
    );
}
