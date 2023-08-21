import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Department } from 'src/app/models/department'; 
import { DepartmentService } from 'src/app/services/department.service'; 
import { AddDepartmentComponent } from '../department-operations/add-department/add-department.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalService } from 'src/app/services/modal.service';
import { UpdateDepartmentComponent } from '../department-operations/update-department/update-department.component';
import { DeleteDepartmentComponent } from '../department-operations/delete-department/delete-department.component';


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
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

  constructor(private modalService: BsModalService, public bsModalRef: BsModalRef,private departmentService: DepartmentService, private router: Router, private formBuilder: FormBuilder) { 

  }

  deptForm!: FormGroup;
  deptFormU!: FormGroup;

  showDepartment(){
    if(this.showAddDepartment == false){
      this.showAddDepartment = true;
    }
    else
    this.showAddDepartment = false;

  }
  
  showUpdateForm(department: Department){
    this.department = department;
    console.log(department.deptId);

    this.deptFormU = this.formBuilder.group({
      'hod': [this.department.hod, Validators.required],
      'staffCount': [this.department.staffCount, Validators.required],
      'email': [this.department.email, Validators.required],
      'description': [this.department.description, Validators.required],
      'phone': [this.department.phone, Validators.required],
      'deptName': [this.department.deptName, Validators.required],
      'deptId': [this.department.deptId, Validators.required],
      
    });
    if(this.showUpdateDepartment == false){
      this.showUpdateDepartment = true;
    }
    else
    this.showUpdateDepartment = false;
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
    this.getDepartments();
  }

  getDepartments() {
    this.departmentService.getDepartments().subscribe(
      departments => {
        this.departments = departments;
      },
      error => {
        console.log(error);
      }
    );
  }

  getDepartmentById(department: Department){
    this.departmentService.getDepartmentById(department.deptId).subscribe(
      response => {
        this.getDepartments();
      },
      error => {
        console.log(error);
      }
    );
  }

  addDepartment(department: Department) {
    this.departmentService.addDepartment(department).subscribe(
      response => {
        this.getDepartments();
        console.log("Success");
      },
      error => {
        console.log(error);
      }
    );
  }


  d: Department = {hod:'',  staffCount: 0,  phone: '',  email: '',  description:'',  deptId:0,  deptName: ''};

  updateDepartment(department: Department) {

    console.log(this.department.deptId);

    // const data = {
    //   deptId: this.department.deptId,
    //   deptName: this.department.deptName,
    //   hod : this.department.hod,
    //   staffCount : this.department.staffCount,
    //   description : this.department.description,
    //   phone : this.department.phone,
    //   email : this.department.email
    // }

    this.d.deptId = department.deptId;
    this.d.deptName = department.deptName;
    this.d.description = department.description;
    this.d.email = department.email;
    this.d.hod = department.hod;
    this.d.staffCount = department.staffCount;
    this.d.phone = department.phone;

    this.departmentService.updateDepartment(this.department.deptId , this.d)
      .subscribe(response => {
        this.getDepartments();
        this.deptForm.reset();
        alert("Department updated successfully!");
        console.log(this.department.deptId);
        this.showUpdateForm(department);
      }, error => {
        console.log(error);
      });
  }


  deleteDepartment(id: number) {
    alert("Are you sure you want to delete this department?");
    this.departmentService.deleteDepartment(id).subscribe(
      response => {
        this.getDepartments();
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
        this.getDepartments();
        this.deptForm.reset();
        alert("Department created successfully!")
        this.showDepartment();
      },
      error => {
        console.log('Error occurred while creating department:', error);
      }
    );
  }

  // bsModalRef!: BsModalRef;
  modalRef!: BsModalRef;
  fetchedData: any;

  showAddDepartmentForm(){
    this.bsModalRef = this.modalService.show(AddDepartmentComponent);
  }

  updateDetails(deptId: number, s: Department){
    this.departmentService.getDepartmentById(deptId).subscribe((data) => {
      this.fetchedData = data;
      this.modalRef = this.modalService.show(UpdateDepartmentComponent, {
        initialState: {
          data: this.fetchedData,
        },
      });
    });


    // this.loadStudents();

  }


  deleteDetails(deptId: number){
    this.departmentService.getDepartmentById(deptId).subscribe((data) => {
      this.fetchedData = data;
      this.modalRef = this.modalService.show(DeleteDepartmentComponent, {
        initialState: {
          data: this.fetchedData,
        },
      });
    });

  }
}



