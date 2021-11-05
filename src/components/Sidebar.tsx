import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { SemesterTable } from "./SemesterTable";
import { Row, Button } from "react-bootstrap";
import { findRenderedComponentWithType } from "react-dom/test-utils";

export function Sidebar(): JSX.Element {
    const [isSidebarActive, setIsSidebarActive] = useState(true);
    const TheSidebar = () => (
        <nav id="sidebar">
            <div className="sidebar-header">
                <h3>UD CISC Scheduler</h3>
            </div>
            <ul className="list-unstyled components">
                <p>Classes</p>
                <li className="active">
                    <a href="#ciscSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">CISC</a>
                    <ul className="collapse list-unstyled" id="ciscSubmenu">
                        <li>
                            aaa
                        </li>
                        <li>
                            bbb
                        </li>
                        <li>
                            ccc
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#mathSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">MATH</a>
                    <ul className="collapse list-unstyled" id="mathSubmenu">
                        <li>
                            <a href="#">aaa</a>
                        </li>
                        <li>
                            <a href="#">bbb</a>
                        </li>
                        <li>
                            <a href="#">ccc</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">Other</a>
                </li>
            </ul>
        </nav>
    );
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
                            <Button onClick={buttonHandler} type="button" id="sidebarCollapse" className="btn btn-info">
                                <i className="fas fa-align-left"></i>
                                <span>Toggle Sidebar</span>
                            </Button>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Grade Level</option>
                                <option value="1">Freshmen</option>
                                <option value="2">Sophomore</option>
                                <option value="3">Junior</option>
                                <option value="4">Senior</option>
                            </select>
                            <div className="main">
                                <h1>UD CIS Scheduler</h1>
                                <h4>Christopher Bao, Trent Littleton,Alex Daley</h4>
                                <SemesterTable></SemesterTable>
                            </div>

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