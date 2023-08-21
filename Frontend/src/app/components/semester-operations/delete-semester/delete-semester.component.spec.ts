import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSemesterComponent } from './delete-semester.component';

describe('DeleteSemesterComponent', () => {
  let component: DeleteSemesterComponent;
  let fixture: ComponentFixture<DeleteSemesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSemesterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteSemesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
