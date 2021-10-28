export interface CourseInterface{
    name: string;
    credits: number;
    description: string;
    prereq: Course;
}



export class Course {
    name: string = 
    credits: number;
    description: string;
    prereq: Course;
}
