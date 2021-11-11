import React from "react";
import { Row, Table } from "react-bootstrap";

export function SemesterTable(): JSX.Element {
    return <Row>
        <Table className="table table-striped">
            <thead>
                <tr>
                    <th scope="row">Course</th>
                    <th scope="row"></th>
                    <th scope="row">Credits</th>
                </tr>
            </thead>            
            <tbody>
                <tr>
                    <th scope="col">Cisc 108</th>
                    <th scope="col">Math 241</th>
                    <th scope="col">Breath 1</th>
                </tr>
                <tr>
                    <th scope="col">placeholder</th>
                    <th scope="col">placeholder</th>
                    <th scope="col">placeholder</th>
                </tr>
                <tr>
                    <th scope="col">placeholder</th>
                    <th scope="col">placeholder</th>
                    <th scope="col">placeholder</th>
                </tr>
            </tbody>
        </Table>
    </Row>;
}