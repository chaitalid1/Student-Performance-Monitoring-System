import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from 'src/app/models/student';
import { Router } from '@angular/router';
import { AttendanceService } from 'src/app/services/attendance.service';
import { Subscriber } from 'rxjs';
import { StudentService } from 'src/app/services/student.service';
import { SubjectsService } from 'src/app/services/subjects.service';
import { Subjects } from 'src/app/models/subjects';
import { Marks } from 'src/app/models/marks';
import { MarksService } from 'src/app/services/marks.service';
import { Attendance } from 'src/app/models/attendance';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ViewStudentComponent } from '../student-operations/view-student/view-student.component';
import { GenerateReportsComponent } from '../generate-reports/generate-reports.component';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  modalRef!: BsModalRef;

  students: Student[] = [];
  subject: string = '';
  lectureNo: number = 0;
  showAttendance = false;
  showMessageIndex: number | null = null;
  buttonDisabled = false;
  subjects: Subjects[] = [];
  marks: Marks[] = [];
  attendance: Attendance[] = [];

  totalAttendanceCount: number =  0;
  totalPresentCount: number = 0;
  overallAttendanceCount: number = 0;
  overallPresentCount: number = 0;

  subjectAttendanceCount:number = 0;
  TtotalSubjectAttendanceCount:number = 0;

  totalPercent: number = 0;
  subjectPercent: number =0;

  constructor(private http: HttpClient, private router: Router, private attendanceService: AttendanceService,
    private subjectsService: SubjectsService, private studentService: StudentService, private marksService: MarksService, private modalService: BsModalService) { }

  ngOnInit() {


    this.loadStudents();
    this.getSubjects();
    this.getMarks();
    this.getAttendance();  




    
  }


  



  marksAndSubjects: JSON[] = [];


  getStudentByStudentId(studentId: number){
    const url = `${'http://localhost:8080/api/student'}/${studentId}`;
    this.http.get<Student[]>(url).subscribe(
      data => this.students = data,
      error => console.log(error)
    );
  }

  fetchSubjectsNames() {
    this.http.get<Subjects[]>('http://localhost:8080/api/subject/getSubjectNames').subscribe(
      data => this.subjects = data,
      error => console.log(error)
    );
  }

  reportCourseCode: string[] = [];
  reportCourseName: string[] = [];
  reportMarksObtained: number[]=[];
  reportTotalMarks:number= 100;
  displayReport= false;
  marksPercent: number = 0;
  totalMarks: number=0;
  
  // generateReport(studentId: number, present: boolean, i: number){

  //   this.getStudentByStudentId(studentId);
  //   // this.getAttendanceByStudentId(studentId);
  //   this.getMarksByStudentId(studentId);
  //   this.getSubjects();
  //   this.showMessage(i);
  //   // this.calculateAttendance(studentId);

  //   // this.attendanceService.getOverallAttendanceCount(studentId).subscribe(
  //   //   count1 => 
  //   //     this.overallAttendanceCount = count1
      
  //   // );

  //   // this.attendanceService.getOverallPresentAttendanceCount(studentId).subscribe(
  //   //   count2 => 
  //   //     this.overallPresentCount = count2
      
  //   // );

  //   // // this.calculateTotalPercent();
    
  //   // this.totalPercent = this.calculateTotalPercent();

  //   // if (this.overallAttendanceCount && this.overallPresentCount) {
  //   //   this.totalPercent = (this.overallPresentCount / this.overallAttendanceCount) * 100;
  //     // console.log(this.totalPercent);
  //   // }
    

  //   if(this.displayReport==false){
  //     this.displayReport=true;
  //   }
  //   else
  //   this.displayReport=false;

  //   this.totalMarks = 0;

  //   for(let i=0; i<this.marks.length; i++){
  //     this.totalMarks += Number(this.marks[i].marks);
  //   }
  //   this.marksPercent = (this.totalMarks/(this.marks.length*100))*100;

  //   this.totalPercent = this.calculateAttendance(studentId);


    


  // }

  modalData: any;
  data!: Student;
  data2!: Marks[];
  data3!: any;
  data4!: any;
  data5!: any;


  generateReport(studentId: number){

    this.getStudentByStudentId(studentId);
    this.getMarksByStudentId(studentId);
    this.getSubjects();
    this.getAttendanceByStudentId(studentId);

    this.fetchData1(studentId);
    this.fetchData2(studentId);
    this.fetchData3(studentId);
    this.fetchData4(studentId);



    this.totalMarks = 0;

    for(let i=0; i<this.marks.length; i++){
      this.totalMarks += Number(this.marks[i].marks);
    }
    this.marksPercent = (this.totalMarks/(this.marks.length*100))*100;

    this.totalPercent = this.calculateAttendance(studentId);

    this.data5 = (this.data3 / this.data4)*100;


    // this.studentService.getStudentById(studentId).subscribe((s) => {
    //   this.fetchedData = s;
    //    this.modalRef = this.modalService.show(GenerateReportsComponent, {
    //      initialState: {
    //        data: this.fetchedData,
    //        data1: this.fetchedData1,
    //     },
    //   });

    // });

    const config = {
      initialState: {
        data: this.data,
        data2: this.data2,
        data3: this.data3,
        data4: this.data4,
        data5: this.data5
      }
    };
    this.modalRef = this.modalService.show(GenerateReportsComponent, config);



  }

  fetchData1(studentId: number) {
    this.studentService.getStudentById(studentId).subscribe(
      (result: Student) => {
        this.data = result;
      },
      (error) => {
        console.error('Error fetching data from API1:', error);
      }
    );
  }

  fetchData2(studentId: number) {
    this.marksService.getMarksById(studentId).subscribe(
      (result: Marks[]) => {
        this.data2 = result;
      },
      (error) => {
        console.error('Error fetching data from API2:', error);
      }
    );
  }

  fetchData3(studentId: number) {
    this.attendanceService.getOverallPresentAttendanceCount(studentId).subscribe(
      (result: number) => {
        this.data3 = result;
      },
      (error) => {
        console.error('Error fetching data from API1:', error);
      }
    );
  }

  fetchData4(studentId: number) {
    this.attendanceService.getOverallAttendanceCount(studentId).subscribe(
      (result: number) => {
        this.data4 = result;
      },
      (error) => {
        console.error('Error fetching data from API1:', error);
      }
    );
  }



  
  bsModalRef!: BsModalRef;
  // modalRef!: BsModalRef;
  fetchedData: any;
  fetchedData1: any;
  fetchedData2: any;




  viewDetails(studentId: number){
    this.studentService.getStudentById(studentId).subscribe((data) => {
      this.fetchedData = data;
      this.modalRef = this.modalService.show(ViewStudentComponent, {
        initialState: {
          data: this.fetchedData,
        },
      });
    });
  }

  calculateAttendance(studentId: number){
    this.attendanceService.getOverallAttendanceCount(studentId).subscribe(
      count1 => {
        this.overallAttendanceCount = count1;
        this.calculateTotalPercent();
      } 
    );

    this.attendanceService.getOverallPresentAttendanceCount(studentId).subscribe(
      count2 => {
        this.overallPresentCount = count2;
        this.calculateTotalPercent();

      }
    );
    this.totalPercent = this.calculateTotalPercent();
    console.log(this.totalPercent);
    return this.totalPercent;

  }

  getAttendanceByStudentId(studentId: number){
    const url = `${'http://localhost:8080/api/attendance'}/${studentId}`;
    this.http.get<Attendance[]>(url).subscribe(
      data => this.attendance = data,
      error => console.log(error)
    );
  }

  getMarksByStudentId(studentId: number){
    const url = `${'http://localhost:8080/api/marks/students'}/${studentId}`;
    this.http.get<Marks[]>(url).subscribe(
      data => this.marks = data,
      error => console.log(error)
    );
  }


  calculateSubjectPercent() {
    if (this.totalAttendanceCount && this.totalPresentCount) {
      this.subjectPercent = (this.totalPresentCount / this.totalAttendanceCount) * 100;
      console.log(this.subjectPercent);
    }
  }
  
  calculateTotalPercent(): number {
    if (this.overallAttendanceCount && this.overallPresentCount) {
      this.totalPercent = (this.overallPresentCount / this.overallAttendanceCount) * 100;
      console.log(this.totalPercent);
    }
    return this.totalPercent;
  }

  loadStudents() {
    this.studentService.getStudents().subscribe(
      students => {
        this.students = students;
      },
      error => {
        console.log('Error occurred while fetching students:', error);
      }
    );
  }

  getMarks() {
    this.marksService.getMarks().subscribe(
      marks => {
        this.marks = marks;
      },
      error => {
        console.log('Error occurred while fetching students:', error);
      }
    );
  }

  getAttendance() {
    this.attendanceService.getAllAttendance().subscribe(
      attendance => {
        this.attendance = attendance;
      },
      error => {
        console.log('Error occurred while fetching students:', error);
      }
    );
  }

  getSubjects() {
    this.subjectsService.getSubjects().subscribe(
      subject => {
        this.subjects = subject;
      },
      error => {
        console.log(error);
      }
    );
  }

  showAttendanceStatus(){
    if(this.showAttendance==false)
    this.showAttendance=true;
    else
    this.showAttendance=false;
  }

  fetchStudents() {
    this.http.get<any[]>('http://localhost:8080/api/attendance/students').subscribe(
      data => this.students = data,
      error => console.log(error)
    );
    
  }

  messages: string[] = [];
  showingMessages: boolean[] = [];

  markAttendance(studentId: number, present: boolean, subject: string, lectureNo: number, i: number) {
    if(subject=='' && lectureNo == 0){
      alert("Please enter subject and lecture no.")
    }
    else if (subject==''){
      alert("Please enter subject")
    }
    else if (lectureNo==0){
      alert("Please enter lecture no.")
    }
    else{
      const data = {
        lectureNo,
        subject,
        studentId,
        present 
      };
      
  
      this.http.post('http://localhost:8080/api/attendance/add', data).subscribe(
        () => console.log('Attendance marked successfully.'),
        error => console.log(error)
      );
    
        this.showMessage(i);
        
      }
    

    }

    navBack(){
      this.router.navigate(['dashboard']);
    }
  

    // buttonDisabled: boolean[] = [false];
  
    showMessage(index: number) {
      this.showingMessages[index] = true;
      this.messages[index] = 'Attendance updated!';
      // this.buttonDisabled = true;
    }



    
}












// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';

// interface Student {
//   studentId: number;
//   firstName: string;
//   present: boolean;
// }

// @Component({
//   selector: 'app-attendance',
//   templateUrl: './attendance.component.html',
//   styleUrls: ['./attendance.component.css']
// })
// export class AttendanceComponent {
//   students: Student[] = [];

//   constructor(private http: HttpClient, private router: Router) { }

//   navBack(){
//     this.router.navigate(['dashboard']);
//   }

//   ngOnInit() {
//     this.fetchStudents();
//   }

//   fetchStudents() {
//     this.http.get<any[]>('http://localhost:8080/api/students').subscribe(
//       data => this.students = data,
//       error => console.log(error)
//     );
//   }

//   markAttendance(studentId: number, isPresent: boolean) {
//     const data = {
//       studentId: studentId,
//       isPresent: isPresent
//     };

//     this.http.post('http://localhost:8080/api/attendance', data).subscribe(
//       () => console.log('Attendance marked successfully.'),
//       error => console.log(error)
//     );
//   }
// }



// // import { HttpClient } from '@angular/common/http';
// // import { Component, OnInit } from '@angular/core';
// // import { Router } from '@angular/router';
// // import { AttendanceService } from 'src/app/services/attendance.service';


// // interface Student {
// //   studentId: number;
// //   firstName: string;
// //   present: boolean;
// // }

