import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { StudentComponent } from './student/student.component';
import { StaffComponent } from './staff/staff.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { SemesterComponent } from './semester/semester.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { MarksComponent } from './marks/marks.component';
import { DepartmentComponent } from './department/department.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FetchComponent } from './fetch/fetch.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { ReportsComponent } from './reports/reports.component';
import { ModalComponent } from './modal/modal.component';
import { AddStudentComponent } from './student-operations/add-student/add-student.component';
import { ViewStudentComponent } from './student-operations/view-student/view-student.component';
import { UpdateStudentComponent } from './student-operations/update-student/update-student.component';
import { AddDepartmentComponent } from './department-operations/add-department/add-department.component';
import { ViewDepartmentComponent } from './department-operations/view-department/view-department.component';
import { UpdateDepartmentComponent } from './department-operations/update-department/update-department.component';
import { GenerateReportsComponent } from './generate-reports/generate-reports.component';
import { ViewSemesterComponent } from './semester-operations/view-semester/view-semester.component';
import { ViewSubjectComponent } from './subject-operations/view-subject/view-subject.component';
import { ViewStaffComponent } from './staff-operations/view-staff/view-staff.component';
import { AddSubjectComponent } from './subject-operations/add-subject/add-subject.component';
import { AddStaffComponent } from './staff-operations/add-staff/add-staff.component';
import { AddSemesterComponent } from './semester-operations/add-semester/add-semester.component';
import { UpdateSemesterComponent } from './semester-operations/update-semester/update-semester.component';
import { UpdateSubjectComponent } from './subject-operations/update-subject/update-subject.component';
import { UpdateStaffComponent } from './staff-operations/update-staff/update-staff.component';
import { DeleteSubjectComponent } from './subject-operations/delete-subject/delete-subject.component';
import { DeleteStaffComponent } from './staff-operations/delete-staff/delete-staff.component';
import { DeleteSemesterComponent } from './semester-operations/delete-semester/delete-semester.component';
import { DeleteDepartmentComponent } from './department-operations/delete-department/delete-department.component';
import { DeleteStudentComponent } from './student-operations/delete-student/delete-student.component';

// const routes: Routes= [
//   { path : 'student' , component : StudentComponent },
//   { path : 'staff' , component : StaffComponent },
//   { path : 'subjects' , component : SubjectsComponent },
//   { path : 'semester' , component : SemesterComponent },
//   { path : 'attendance' , component : AttendanceComponent },
//   { path : 'marks' , component : MarksComponent },
//   { path : 'department' , component : DepartmentComponent },
//   { path : 'dashboard' , component : DashboardsComponent },
//   { path : 'login' , redirectTo:'login',  pathMatch: 'full'}
// ]

@NgModule({
  declarations: [
    DashboardsComponent,
    StudentComponent,
    StaffComponent,
    SubjectsComponent,
    SemesterComponent,
    AttendanceComponent,
    MarksComponent,
    DepartmentComponent,
    LoginComponent,
    FetchComponent,
    PdfViewerComponent,
    ReportsComponent,
    ModalComponent,
    AddStudentComponent,
    ViewStudentComponent,
    UpdateStudentComponent,
    AddDepartmentComponent,
    ViewDepartmentComponent,
    UpdateDepartmentComponent,
    GenerateReportsComponent,
    AddSubjectComponent,
    AddSemesterComponent,
    AddStaffComponent,
    DeleteStaffComponent,
    DeleteSubjectComponent,
    ViewStaffComponent,
    UpdateStaffComponent,
    ViewSubjectComponent,
    UpdateSubjectComponent,
    ViewSemesterComponent,
    UpdateSemesterComponent,
    DeleteSemesterComponent,
    AddSemesterComponent,
    DeleteDepartmentComponent,
    DeleteStudentComponent



  ],
  imports: [
    CommonModule,
    // RouterModule.forRoot(routes),
    RouterModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule
  ]
})
export class ComponentsModule { }
