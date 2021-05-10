import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task1card',
  templateUrl: './task1card.component.html',
  styleUrls: ['./task1card.component.css']
})
export class Task1cardComponent implements OnInit {
  label = 'Write something in the input field to change this label';
  placeholder = 'Ex. QED';
  inputField: string;

  constructor() { }

  ngOnInit(): void {
  }

  labelChange(event: string): void {
    this.label = event;
  }
}
