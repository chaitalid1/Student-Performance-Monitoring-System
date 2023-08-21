import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAllMarksComponent } from './view-all-marks/view-all-marks.component';
import { ViewStudentMarksComponent } from './view-student-marks/view-student-marks.component';
import { UpdateMarksComponent } from './update-marks/update-marks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgPipesModule } from 'ngx-pipes';




@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgPipesModule
  ]
})
export class MarksOperationsModule { }
