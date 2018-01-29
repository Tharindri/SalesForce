import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../services/expense.service';
import { Expense } from '../models/expense';
@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  private expenses: Expense[];
  constructor(private expenseService:ExpenseService) { }

  ngOnInit() {
    this.expenseService.getExpense().subscribe(data=>{
      this.expenses=data;
      

    });
  }
  updateStatus(Id:number)
  {
    console.log(Id);
   this.expenseService.updateStatus("Confirmed",Id).subscribe( expense=>
      {
     console.log(expense);
       
    } );


  }

  updateCancel(Id:number)
  {
    console.log(Id);
   this.expenseService.updateStatus("Rejected",Id).subscribe( notification=>
      {
     console.log(notification);
       
    } );
    

  }





}
