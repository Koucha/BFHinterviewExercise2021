import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { Task1cardComponent } from './task1card.component';
import { Task3validatorPipe } from '../task3validator.pipe';
import { MaterialModule } from '../material/material.module';

describe('Task1cardComponent', () => {
  let component: Task1cardComponent;
  let fixture: ComponentFixture<Task1cardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        Task1cardComponent,
        Task3validatorPipe
      ],
      imports: [
        FormsModule,
        MaterialModule,
        BrowserAnimationsModule
      ]
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
