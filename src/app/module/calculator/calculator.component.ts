import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator2',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  monthly: number = 0;
  CurrentAge: number = 0;
  retirementAge: number = 0;
  inflation: number = 0;
  // monthlyExpense:number = 5000;

  expenseToday: number = 0
  expenseAtRetirement: number = 0
  leanFire: number = 0;
  fire: number = 0;
  fatFire: number = 0;
  
  fireCalculator() {
    this.expenseToday = this.monthly * 12;
   this.expenseAtRetirement =
      this.monthly *
      Math.pow(1 + this.inflation / 100, this.retirementAge - this.CurrentAge);
    this.leanFire = Math.round(this.expenseAtRetirement * 20);
    this.fire = Math.round(this.expenseAtRetirement * 25);
    this.fatFire = Math.round(this.fire * 2);

  
    
    
    
  }
}
