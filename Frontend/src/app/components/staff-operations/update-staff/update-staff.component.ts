import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Staff } from 'src/app/models/staff';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-update-staff',
  templateUrl: './update-staff.component.html',
  styleUrls: ['./update-staff.component.css']
})
export class UpdateStaffComponent implements OnInit{
  @Input() data: any;


  satff: Staff[] = [];

  students: any;
  showAddDepartment = false;
  deptCreated= false;
  showUpdateDepartment = false;


  hod = '';
  staffCount = 0;
  phone = '';
  email = '';
  description = '';
  deptId = 0;
  deptName = '';

  id = 0;

  constructor(private modalService: BsModalService, public bsModalRef: BsModalRef, private staffService: StaffService, private router: Router, private formBuilder: FormBuilder) { 

  }

  StaffForm!: FormGroup;
  StaffFormU!: FormGroup;



  close() {
    this.bsModalRef.hide();
    this.router.navigate(['staff'])
  }
  
  showUpdateForm(staff: Staff){
    this.staff = staff;

    this.StaffFormU = this.formBuilder.group({
      'staffId': [this.staff.staffId, Validators.required],
      'name': [this.staff.name, Validators.required],
      'phone': [this.staff.phone, Validators.required],
      'email': [this.staff.email, Validators.required],
      'gender': [this.staff.gender, Validators.required],
      'dob': [this.staff.dob, Validators.required],
      'designation': [this.staff.designation, Validators.required],
      'dateOfJoining': [this.staff.dateOfJoining, Validators.required],
      'department': [this.staff.department, Validators.required],
      'experience': [this.staff.experience, Validators.required],

      
      
      
    });

  }

  ngOnInit() {
    this.StaffForm = this.formBuilder.group({
      'staffId': [this.data.staffId, Validators.required],
      'name': [this.data.name, Validators.required],
      'phone': [this.data.phone, Validators.required],
      'email': [this.data.email, Validators.required],
      'gender': [this.data.gender, Validators.required],
      'dob': [this.data.dob, Validators.required],
      'designation': [this.data.designation, Validators.required],
      'dateOfJoining': [this.data.dateOfJoining, Validators.required],
      'department': [this.data.department, Validators.required],
      'experience': [this.data.experience, Validators.required],
      
    });
  }
  staff : Staff = {staffId:0, name:'', phone:'', email:'', gender:'', dob:'',designation:'',dateOfJoining:'',department:'', experience:''};

  s : Staff = {staffId:0, name:'', phone:'', email:'', gender:'', dob:'',designation:'',dateOfJoining:'',department:'', experience:''};



  updateStaff(staff: Staff) {

    console.log(this.staff.staffId);

    this.s.staffId = this.data.staffId;
    this.s.name = staff.name;
    this.s.phone = staff.phone;
    this.s.email = staff.email;
    this.s.gender = staff.gender;
    this.s.dob = staff.dob;
    this.s.designation = staff.designation;

    this.s.dateOfJoining = staff.dateOfJoining;
    this.s.department = staff.department;
    this.s.experience = staff.experience;



    this.staffService.updateStaff(this.data.staffId , this.s)
      .subscribe(response => {
        // this.getDepartments();
        this.StaffForm.reset();
        alert("Staff updated successfully!");
        console.log(this.staff.staffId);
        this.showUpdateForm(staff);
      }, error => {
        console.log(error);
      });

      this.close();

  }

}
