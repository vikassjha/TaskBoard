import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskGeneratorComponent } from './task-generator.component';

describe('TaskGeneratorComponent', () => {
  let component: TaskGeneratorComponent;
  let fixture: ComponentFixture<TaskGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskGeneratorComponent]
    });
    fixture = TestBed.createComponent(TaskGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
