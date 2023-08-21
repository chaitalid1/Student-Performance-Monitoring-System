
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from 'src/app/models/student';
import { Router } from '@angular/router';
import { AttendanceService } from 'src/app/services/attendance.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent {
  students: Student[] = [];
  subject: string = '';
  lectureNo: number = 0;
  showAttendance = false;
  showMessageIndex: number | null = null;
  buttonDisabled = false;
  totalAttendanceCount: number =  0;
  totalPresentCount: number = 0;

  constructor(private http: HttpClient, private router: Router, private attendanceService: AttendanceService) {
    this.attendanceService.getTotalAttendanceCount(1, 'DMW').subscribe(
      count => this.totalAttendanceCount = count
    );

    this.attendanceService.getTotalPresentAttendanceCount(1, 'DMW').subscribe(
      count => this.totalPresentCount = count
    );
   }

  ngOnInit() {
    this.fetchStudents();
    
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
