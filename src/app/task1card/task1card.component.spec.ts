import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task1cardComponent } from './task1card.component';

describe('Task1cardComponent', () => {
  let component: Task1cardComponent;
  let fixture: ComponentFixture<Task1cardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task1cardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Task1cardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
