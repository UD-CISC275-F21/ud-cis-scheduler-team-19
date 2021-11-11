import { Col, Card as BootstrapCard } from 'react-bootstrap';
import {Course} from '../interfaces/courses';


export function courseViewer({ course, reveal}:
    {course: Course, reveal: boolean}): JSX.Element {
        return <Col>
        <BootstrapCard>
            <BootstrapCard.Body>
                <BootstrapCard.Title> Course Viewer</BootstrapCard.Title>
                <BootstrapCard.Text>
                    <strong>Class ID</strong>: {course.prefix}
                </BootstrapCard.Text>
                {reveal && <BootstrapCard.Text>
                    <strong>Class Description</strong>:{course.description}
                    </BootstrapCard.Text>}
            </BootstrapCard.Body>
        </BootstrapCard>
        </Col>
    }