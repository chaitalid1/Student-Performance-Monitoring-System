export class Subjects {

    courseName: string;
    courseCode: string;
    credits: number;
    description: string;
    department: string;
    semester: string;
    staff: string;
    subjectId: number;

    constructor(){
        this.description = '',
        this.courseName='',
        this.courseCode='',
        this.department='',
        this.credits=0,
        this.semester='',
        this.staff='',
        this.subjectId = 0
    }
}
