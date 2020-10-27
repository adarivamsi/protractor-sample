import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  one = 0;
  two = 0;
  result = 0;

  constructor() {}

  ngOnInit() {}

  clear() {
    this.one = 0;
    this.two = 0;
  }
}
