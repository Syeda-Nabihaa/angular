import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator2',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  monthly: number = 50001;
  CurrentAge: number = 30;
  retirementAge: number = 40;
  inflation: number = 10;
  // monthlyExpense:number = 5000;

  expenseToday: number = 0
  expenseAtRetirement: number = 0
  leanFire: number = 0;
  fire: number = 0;
  fatFire: number = 0;
  // yearsUntilRetirement:number=this.retirementAge-this.CurrentAge ;

  
  
  fireCalculator() {
    this.expenseToday = this.monthly * 12;

    const yearsUntilRetirement = this.retirementAge - this.CurrentAge;
    this.expenseAtRetirement =
      this.expenseToday * Math.pow(1 + this.inflation / 100, yearsUntilRetirement);


  //  this.expenseAtRetirement = this.expenseToday * Math.pow(1 + this.inflation / 100, this.yearsUntilRetirement);
  
    this.leanFire = Math.floor(this.expenseAtRetirement)*20;

    this.fire = (this.expenseAtRetirement )* 25;

    this.fatFire = Math.floor(this.fire )* 2;

  
    
    
    
  }
}
