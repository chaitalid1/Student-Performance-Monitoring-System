import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Department } from 'src/app/models/department';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.css']
})
export class UpdateDepartmentComponent {

  @Input() data: any;


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
  deptFormU!: FormGroup;

  showDepartment(){
    if(this.showAddDepartment == false){
      this.showAddDepartment = true;
    }
    else
    this.showAddDepartment = false;

  }

  close() {
    this.bsModalRef.hide();
    this.router.navigate(['department'])
  }
  
  showUpdateForm(department: Department){
    this.department = department;

    this.deptFormU = this.formBuilder.group({
      'hod': [this.department.hod, Validators.required],
      'staffCount': [this.department.staffCount, Validators.required],
      'email': [this.department.email, Validators.required],
      'description': [this.department.description, Validators.required],
      'phone': [this.department.phone, Validators.required],
      'deptName': [this.department.deptName, Validators.required],
      'deptId': [this.department.deptId, Validators.required],
      
    });

  }

  navBack(){
    this.router.navigate(['dashboard']);
  }

  ngOnInit() {
    this.deptForm = this.formBuilder.group({
      hod: [this.data.hod, Validators.required],
      staffCount: [this.data.staffCount, Validators.required],
      email: [this.data.email, Validators.required],
      description: [this.data.description, Validators.required],
      phone: [this.data.phone, Validators.required],
      deptName: [this.data.deptName, Validators.required],
      deptId: [this.data.deptId, Validators.required],
      
    });
  }



  d: Department = {hod:'',  staffCount: 0,  phone: '',  email: '',  description:'',  deptId:0,  deptName: ''};

  updateDepartment(department: Department) {

    console.log(this.department.deptId);

    this.d.deptId = this.data.deptId;
    this.d.deptName = department.deptName;
    this.d.description = department.description;
    this.d.email = department.email;
    this.d.hod = department.hod;
    this.d.staffCount = department.staffCount;
    this.d.phone = department.phone;

    this.departmentService.updateDepartment(this.data.deptId , this.d)
      .subscribe(response => {
        // this.getDepartments();
        this.deptForm.reset();
        alert("Department updated successfully!");
        console.log(this.department.deptId);
        this.showUpdateForm(department);
      }, error => {
        console.log(error);
      });

      this.close();

  }




}
