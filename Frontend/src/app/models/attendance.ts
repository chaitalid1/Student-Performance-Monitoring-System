export class Attendance {
    // private Long id;
    // private Long studentId;
    // private boolean isPresent;
    // private String subject;
    // private int lectureNo;

    id: number;
    studentId: number;
    isPresent: boolean;
    subject: string;
    lectureNo: number;

    constructor(){
        this.id = 0;
        this.studentId = 0;
        this.isPresent = false;
        this.subject = "";
        this.lectureNo = 0;

    }
    
}
