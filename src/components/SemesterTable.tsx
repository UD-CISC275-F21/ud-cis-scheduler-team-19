import React from "react";
import { Row, Table, Button } from "react-bootstrap";
import { Course } from "../interfaces/course";

export function SemesterTable({ schedule, allSchedules, index, setIsRemoved }:
{
    schedule: Course[],
    allSchedules: Course[][],
    index: number
    setIsRemoved: (b: boolean) => void
}): JSX.Element {
    function calcCredits(){
        let credits = 0;
        for(let i = 0; i < 5; i++){
            if (schedule[i] != null){
                credits += parseInt(schedule[i].credits);
            }
        }
        return credits;
    }

    function onClick(id: number){
        const course = schedule[id];
        schedule = schedule.filter(obj => obj !== course);
        allSchedules[index] = allSchedules[index].filter(obj => obj !== course);
        setIsRemoved(true);
    }
    return <Row>
        <Table className="table table-striped">
            <thead>
                <tr>
                    <th scope="row">Course</th>
                    <th scope="row">Description</th>
                    <th scope="row">Credits</th>
                    <th scope="row">Prerequisites</th>
                    <th scope="row">Remove</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {schedule[0] != null && <th>{schedule[0].prefix}</th>}
                    {schedule[0] != null && <th>{schedule[0].name}</th>}
                    {schedule[0] != null && <th>{schedule[0].credits}</th>}
                    {schedule[0] != null && <th>{schedule[0].prereq}</th>}
                    {schedule[0] != null && <th><Button id="0" className="btn btn-danger" onClick={() => onClick(0)}>Remove</Button></th>}
                </tr>
                <tr>
                    {schedule[1] != null && <th>{schedule[1].prefix}</th>}
                    {schedule[1] != null && <th>{schedule[1].name}</th>}
                    {schedule[1] != null && <th>{schedule[1].credits}</th>}
                    {schedule[1] != null && <th>{schedule[1].prereq}</th>}
                    {schedule[1] != null && <th><Button id="1" className="btn btn-danger" onClick={() => onClick(1)}>Remove</Button></th>}
                </tr>
                <tr>
                    {schedule[2] != null && <th>{schedule[2].prefix}</th>}
                    {schedule[2] != null && <th>{schedule[2].name}</th>}
                    {schedule[2] != null && <th>{schedule[2].credits}</th>}
                    {schedule[2] != null && <th>{schedule[2].prereq}</th>}
                    {schedule[2] != null && <th><Button id="2" className="btn btn-danger" onClick={() => onClick(2)}>Remove</Button></th>}
                </tr>
                <tr>
                    {schedule[3] != null && <th>{schedule[3].prefix}</th>}
                    {schedule[3] != null && <th>{schedule[3].name}</th>}
                    {schedule[3] != null && <th>{schedule[3].credits}</th>}
                    {schedule[3] != null && <th>{schedule[3].prereq}</th>}
                    {schedule[3] != null && <th><Button id="3" className="btn btn-danger" onClick={() => onClick(3)}>Remove</Button></th>}
                </tr>
                <tr>
                    {schedule[4] != null && <th>{schedule[4].prefix}</th>}
                    {schedule[4] != null && <th>{schedule[4].name}</th>}
                    {schedule[4] != null && <th>{schedule[4].credits}</th>}
                    {schedule[4] != null && <th>{schedule[4].prereq}</th>}
                    {schedule[4] != null && <th><Button id="4" className="btn btn-danger" onClick={() => onClick(4)}>Remove</Button></th>}
                </tr>
            </tbody>
        </Table>
        <p>Total Credits: {calcCredits()}</p>
    </Row>;
}