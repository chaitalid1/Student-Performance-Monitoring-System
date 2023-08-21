import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStudentMarksComponent } from './view-student-marks.component';

describe('ViewStudentMarksComponent', () => {
  let component: ViewStudentMarksComponent;
  let fixture: ComponentFixture<ViewStudentMarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewStudentMarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewStudentMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
