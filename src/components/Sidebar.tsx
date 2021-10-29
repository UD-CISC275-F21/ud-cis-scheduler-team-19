import React, { useState } from "react";
import { SemesterTable } from "./SemesterTable";
import { Row, Button } from "react-bootstrap";

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
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Home</a>
                    <ul className="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <a href="#">placeholder</a>
                        </li>
                        <li>
                            <a href="#">placeholder</a>
                        </li>
                        <li>
                            <a href="#">placeholder</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">placeholder</a>
                </li>
                <li>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
                    <ul className="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <a href="#">placeholder</a>
                        </li>
                        <li>
                            <a href="#">placeholder</a>
                        </li>
                        <li>
                            <a href="#">placeholder</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">placeholder</a>
                </li>
                <li>
                    <a href="#">Contact</a>
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
                            <div className="main">
                                <h1>UD CIS Scheduler</h1>
                                <h4>Christopher Bao, Trent Littleton</h4>
                                <SemesterTable></SemesterTable>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </Row>
    );
}