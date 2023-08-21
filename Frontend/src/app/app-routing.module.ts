import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardsComponent } from './components/dashboards/dashboards.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { DepartmentComponent } from './components/department/department.component';
import { MarksComponent } from './components/marks/marks.component';
import { SemesterComponent } from './components/semester/semester.component';
import { StaffComponent } from './components/staff/staff.component';
import { StudentComponent } from './components/student/student.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { FetchComponent } from './components/fetch/fetch.component';
import { PdfViewerComponent } from './components/pdf-viewer/pdf-viewer.component';
import { ReportsComponent } from './components/reports/reports.component';
import { ModalComponent } from './components/modal/modal.component';
import { AddStudentComponent } from './components/student-operations/add-student/add-student.component';
import { ViewStudentComponent } from './components/student-operations/view-student/view-student.component';
import { UpdateStudentComponent } from './components/student-operations/update-student/update-student.component';
import { AddDepartmentComponent } from './components/department-operations/add-department/add-department.component';
import { ViewDepartmentComponent } from './components/department-operations/view-department/view-department.component';
import { UpdateDepartmentComponent } from './components/department-operations/update-department/update-department.component'; 
import { ViewAllMarksComponent } from './components/marks-operations/view-all-marks/view-all-marks.component';
import { ViewStudentMarksComponent } from './components/marks-operations/view-student-marks/view-student-marks.component';
import { UpdateMarksComponent } from './components/marks-operations/update-marks/update-marks.component';
import { NgPipesModule } from 'ngx-pipes';
import { GenerateReportsComponent } from './components/generate-reports/generate-reports.component';
import { AddSubjectComponent } from './components/subject-operations/add-subject/add-subject.component';
import { ViewSubjectComponent } from './components/subject-operations/view-subject/view-subject.component';
import { DeleteSubjectComponent } from './components/subject-operations/delete-subject/delete-subject.component';
import { UpdateSubjectComponent } from './components/subject-operations/update-subject/update-subject.component';
import { DeleteStudentComponent } from './components/student-operations/delete-student/delete-student.component';
import { DeleteDepartmentComponent } from './components/department-operations/delete-department/delete-department.component';
import { ViewStaffComponent } from './components/staff-operations/view-staff/view-staff.component';
import { AddStaffComponent } from './components/staff-operations/add-staff/add-staff.component';
import { DeleteStaffComponent } from './components/staff-operations/delete-staff/delete-staff.component';
import { UpdateStaffComponent } from './components/staff-operations/update-staff/update-staff.component';
import { ViewSemesterComponent } from './components/semester-operations/view-semester/view-semester.component';
import { UpdateSemesterComponent } from './components/semester-operations/update-semester/update-semester.component';
import { AddSemesterComponent } from './components/semester-operations/add-semester/add-semester.component';
import { DeleteSemesterComponent } from './components/semester-operations/delete-semester/delete-semester.component';



const routes: Routes = [
  { path : '', component: LoginComponent },
  { path : 'dashboard', component: DashboardsComponent },
  { path : 'student' , component : StudentComponent },
  { path : 'staff' , component : StaffComponent },
  { path : 'subjects' , component : SubjectsComponent },
  { path : 'semester' , component : SemesterComponent },
  { path : 'attendance' , component : AttendanceComponent },
  { path : 'marks' , component : MarksComponent },
  { path : 'department' , component : DepartmentComponent },
  { path : 'dashboard' , component : DashboardsComponent },
  { path : 'fetch' , component : FetchComponent },
  { path : 'pdf', component : PdfViewerComponent},
  { path : 'reports', component : ReportsComponent},  
  { path : 'modal', component : ModalComponent},
  { path : 'viewStudent', component : ViewStudentComponent},
  { path : 'addStudent', component : AddStudentComponent},
  { path : 'updateStudent', component : UpdateStudentComponent},
  { path : 'viewDepartment', component : ViewDepartmentComponent},
  { path : 'addDepartment', component : AddDepartmentComponent},
  { path : 'updateDepartment', component : UpdateDepartmentComponent},
  { path : 'viewStudentMarks', component : ViewStudentMarksComponent},
  { path : 'viewALlMarks', component : ViewAllMarksComponent},
  { path : 'updateMarks', component : UpdateMarksComponent},
  { path : 'deleteStudent', component : DeleteStudentComponent},
  { path : 'deleteDepartment', component : DeleteDepartmentComponent},
  { path : 'deleteSemester', component : DeleteSemesterComponent},
  { path : 'deleteStaff', component : DeleteStaffComponent},
  { path : 'deleteSubject', component : DeleteSubjectComponent},
  { path : 'viewStaff', component : ViewStaffComponent},
  { path : 'viewSubject', component : ViewSubjectComponent},
  { path : 'viewSemester', component : ViewSemesterComponent},
  { path : 'addStaff', component : AddStaffComponent},
  { path : 'addSubject', component : AddSubjectComponent},
  { path : 'addSemester', component : AddSemesterComponent},
  { path : 'updateStaff', component : UpdateStaffComponent},
  { path : 'updateSubject', component : UpdateSubjectComponent},
  { path : 'updateSemester', component : UpdateSemesterComponent},




  {
    path: 'component', loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)
  },
  


  
];

// const routes1: Routes = [
//   {
//     path: 'modal/:arrayData/:stringData',
//     component: ModalComponent
//   }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