// // @Component({
// //   selector: 'app-attendance',
// //   templateUrl: './attendance.component.html',
// //   styleUrls: ['./attendance.component.css']
// // })
// // // export class AttendanceComponent {
// // // attendance: any;

// // //   constructor(private attendanceService: AttendanceService, private router: Router) { }

//   // navBack(){
//   //   this.router.navigate(['dashboard']);
//   // }
// // // }



// // // @Component({
// // //   selector: 'app-attendance',
// // //   template: `
// // //     <h2>Attendance</h2>
// // //     <table>
// // //       <thead>
// // //         <tr>
// // //           <th>ID</th>
// // //           <th>Name</th>
// // //           <th>Present</th>
// // //         </tr>
// // //       </thead>
// // //       <tbody>
// // //         <tr *ngFor="let student of students">
// // //           <td>{{ student.studentId }}</td>
// // //           <td>{{ student.firstName }}</td>
// // //           <td><input type="checkbox" [(ngModel)]="student.present" (change)="updateAttendance()"></td>
// // //         </tr>
// // //       </tbody>
// // //     </table>
// // //   `,
// // // })
// // export class AttendanceComponent implements OnInit {
// //   students: Student[] = [];

// //   constructor(private http: HttpClient, private router: Router) {}

// //   navBack(){
// //     this.router.navigate(['dashboard']);
// //   }

// //   ngOnInit() {
// //     this.fetchStudents();
// //   }

// //   fetchStudents() {
// //     this.http.get<Student[]>('http://localhost:8080/api/student/getAll').subscribe((students) => {
// //       this.students = students;
// //     });
// //   }

// //   updateAttendance(): void {
// //     const presentStudents = this.students.filter((student) => student.present);
// //     const presentStudentIds = presentStudents.map((student) => student.studentId);

// //     this.http
// //       .put('/api/attendance', { studentIds: presentStudentIds })
// //       .subscribe(() => {
// //         console.log('Attendance updated successfully!');
// //       });
// //   }
// // }
