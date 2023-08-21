import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import { AddStudentComponent } from '../add-student/add-student.component';
import { UpdateStudentComponent } from '../update-student/update-student.component';
import { ViewStudentComponent } from '../view-student/view-student.component';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent {

  @Input() data: any;

  students: Student[] = [];
  student!: Student;

  constructor(private studentService: StudentService, private router: Router, public bsModalRef: BsModalRef, private formBuilder: FormBuilder, private modalService: BsModalService) { 

  }

  navBack(){
    this.router.navigate(['dashboard']);
  }
  studentForm!: FormGroup;

  ngOnInit() {

  }



 
  modalData: any;
  s: any;

  // bsModalRef!: BsModalRef;
  modalRef!: BsModalRef;
  fetchedData: any;
 

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe(
      () => {
        console.log('Student deleted successfully');
        this.close();
      },
      error => {
        console.log('Error occurred while deleting student:', error);
      }
    );
  }

  close() {
    this.bsModalRef.hide();
    this.router.navigate(['student']);
  }

}
