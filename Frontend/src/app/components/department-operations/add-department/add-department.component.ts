import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Department } from 'src/app/models/department';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit{
  departments: Department[] = [];

  students: any;
  showAddDepartment = false;
  deptCreated= false;
  showUpdateDepartment = false;

  department : Department = {hod:'',  staffCount: 0,  phone: '',  email: '',  description:'',  deptId:0,  deptName: ''};

  hod = '';
  staffCount = 0;
  phone = '';
  email = '';
  description = '';
  deptId = 0;
  deptName = '';

  id = 0;

  constructor(private modalService: BsModalService, public bsModalRef: BsModalRef, private departmentService: DepartmentService, private router: Router, private formBuilder: FormBuilder) { 

  }

  deptForm!: FormGroup;



  close() {
    this.bsModalRef.hide();
    this.router.navigate(['department'])
  }
  
 

  navBack(){
    this.router.navigate(['dashboard']);
  }

  ngOnInit() {
    this.deptForm = this.formBuilder.group({
      hod: [null, Validators.required],
      staffCount: [null, Validators.required],
      email: [null, Validators.required],
      description: [null, Validators.required],
      phone: [null, Validators.required],
      deptName: [null, Validators.required],
      deptId: [null, Validators.required],
      
    });
    // this.getDepartments();
  }



  addDepartment(department: Department) {
    this.departmentService.addDepartment(department).subscribe(
      response => {
        // this.getDepartments();
        console.log("Success");
      },
      error => {
        console.log(error);
      }
    );
  }



  createDepartment(department: Department) {
    this.departmentService.createDepartment(department).subscribe(
      createdDepartment => {
        console.log('Department created successfully:', createdDepartment);
        // this.getDepartments();
        this.deptForm.reset();
        alert("Department created successfully!")
        // this.showDepartment();
        this.close()
      },
      error => {
        console.log('Error occurred while creating department:', error);
      }
    );
  }

}
