import React, { useState } from "react";
import { Button, Form, Modal, FloatingLabel } from "react-bootstrap";
import { Course } from "../interfaces/course";

export function CourseModal({course, visible, setVisible, semesterAdded, allSchedules}:
{
    course: Course,
    visible: boolean,
    setVisible: (b: boolean) => void,
    semesterAdded: number,
    allSchedules: Course[][]
}): JSX.Element {
    const [name, setName] = useState<string>(course.name);
    const semester = [];
    const [currentSemester, setCurrentSemester] = useState("");
    for(let i = 1; i <= semesterAdded; i++){
        semester.push(i);
    }
    function save() {
        course.name = name;
        setVisible(false);
        allSchedules[parseInt(currentSemester)-1].push(course);
    }

    const hide = () => setVisible(false);
    return (
        <Modal show={visible} onHide={hide}>
            <Modal.Header closeButton>
                <Modal.Title>{course.prefix}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="CourseForm.nameTextArea">
                        <Form.Label>Course Name</Form.Label>
                        <Form.Control as="textarea" rows={3}
                            value={name}
                            onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setName(ev.target.value)}/>
                    </Form.Group>
                    
                    <Form.Label>Add To Semester:</Form.Label>
                    <Form.Group className="mb-3" controlId="CourseForm.semesterSelection">
                        <FloatingLabel controlId="semesterSelect" label="">
                            <Form.Select aria-label="Semester selection" onChange={(ev: React.ChangeEvent<HTMLSelectElement>) => setCurrentSemester(ev.target.value)}>
                                <option>Add course to semester</option>
                                {semester.map((index) => 
                                    <option value={index} key={index}>{index}</option>
                                )}
                                
                            </Form.Select>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="CourseForm.descriptionCredits">
                        <Form.Label>Credits: {course.credits}</Form.Label>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="CourseForm.descriptionPrereq">
                        <Form.Label>Prerequisites: {course.prereq}</Form.Label>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="CourseForm.descriptionLimits">
                        <Form.Label>Limits: {course.limits}</Form.Label>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="CourseForm.descriptionBreadth">
                        <Form.Label>Breadth: {course.breadth}</Form.Label>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="CourseForm.descriptionTerms">
                        <Form.Label>Terms: {course.terms}</Form.Label>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="CourseForm.description">
                        <p>Course Description:</p>
                        <p>{course.description}</p>
                    </Form.Group>
                </Form>

            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={hide}>Close</Button>
                <Button variant="primary" onClick={save}>Save changes</Button>
            </Modal.Footer>
        </Modal>);
}