import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Staff } from 'src/app/models/staff';
import { StaffService } from 'src/app/services/staff.service';
import { DeleteSubjectComponent } from '../subject-operations/delete-subject/delete-subject.component';
import { DeleteStaffComponent } from '../staff-operations/delete-staff/delete-staff.component';
import { ViewStaffComponent } from '../staff-operations/view-staff/view-staff.component';
import { UpdateStaffComponent } from '../staff-operations/update-staff/update-staff.component';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent {
students: any;
showAddStaffForm = false;
staff: Staff[] = [];

s : Staff = {staffId:0, name:'', phone:'', email:'', gender:'', dob:'',designation:'',dateOfJoining:'',department:'', experience:''};

staffId = 0;
name = '';
phone = '';
email = '';
gender = '';
dob = '';
designation = '';
dateOfJoining = '';
department = '';
experience = '';

ngOnInit() {
  this.staffForm = this.formBuilder.group({
    staffId: [null, Validators.required],
    name: [null, Validators.required],
    email: [null, Validators.required],
    gender: [null, Validators.required],
    phone: [null, Validators.required],
    dob: [null, Validators.required],
    department: [null, Validators.required],
    designation: [null, Validators.required],
    dateOfJoining: [null, Validators.required],
    experience: [null, Validators.required]

  });
  this.getStaff();
}

showStaffForm(){
  if(this.showAddStaffForm == false){
    this.showAddStaffForm = true;
  }
  else
  this.showAddStaffForm = false;

}

constructor(private staffService: StaffService, private router: Router, private formBuilder: FormBuilder, private modalService: BsModalService) { }

staffForm!: FormGroup;
showAddStaff = false;


  navBack(){
    this.router.navigate(['dashboard']);
  }


  getStaff() {
    this.staffService.getStaff().subscribe(
      staff => {
        this.staff = staff;
      },
      error => {
        console.log(error);
      }
    );
  }

  addStaff(staff: Staff) {
    this.staffService.addStaff(staff).subscribe(
      response => {
        this.getStaff();
      },
      error => {
        console.log(error);
      }
    );
  }

  createStaff(staff: Staff) {
    this.staffService.createStaff(staff).subscribe(
      createdStaff => {
        console.log('Staff created successfully:', createdStaff);
        this.getStaff();
        this.staffForm.reset();
        alert("Staff created successfully!")
        this.showStaff();
      },
      error => {
        console.log('Error occurred while creating Staff:', error);
      }
    );
  }



  showStaff(){
    if(this.showAddStaff == false){
      this.showAddStaff = true;
    }
    else
    this.showAddStaff = false;

  }

  deleteStaff(id: number) {
    this.staffService.deleteStaff(id).subscribe(
      () => {
        console.log('Staff deleted successfully');
        this.getStaff();
      },
      error => {
        console.log('Error occurred while deleting staff:', error);
      }
    );
  }


  updateStaff(staff: Staff) {
    this.staffService.updateStaff(staff.staffId, staff).subscribe(
      updatedStaff => {
        console.log('Staff updated successfully:', updatedStaff);
        // this.loadStaffs();
      },
      error => {
        console.log('Error occurred while updating staff:', error);
      }
    );
  }

  

  bsModalRef!: BsModalRef;
  modalRef!: BsModalRef;
  fetchedData: any;

  
  viewDetails(staffId: number){
    this.staffService.getStaffById(staffId).subscribe((data) => {
      this.fetchedData = data;
      this.modalRef = this.modalService.show(ViewStaffComponent, {
        initialState: {
          data: this.fetchedData,
        },
      });
    });
  }

  deleteDetails(staffId: number){
    this.staffService.getStaffById(staffId).subscribe((data) => {
      this.fetchedData = data;
      this.modalRef = this.modalService.show(DeleteStaffComponent, {
        initialState: {
          data: this.fetchedData,
        },
      });
    });

  }

  updateDetails(deptId: number, s: Staff){
    this.staffService.getStaffById(deptId).subscribe((data) => {
      this.fetchedData = data;
      this.modalRef = this.modalService.show(UpdateStaffComponent, {
        initialState: {
          data: this.fetchedData,
        },
      });
    });


    // this.loadStudents();

  }
}


// private long semId;

// private String semName;
// private int credits;
// private int year; // 1, 2, 3, 4
// private String status;