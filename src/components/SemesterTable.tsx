import React from "react";
import { Row, Table } from "react-bootstrap";
import { Course } from "../interfaces/course";

export function SemesterTable({ schedule }:
{
    schedule: Course[]
}): JSX.Element {
    return <Row>
        <Table className="table table-striped">
            <thead>
                <tr>
                    <th scope="row">Course</th>
                    <th scope="row">Description</th>
                    <th scope="row">Credits</th>
                    <th scope="row">Prerequisites</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {schedule[0] != null && <th>{schedule[0].prefix}</th>}
                    {schedule[0] != null && <th>{schedule[0].name}</th>}
                    {schedule[0] != null && <th>{schedule[0].credits}</th>}
                    {schedule[0] != null && <th>{schedule[0].prereq}</th>}
                </tr>
                <tr>
                    {schedule[1] != null && <th>{schedule[1].prefix}</th>}
                    {schedule[1] != null && <th>{schedule[1].name}</th>}
                    {schedule[1] != null && <th>{schedule[1].credits}</th>}
                    {schedule[0] != null && <th>{schedule[1].prereq}</th>}
                </tr>
                <tr>
                    {schedule[2] != null && <th>{schedule[2].prefix}</th>}
                    {schedule[2] != null && <th>{schedule[2].name}</th>}
                    {schedule[2] != null && <th>{schedule[2].credits}</th>}
                    {schedule[0] != null && <th>{schedule[2].prereq}</th>}
                </tr>
                <tr>
                    {schedule[3] != null && <th>{schedule[3].prefix}</th>}
                    {schedule[3] != null && <th>{schedule[3].name}</th>}
                    {schedule[3] != null && <th>{schedule[3].credits}</th>}
                    {schedule[0] != null && <th>{schedule[3].prereq}</th>}
                </tr>
                <tr>
                    {schedule[4] != null && <th>{schedule[4].prefix}</th>}
                    {schedule[4] != null && <th>{schedule[4].name}</th>}
                    {schedule[4] != null && <th>{schedule[4].credits}</th>}
                    {schedule[0] != null && <th>{schedule[4].prereq}</th>}
                </tr>
            </tbody>
        </Table>
    </Row>;
}